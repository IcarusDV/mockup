import React from "react";
import { ResizeMode, Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { IVideoObject } from "../../../../@types/IVideoObject";

export const VideoItem = ({
  item,
  shouldPlay,
}: {
  shouldPlay: boolean;
  item: IVideoObject;
}) => {
  const video = useRef<Video | null>(null);
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    if (!video.current) return;

    if (shouldPlay) {
      video.current.playAsync();
    } else {
      video.current.pauseAsync();
      video.current.setPositionAsync(0);
    }
  }, [shouldPlay]);

  return (
    <Pressable
      onPress={() =>
        status.isPlaying
          ? video.current?.pauseAsync()
          : video.current?.playAsync()
      }
    >
      <View style={style.videoContainer}>
        <Video
          ref={video}
          source={{ uri: item.url }}
          style={style.video}
          isLooping
          resizeMode={ResizeMode.COVER}
          useNativeControls={false}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />

        <View style={style.actionsContainer}>
          <View
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 32,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text style={style.userName}>{item.name}</Text>
              <MaterialIcons name="verified" size={16} color="#007AFF" />
            </View>

            <Text style={style.videoDesc}>{item.desc}</Text>

            <Text style={style.translate}>Ver Tradução</Text>
          </View>

          <View style={{ display: "flex", justifyContent: "space-between" }}>
            <TouchableOpacity>
              <Feather name="search" size={32} color="white" />
            </TouchableOpacity>

            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                marginBottom: 80,
              }}
            >
              <View
                style={{
                  position: "relative",
                  marginBottom: 32,
                }}
              >
                <Image style={style.userimage} source={item.profileImage} />
                <View style={style.userimagePlusContainer}>
                  <TouchableOpacity style={style.userimagePlus}>
                    <Entypo name="plus" size={16} color="white" />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={style.videoAction}>
                <AntDesign name="hearto" size={32} color="white" />
                <Text style={style.videoActionText}>{item.likes}K</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.videoAction}>
                <FontAwesome6 name="comment" size={32} color="white" />
                <Text style={style.videoActionText}>{item.comments}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.videoAction}>
                <AntDesign name="sharealt" size={32} color="white" />
                <Text style={style.videoActionText}>{item.shares}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
