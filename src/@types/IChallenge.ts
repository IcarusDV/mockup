import { ImageSourcePropType } from "react-native";

export type IChallenge =  {
    title: string;
    images: ImageSourcePropType;
    currentValue: number;
    totalValue: number;
  }