import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Comidas from "../../component/comidas";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Samosa",
  });

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Comidas
          style={{ width: "300rem" }}
          img={require("../../assets/6img.png")}
        ></Comidas>

        <View>
          <Text
            style={[styles.title, { fontSize: 30 }, { fontWeight: "bold" }]}
          >
            Samosa
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
            1/2 colher (chá) de mostarda em grão 1 colher (sopa) de azeite 1
            unidade pequena de gengibre ralado 1 colher (chá) de
            açafrão-da-terra (cúrcuma) 2 colheres (chá) de cominho moído 1
            pacotinho de ervilha e milho previamente cozido frio. 2 cenouras
            cozidas e cortada em cubinhos 1 couve flor japonesa cozida e
            destrinchada em pedacinhos 5 batatas cozidas, sem casca e cortadas
            em cubinhos Salsa picada Sal a gosto
          </Text>
        </View>
      </View>

      <View style={styles.line} />
      <Text style={[styles.title, { fontSize: 26 }, { fontWeight: "bold" }]}>
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
  Comidas: {
    width: "300%",
  },
  line: {
    borderBottomColor: "#D8d8d8",
    borderBottomWidth: 2,
  },
});
