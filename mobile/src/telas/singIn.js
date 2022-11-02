import React from "react";

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Checkbox from "expo-checkbox";

import Logo from "../../assets/Logo.png";
import iconStudent from "../../assets/icon.png";

import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';

export default function SingIn() {
  const[fontsLoaded] = useFonts({

  });

  if(!fontsLoaded){
    <AppLoading/>
  }

  return (
    <View style={styles.body}>
      <View style={styles.topLogo}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.screem}>
        {/* <View style={styles.teste}>
          <View style={styles.comp1}>
            <Text>Student</Text>
          </View>
          <View style={styles.comp2}>
            <Text style={{ color: "#FFF" }}>Leader</Text>
          </View>
        </View> */}
        <View style={styles.singUp}>
          <Image source={iconStudent} style={styles.icon} />
          <View style={styles.inputs}>
            <Text style={{ color: "black" }}>E-mail</Text>
            <TextInput placeholder="Digite seu email" style={styles.input} />
          </View>
          <View style={styles.inputs}>
            <Text style={{ color: "black" }}>Senha</Text>
            <TextInput placeholder="Digite sua senha" style={styles.input} />
          </View>
        </View>
      </View>
      <View style={styles.remember}>
        <Checkbox color={"#FFF"} style={{ height: 16, width: 16 }}>
         
        </Checkbox>
        <Text style={{ color: "#FFF",fontSize:12,marginLeft:15,fontWeight:'600' }}>Remember?</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 20, color: "#FFF", fontWeight: "600" }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#7B2CBF",
    flex: 1,
    alignItems: "center",
  },
  singUp: {
    width: 297,
    height: 254,
    backgroundColor: "#A16AD9",
    borderRadius: 23,
    borderTopRightRadius: 1,
    alignItems: "center",
  },
  inputs: {
    width: 252,
    marginBottom: 36,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    width: 252,
    borderRadius: 18,
  },
  logo: {
    width: 90,
    height: 86,
  },
  topLogo: {
    width: "100%",
    alignItems: "center",
  },
  icon: {
    marginTop: 15,
    height: 22,
    width: 22,
  },
  screem: {
    width: 297,
    height: 286,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  teste: {
    height: 32,
    width: 168,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  comp1: {
    height: 32,
    width: 84,
    backgroundColor: "#A16AD9",
    borderTopLeftRadius: 12,
    borderColor: "#FFFFFF",
  },
  comp2: {
    height: 32,
    width: 84,
    backgroundColor: "#A16AD9",
    borderTopLeftRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor:'#FFF',
    borderWidth:2,
  },
  button: {
    width: 124,
    height: 55,
    marginTop: 27,
    borderWidth: 5,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#A16AD9",
  },
  remember: {
    width: 95,
    height: 16,
    alignSelf: "flex-start",
    marginLeft: 81,
    marginTop: 28,
    flexDirection:'row'
  },
});
