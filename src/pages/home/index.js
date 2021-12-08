import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import Comidas from '../../component/comidas';


export default function Home() {
  const navigation = useNavigation();

 return (
  <ScrollView>
   <View styles={styles.container}>
     <View style={styles.header}>
      <Image
      source={require('../../assets/banner.jpg')}
      style={styles.image}
      />

      <View style={styles.containerText}>
        <Text style={styles.text}>ENSOPADOS</Text>
        <Text style={styles.text}>•</Text>
        <Text style={[styles.text, { color: '#CECECF' }]}>SALGADOS</Text>
        <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf:'center'}}>
          <MaterialIcons
          name="filter-list"
          size={24}
          color='#000'
          />
        </TouchableOpacity>
      </View>
     </View>

     <View style={styles.line} />

     
       <Text style={styles.text}>CARDÁPIO</Text>

       <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Comidas img={require('../../assets/1img.jpeg')} cost="R$31,99" onClick={()=> navigation.navigate('Detail')}>
          Curry de Peixe
        </Comidas>
        <Comidas img={require('../../assets/2img.png')} cost="R$25,99" onClick={()=> navigation.navigate('Detail2')}>
          Frango na Manteiga
        </Comidas>
       </View>

       <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Comidas img={require('../../assets/3img.jpg')} cost="R$43,99" onClick={()=> navigation.navigate('Detail3')}>
          Vada Pav
        </Comidas>
        <Comidas img={require('../../assets/4img.jpg')} cost="R$55,99" onClick={()=> navigation.navigate('Detail4')}>
          Sopa verde
        </Comidas>
       </View>

       <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Comidas img={require('../../assets/5img.jpg')} cost="R$43,99" onClick={()=> navigation.navigate('Detail5')}>
          Pão com Frango
        </Comidas>
        <Comidas img={require('../../assets/6img.png')} cost="R$55,99" onClick={()=> navigation.navigate('Detail6')}>
          Samosa
        </Comidas>
       </View>
       
   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  width: '100%',
  backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%',
    height: 150,
  },
  containerText:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontSize: 20,
    marginHorizontal:'1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});