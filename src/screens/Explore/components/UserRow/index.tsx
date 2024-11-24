import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

interface IProps {
  name: string;
}

export default function UserRow({ name }: IProps) {
  const nameFirstLetter = name?.charAt(0);

  return (
    <View style={style.container}>
      <View style={style.userContainer}>
        <View style={style.userImage}>
          <Text style={style.userImageText}>{nameFirstLetter}</Text>
        </View>
        <Text style={style.userName}>{name}</Text>
      </View>

      <TouchableOpacity style={style.followButton}>
        <Text style={style.followButtonText}>Seguir</Text>
      </TouchableOpacity>
    </View>
  );
}
