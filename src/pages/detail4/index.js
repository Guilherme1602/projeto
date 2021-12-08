import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

import Comidas from "../../component/comidas";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Sopa verde",
  });

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Comidas
          style={{ width: "300rem" }}
          img={require("../../assets/4img.jpg")}
        ></Comidas>

        <View>
          <Text
            style={[styles.title, { fontSize: 30 }, { fontWeight: "bold" }]}
          >
            Sopa verde
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
            1 xícara de filé de peito de frango em cubos de 2 cm 1/2 cebola em
            cubos pequenos 4 dentes de alho picados 1 cenoura média ralada em
            ralo médio 1/2 abobrinha italiana em cubinhos ou à julienne 1/4 copo
            de arroz branco sementes de 2 bagos de cardamomo 1 colher de café de
            curry 1 colher de chá de páprica doce 1 colher de café de canela em
            pó sal pimenta-do-reino
          </Text>
        </View>
      </View>

      <View style={styles.line} />
      <Text style={[styles.title, { fontSize: 26 }, { fontWeight: "bold" }]}>
        Criador do prato
      </Text>

      <Comidas
        style={{ width: "300rem" }}
        img={require("../../assets/Cryss.png")}
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
