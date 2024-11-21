import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { GetImage, images } from "../images/Image";

interface Props extends TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  icon: keyof typeof images | React.JSX.Element;
  onChangeText?: (text: string) => void;
}

export default function Input({
  placeholder,
  value = "",
  icon,
  onChangeText,
  ...props
}: Props) {
  return (
    <View style={styles.container}>
      {typeof icon === "string" ? (
        <Image
          source={GetImage(icon)}
          style={{ width: 24, height: 24, ...styles.icon }}
        />
      ) : (
        <View style={styles.icon}>{icon}</View>
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 999,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 35,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "white",
  },
  icon: {
    position: "absolute",
    top: 10,
    left: 8,
    zIndex: 1000,
  },
});
