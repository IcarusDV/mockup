import { LinearGradient } from "expo-linear-gradient";
import React = require("react");
import { Image, Text, View } from "react-native";
import { themas } from "../../../../global/themes";
import { style } from "./style";
import { IChallenge } from "../../../../@types/IChallenge";

export default function Challenge({
  title,
  images,
  currentValue,
  totalValue,
}: IChallenge) {
  const isChallengeComplete = currentValue >= totalValue;
  const totalComplete = currentValue / totalValue;

  return (
    <LinearGradient
      colors={[themas.colors.primary, themas.colors.secondaryPurple]}
      locations={[0.4, 0.7]}
      style={style.challengeGradient}
    >
      <Image style={style.challengeImage} source={images} />

      <View style={{ flex: 1, maxWidth: 200 }}>
        <Text style={style.challengeTitle}>{title}</Text>
        <Text style={style.challengeStatus}>
          {isChallengeComplete ? "Desafio Completo" : "Desafio Incompleto"}
        </Text>

        <View style={style.challengeRangeContainer}>
          <LinearGradient
            colors={[themas.colors.lightgray, "transparent"]}
            style={style.challengeRange}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            locations={[totalComplete, totalComplete]}
          ></LinearGradient>
          <View style={style.challengeRangeValues}>
            <Text style={style.challengeRangeCurrentValue}>
              {currentValue} Km
            </Text>
            <Text style={style.challengeRangeFinalValue}>{totalValue} Km</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
