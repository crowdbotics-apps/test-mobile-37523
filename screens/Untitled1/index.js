import { Slider } from "react-native-elements";
import { TextInput } from "react-native";
import { ActivityIndicator } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = () => {
  return <View style={_styles.sJrcBhpO}>
      <ActivityIndicator style={_styles.qWmgJgwp}></ActivityIndicator><TextInput style={_styles.DYNtVDrk}></TextInput><Slider style={_styles.liFRwQOs} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  sJrcBhpO: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "absolute",
    height: "100%",
    left: -179
  },
  qWmgJgwp: {
    left: 110,
    top: 126,
    position: "absolute",
    width: 50,
    height: 50
  },
  DYNtVDrk: {
    left: 132,
    top: 265,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  liFRwQOs: {
    left: 155,
    top: 364,
    position: "absolute",
    width: 150,
    height: 40
  }
});