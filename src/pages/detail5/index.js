import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Comidas from "../../component/comidas";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Pão com Frango",
  });

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Comidas
          style={{ width: "300rem" }}
          img={require("../../assets/5img.jpg")}
        ></Comidas>

        <View>
          <Text
            style={[styles.title, { fontSize: 30 }, { fontWeight: "bold" }]}
          >
            Pão com Frango
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
            500 gramas de filés de frango Óleo 1 colher (chá) de páprica doce 1
            colher (chá) de cúrcuma 1 colher (chá) de cominho em pó 2 colheres
            (chá) de sal 2 colheres (sopa) de suco de gengibre 3 colheres (sopa)
            de suco de limão Coentro picado a gosto
          </Text>
        </View>
      </View>

      <View style={styles.line} />
      <Text style={[styles.title, { fontSize: 26 }, { fontWeight: "bold" }]}>
        Criador do prato
      </Text>

      <Comidas
        style={{ width: "300rem" }}
        img={require("../../assets/Bruno.png")}
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
