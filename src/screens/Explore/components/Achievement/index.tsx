import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { themas } from "../../../../global/themes";
import { style } from "./style";

interface IProps {
  icon: ReactNode;
  title: string;
}

export default function Achievement({ icon, title }: IProps) {
  return (
    <View style={style.container}>
      <View style={style.iconContainer}>{icon}</View>

      <Text style={style.title}>{title}</Text>
      <LinearGradient
        style={style.grandient}
        colors={[themas.colors.primary, "transparent"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0.5, 0.5]}
      ></LinearGradient>
    </View>
  );
}
