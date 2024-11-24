import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { style } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { themas } from "../../global/themes";
import ProgressDate from "./components/ProgressDate";
import VerticalProgressBar from "./components/VerticalProgressBar";
import TabBar from "../../components/TabBar";

export type IDate = {
  day: string;
  number: string;
  activities: { time: string; progress: number }[];
};

export default function ProgressScreen() {
  const [dates, setDates] = useState<IDate[]>([]);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const generateLast7Days = () => {
      const today = new Date();
      const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
      const last7Days: IDate[] = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i);

        // Gerar atividades aleatórias para o dia (Apenas para demostração do APP)
        const activities = Array.from({ length: 7 }, () => ({
          time: `${Math.floor(Math.random() * 24)}`,
          progress: Math.floor(Math.random() * 101),
        }));

        last7Days.unshift({
          day: daysOfWeek[date.getDay()],
          number: date.getDate().toString(),
          activities,
        });
      }

      setDates(last7Days);
      setSelectedDate(last7Days.length - 1);
    };

    generateLast7Days();
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [dates]);

  return (
    <>
      <LinearGradient
        colors={[themas.colors.primary, themas.colors.secondaryPurple, "white"]}
        style={style.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.2, 0.4]}
      >
        <Text style={style.title}>Progresso da Corrida</Text>

        <View style={style.progressContainer}>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={style.progressDateList}
              ref={scrollViewRef}
            >
              {dates.map((date, index) => (
                <ProgressDate
                  onClick={() => setSelectedDate(index)}
                  key={index}
                  number={date.number}
                  title={date.day}
                  isSelected={selectedDate === index}
                />
              ))}
            </ScrollView>
          </View>

          {selectedDate !== null && dates.length > 0 && (
            <View style={{ marginHorizontal: "auto" }}>
              <ScrollView
                style={style.progressBarList}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {dates[selectedDate].activities
                  .sort((a, b) => parseInt(a.time) - parseInt(b.time))
                  .map((activity, index) => (
                    <VerticalProgressBar
                      key={index}
                      hour={activity.time}
                      progress={activity.progress}
                    />
                  ))}
              </ScrollView>
            </View>
          )}
        </View>
      </LinearGradient>
      <TabBar currentRoute="PROGRESS" />
    </>
  );
}
