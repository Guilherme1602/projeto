import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

import Comidas from "../../component/comidas";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Curry de Peixe",
  });

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Comidas
          style={{ width: "300rem" }}
          img={require("../../assets/1img.jpeg")}
        ></Comidas>

        <View>
          <Text
            style={[styles.title, { fontSize: 30 }, { fontWeight: "bold" }]}
          >
            {" "}
            Curry de Peixe{" "}
          </Text>
        </View>

        <View style={styles.line} />

        <View>
          <Text
            style={[styles.title, { fontSize: 26 }, { fontWeight: "bold" }]}
          >
            Ingredientes do prato:
          </Text>
          <Text style={[styles.title, { fontSize: 24 }, { marginTop: 20 }]}>
            3 filés de merluza cortados ao meio suco de 1 limão raspas de 1
            limão curry a gosto sal e pimenta do reino a gosto 1 ovo levemente
            batido farinha de trigo para empanar farinha panko (ou de rosca)
            para empanar óleo para fritar
          </Text>
        </View>
      </View>

      <View style={styles.line} />
      <Text
            style={[styles.title, { fontSize: 26 }, { fontWeight: "bold" }]}
          >
            Criador do prato

          </Text>

          <Comidas
          style={{ width: "300rem" }}
          img={require("../../assets/Lucão.png")}
        ></Comidas>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundcolor: "#FFF",
  },
  img: {
    width: 300,
  },
  /* title:{
    fontFamily: 'Anton_400Regular'
  }, */
  Comidas: {
    width: "300%",
  },
  line: {
    borderBottomColor: "#D8d8d8",
    borderBottomWidth: 2,
  },
});
