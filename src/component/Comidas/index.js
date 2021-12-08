import React from 'react';
import { View, Text, TouchableOpacity, Touchable, Image, StyleSheet } from 'react-native';

export default function Comidas(props) {
 return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
       <Image
            source={props.img}
            style={styles.comidaImg}
         />
        <Text style={styles.comidaText}>
            {props.children}
        </Text>
        <View opacity={0.4}>
        <Text style={styles.comidaText}> {props.cost} </Text>
        </View>   
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
        container:{
            paddingVertical: '2%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        comidaImg:{
            width: 175,
            height: 175
        },
        comidaText:{
            fontSize: 16
        }
});