import { ImageSourcePropType } from "react-native";

export type IVideoObject = {
    url: string;
    name: string;
    desc: string;
    likes: string | number;
    comments: string | number;
    shares: string | number;
    profileImage: ImageSourcePropType;
}