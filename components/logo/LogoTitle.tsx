import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const LogoTitle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 200,
          height: 60,
          resizeMode: "stretch",
          backgroundColor: "#ffffff",
        }}
        source={require("../../assets/logo.png")}
      />
      <Text style={styles.title}>Get started by signing up!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  title: {
    color: "#ffffff",
    fontFamily: "Roboto-Light",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default LogoTitle;
