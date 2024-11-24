import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { style } from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import UserRow from "./components/UserRow";
import { IUserExplore } from "../../@types/IUserExplore";
import { exploreUser } from "../../mocks/exploreUsers";
import ChallengesList from "./components/ChallengesList";
import Achievement from "./components/Achievement";
import TabBar from "../../components/TabBar";

const Explore = () => {
  const [users, setUsers] = useState<IUserExplore[]>(exploreUser);
  const [searchText, setSearchText] = useState("");

  const filtredUsers = searchText
    ? users.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : users;

  function renderUsersList() {
    if (!filtredUsers.length) {
      return (
        <View>
          <Text style={style.noUsersFoundText}>
            Nenhum usuário encontrado :(
          </Text>
        </View>
      );
    }

    return (
      <View>
        {filtredUsers.map((user, index) => (
          <UserRow key={index} name={user.name} />
        ))}
      </View>
    );
  }

  return (
    <>
      <ScrollView style={style.container}>
        <Text style={style.title}>Explorar</Text>

        <View style={style.searchInputContainer}>
          <TouchableOpacity>
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            style={style.searchInput}
            placeholder="Pesquisar..."
          />
        </View>

        {renderUsersList()}

        <View style={style.enviteButtonContainer}>
          <Text style={style.enviteText}>
            Convide amigos que não estão no Moveup
          </Text>
          <TouchableOpacity style={style.enviteButton}>
            <AntDesign name="upload" size={22} color="white" />
            <Text style={style.enviteButtonText}>Convidar</Text>
          </TouchableOpacity>
        </View>

        <ChallengesList />

        <View style={style.achievementsContainer}>
          <Text style={style.label}>Conquistas</Text>
          <View style={style.achievementList}>
            <Achievement
              icon={
                <FontAwesome5
                  name="medal"
                  style={style.achievementIcon}
                  size={32}
                  color="white"
                />
              }
              title="Cavaleiro Ativo"
            />
            <Achievement
              icon={
                <MaterialCommunityIcons
                  name="progress-star"
                  size={32}
                  style={style.achievementIcon}
                  color="white"
                />
              }
              title="Viajante"
            />
          </View>
        </View>
      </ScrollView>

      <TabBar currentRoute="EXPLORE" />
    </>
  );
};

export default Explore;
