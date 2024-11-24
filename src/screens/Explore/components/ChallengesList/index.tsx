import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";
import Desafio1 from "../../../../assets/desafio1.png";
import Desafio2 from "../../../../assets/desafio2.png";
import Challenge from "../Challenge";

export default function ChallengesList() {
  return (
    <View style={style.container}>
      <Text style={style.label}>Desafios</Text>

      <View style={style.challengeList}>
        <Challenge
          title="Trotar em Viagem"
          images={Desafio1}
          currentValue={1000}
          totalValue={1000}
        />

        <Challenge
          title="Ei, couch Potato!"
          images={Desafio2}
          currentValue={100}
          totalValue={1000}
        />
      </View>
    </View>
  );
}
