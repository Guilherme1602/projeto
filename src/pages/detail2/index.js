import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

import Comidas from "../../component/comidas";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Frango na manteiga",
  });

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Comidas
          style={{ width: "300rem" }}
          img={require("../../assets/2img.png")}
        ></Comidas>

        <View>
          <Text
            style={[styles.title, { fontSize: 30 }, { fontWeight: "bold" }]}
          >
            Frango na Manteiga
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
            800 g de peito de frango sem pele em cubos de uns 2 cm ¼ de colher
            (chá) de cominho ¼ de colher (chá) de coentro em grão esmagado ¼ de
            colher (chá) de canela em pó 2 pitadas de cravo em pó 1 colher (chá)
            de cúrcuma ½ colher (chá) de pimenta-caiena (ou a gosto) 2 colheres
            (chá) de páprica doce 1 dente de alho sem casca 1 rodela de 1 cm de
            gengibre sem casca 1 colher (chá) de sal Suco de 1 limão ¾ de xícara
            (chá) de iogurte natural (normalmente 1 copinho)
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
