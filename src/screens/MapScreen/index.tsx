import React, { useEffect, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ProfileImage from "../../assets/profile.png";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { style } from "./style";
import { formatNumber } from "../../utils/formatNumber";
import { themas } from "../../global/themes";
import { generateFakeData } from "../../utils/generateFakeData";
import TabBar from "../../components/TabBar";

export default function MapScreen() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const mapRef = useRef<MapView | null>(null);
  const counterRef = useRef<NodeJS.Timeout | null>(null);

  async function requestLocationPermission() {
    try {
      const { status } = await requestForegroundPermissionsAsync();

      if (status === "granted") {
        const currentPosition = await getCurrentPositionAsync();
        setLocation(currentPosition);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function onChangeLocation(location: LocationObject) {
    setLocation(location);
    mapRef.current?.animateCamera({
      pitch: 60,
      center: location.coords,
    });
  }

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      onChangeLocation
    );
  }, []);

  function unpause() {
    setIsPaused(false);
  }

  function startCounter() {
    if (!counterRef.current) {
      counterRef.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
      unpause();
    }
  }

  function stopCounter() {
    if (counterRef.current) {
      clearInterval(counterRef.current);
      counterRef.current = null;
    }
    setIsPaused(true);
  }

  function renderCounter() {
    const hours = Math.floor(counter / 3600);
    const minutes = Math.floor((counter % 3600) / 60);
    const seconds = counter % 60;

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
      seconds
    )}`;
  }

  const { calories, distance, speed } = generateFakeData(counter);

  return (
    <>
      <View style={style.container}>
        {location ? (
          <MapView
            ref={mapRef}
            style={style.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              description="Imagem de Perfil"
            >
              <Image source={ProfileImage} style={style.markerImage} />
            </Marker>
          </MapView>
        ) : null}

        {isPaused ? (
          <View style={style.pausedContainer}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <View>
                <Text style={{ color: themas.colors.lightgray, fontSize: 14 }}>
                  Tempo de Corrida
                </Text>
                <Text
                  style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}
                >
                  {renderCounter()}
                </Text>
              </View>

              <TouchableOpacity
                onPress={unpause}
                style={style.pausedBackButton}
              >
                <Ionicons name="arrow-back" size={18} color="white" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: themas.colors.secondaryPurple,
                marginTop: 12,
                paddingHorizontal: 8,
                paddingVertical: 12,
                borderRadius: 8,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View style={style.pausedItem}>
                <Text style={{ fontSize: 18 }}>🏃</Text>
                <View>
                  <Text style={style.pausedItemValue}>{distance}</Text>
                  <Text style={style.pausedItemDesc}>km</Text>
                </View>
              </View>

              <View style={style.divider} />

              <View style={style.pausedItem}>
                <Text style={{ fontSize: 18 }}>🔥</Text>
                <View>
                  <Text style={style.pausedItemValue}>{calories}</Text>
                  <Text style={style.pausedItemDesc}>kcal</Text>
                </View>
              </View>

              <View style={style.divider} />

              <View style={style.pausedItem}>
                <Text style={{ fontSize: 18 }}>⚡</Text>
                <View>
                  <Text style={style.pausedItemValue}>{speed}</Text>
                  <Text style={style.pausedItemDesc}>km/hr</Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={style.buttonsContainer}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 32,
                fontWeight: 800,
                marginBottom: 4,
              }}
            >
              {renderCounter()}
            </Text>
            <View style={style.buttonsGroup}>
              <TouchableOpacity onPress={startCounter} style={style.button}>
                <FontAwesome name="play" size={32} color="white" />
                <Text style={style.buttonText}>Começar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={stopCounter} style={style.button}>
                <FontAwesome name="pause" size={32} color="white" />
                <Text style={style.buttonText}>Pausar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <TabBar currentRoute="MAP" />
    </>
  );
}
