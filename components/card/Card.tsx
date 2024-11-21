import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GetImage, images } from "../images/Image";

interface Props {
  title: string;
  image: keyof typeof images;
}

const Card = ({ title, image }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={GetImage(image)} style={{ width: 120, height: 120 }} />
      <Text style={{ textAlign: "center" }}>{title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "white",
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#C5D3E8",
  },
});
