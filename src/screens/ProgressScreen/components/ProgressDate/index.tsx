import React = require("react");
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

interface IProps {
  title: string;
  number: string | number;
  onClick: () => void;
  isSelected?: boolean;
}

export default function ProgressDate({
  title,
  number,
  isSelected,
  onClick,
}: IProps) {
  return (
    <View style={isSelected ? style.containerSelected : style.container}>
      <TouchableOpacity onPress={onClick}>
        <Text style={isSelected ? style.titleSelected : style.title}>
          {title}
        </Text>
        <Text style={isSelected ? style.dayNumberSelected : style.dayNumber}>
          {number}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
