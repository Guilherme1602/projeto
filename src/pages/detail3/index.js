import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

import Comidas from "../../component/comidas";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Vada Pav",
  });

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Comidas
          style={{ width: "300rem" }}
          img={require("../../assets/3img.jpg")}
        ></Comidas>

        <View>
          <Text
            style={[styles.title, { fontSize: 30 }, { fontWeight: "bold" }]}
          >
            Vada Pav
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
            Chutney de alho seco: 2 colheres de chá de óleo 1/4 de xícara de
            alho , cerca de 15 dentes 1 xícara de coco ralado , use fresco 3
            colheres de chá de pimenta vermelha em pó da caxemira ou adicione
            mais a gosto 1/2 colher de chá de sal Chutney verde: 1 molho de
            coentro 1-2 pimentão verde 2 dentes de alho 1/4 de colher de chá de
            cominho em pó 1/4 colher de chá de sal Suco de 1 limão 1 colher de
            sopa de água. {/* , conforme necessário 1/2 colher de chá de açúcar ,
            opcional Chutney de tamarindo: 1 xícara de água 1/4 de xícara de
            pasta de tamarindo 50 gramas de açúcar mascavo 3 colheres de sopa de
            açúcar , ou a gosto 1/2 colher de chá de sal 1/2 colher de chá de
            pimenta vermelha em pó , ou a gosto 1/2 colher de chá de cominho em
            pó 1/2 colher de chá de gengibre em pó Vada: 1 polegada de gengibre
            5-6 alho grande 2 pimentões verdes 1 colher de sopa de óleo 3/4
            colher de chá de sementes de mostarda 1/4 de colher de chá de hing ,
            também conhecida como asafetida 12-15 folhas de curry 4 batatas
            médias , cerca de 600 gramas 1/4 de colher de chá de açafrão 3/4 de
            colher de chá de sal , ou a gosto 2 colheres de sopa de coentro
            picado Massa: 1 xícara de besan , também conhecida como farinha de
            grão de bico 1/4 de colher de chá de açafrão 1/2 colher de chá de
            sal Pitada de bicarbonato de sódio 1/2 xícara de água , + 1-2
            colheres de sopa extras, conforme necessário Outros ingredientes: 10
            ladi pav Óleo vegetal , para fritar Manteiga , para tostar os pavs */}
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
