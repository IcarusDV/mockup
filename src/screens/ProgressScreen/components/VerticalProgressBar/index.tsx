import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import { themas } from "../../../../global/themes";
import { style } from "./style";

interface IProps {
  hour: string;
  progress: number;
}

export default function VerticalProgressBar({ hour, progress }: IProps) {
  const randomValue = progress / 100;

  return (
    <View style={style.container}>
      <LinearGradient
        style={style.gradient}
        colors={[themas.colors.low_opacity_white, themas.colors.primary]}
        locations={[randomValue, randomValue]}
      />
      <Text style={style.hourText}>{hour}</Text>
    </View>
  );
}
