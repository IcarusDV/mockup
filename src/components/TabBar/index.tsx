import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { style } from "./style";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { themas } from "../../global/themes";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = 50;
const CORNER_RADIUS = 0;
const CUTOUT_RADIUS = 36;
const CUTOUT_LEFT_X = WIDTH / 2 - CUTOUT_RADIUS;
const CUTOUT_RIGHT_X = WIDTH / 2 + CUTOUT_RADIUS;

/**
 * Line by line explanation
 * - Start in the bottom-left
 * - Draw a line to top-left
 * - Draw a line to top-right
 * - Draw a line to bottom-right
 * - Close the path
 */
const d = `
M0,${HEIGHT}
L0,${CORNER_RADIUS} Q0,0 ${CORNER_RADIUS},0
L${CUTOUT_LEFT_X},0
A${CUTOUT_RADIUS},${CUTOUT_RADIUS} 0 0 0 ${CUTOUT_RIGHT_X},0
L${WIDTH - CORNER_RADIUS},0 Q${WIDTH},0 ${WIDTH},${CORNER_RADIUS}
L${WIDTH},${HEIGHT}
Z
`;

type ScreensTypes = "HOME" | "EXPLORE" | "PROGRESS" | "USER" | "MAP";

interface IProps {
  currentRoute: ScreensTypes;
}

type Routes = "Explore" | "Progress" | "Map" | "Profile" | "Feed";

export default function TabBar({ currentRoute }: IProps) {
  const navigate = useNavigation();

  function goTo(route: Routes) {
    navigate.navigate(route);
  }

  return (
    <View style={style.tabBarContainer}>
      <Svg width={WIDTH} height={HEIGHT} fill="white">
        <Path d={d} />
      </Svg>

      <View style={style.tabBarButtons}>
        <TouchableOpacity onPress={() => goTo("Feed")} style={style.tabButton}>
          <Feather
            name="home"
            size={26}
            color={
              currentRoute === "HOME" ? themas.colors.secondaryPurple : "black"
            }
          />
          {currentRoute === "HOME" ? (
            <View style={style.selectedRoutePin}></View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goTo("Explore")}
          style={style.tabButton}
        >
          <Ionicons
            name="rocket-outline"
            size={26}
            color={
              currentRoute === "EXPLORE"
                ? themas.colors.secondaryPurple
                : "black"
            }
          />
          {currentRoute === "EXPLORE" ? (
            <View style={style.selectedRoutePin}></View>
          ) : null}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => goTo("Map")}
          style={[style.tabButton, { position: "relative" }]}
        >
          <View
            style={
              currentRoute === "MAP"
                ? style.centerButtonSelected
                : style.centerButton
            }
          >
            <View
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "100%",
                borderRadius: 128,
              }}
            ></View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => goTo("Progress")}
          style={style.tabButton}
        >
          <Feather
            name="bar-chart"
            size={26}
            color={
              currentRoute === "PROGRESS"
                ? themas.colors.secondaryPurple
                : "black"
            }
          />
          {currentRoute === "PROGRESS" ? (
            <View style={style.selectedRoutePin}></View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goTo("Profile")}
          style={style.tabButton}
        >
          <Feather
            name="user"
            size={26}
            color={
              currentRoute === "USER" ? themas.colors.secondaryPurple : "black"
            }
          />
          {currentRoute === "USER" ? (
            <View style={style.selectedRoutePin}></View>
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
}
