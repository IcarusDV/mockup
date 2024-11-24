import { View, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { VideoItem } from "./components/VideoItem";
import useStatusBarEnabled from "../../hooks/useStatusBarEnabled";
import { IVideoObject } from "../../@types/IVideoObject";
import RunnerPhoto from "../../assets/runnerPhoto.png";
import RunnerPhoto2 from "../../assets/runnerPhoto2.png";
import RunnerPhoto3 from "../../assets/runnerPhoto3.jpeg";
import RunnerPhoto4 from "../../assets/runnerPhoto4.jpeg";
import RunnerPhoto5 from "../../assets/runnerPhoto5.jpg";
import TabBar from "../../components/TabBar";

const videos: IVideoObject[] = [
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    name: "Carlos Almeida",
    desc: "Adoro usar o MoveUp para registrar meus progressos. Confira este vídeo...",
    comments: "452",
    likes: "120.3",
    shares: "324",
    profileImage: RunnerPhoto3,
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    name: "Mariana Silva",
    desc: "Se você busca motivação para seus treinos, o MoveUp pode te ajudar...",
    comments: "837",
    likes: "398.2",
    shares: "531",
    profileImage: RunnerPhoto2,
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "João Mendes",
    desc: "Conheça como eu melhorei minha performance usando o MoveUp...",
    comments: "672",
    likes: "210.7",
    shares: "489",
    profileImage: RunnerPhoto4,
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    name: "Ana Clara",
    desc: "Se você corre como eu e usa o MoveUp, este vídeo pode te interessar...",
    comments: "912",
    likes: "322.5",
    shares: "612",
    profileImage: RunnerPhoto,
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    name: "Pedro Rocha",
    desc: "O MoveUp transformou a forma como eu acompanho minhas corridas. Veja mais...",
    comments: "578",
    likes: "184.3",
    shares: "295",
    profileImage: RunnerPhoto5,
  },
];

export default function FeedScreen() {
  const { changeStatusBarVisibility } = useStatusBarEnabled();

  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  };

  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  useEffect(() => {
    changeStatusBarVisibility(false);

    return () => {
      changeStatusBarVisibility(true);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={videos}
        renderItem={({ item, index }) => (
          <VideoItem
            item={item}
            shouldPlay={index === currentViewableItemIndex}
          />
        )}
        keyExtractor={(item) => item.name}
        pagingEnabled
        horizontal={false}
        showsVerticalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <TabBar currentRoute="HOME" />
    </View>
  );
}
