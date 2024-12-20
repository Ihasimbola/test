import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { GetImage } from "@/components/images/Image";
import Input from "@/components/input";
import AppButton from "@/components/button/AppButton";
import { useRouter } from "expo-router";
import UserService from "@/service/userService";
import { User } from "@/types/user";

const SignInScreen = () => {
  const [value, setValue] = React.useState<Omit<User, "id">>({
    email: "",
    password: "",
    username: "",
    phone: "",
    pays: "",
    region: "",
  });

  const router = useRouter();

  const handleChangeText = (text: string, input: string) => {
    setValue((prevState) => ({
      ...prevState,
      [input]: text,
    }));
  };

  const handleSignup = async () => {
    try {
      if (Object.values(value).every((val) => val === "")) {
        alert("Please fill in all the fields");
        return;
      }

      const response = await UserService.createUser(value);

      if (response.status === 201) {
        router.replace("/home/(tabs)");
      }
    } catch (error) {
      console.error("An error occured:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={undefined}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
        marginTop: 16,
      }}
    >
      <View style={styles.imgContainer}>
        <Image source={GetImage("user")} style={{ width: 100, height: 100 }} />
        <View style={styles.addIcon}>
          <Image source={GetImage("add")} style={{ width: 24, height: 24 }} />
        </View>
      </View>

      <View style={styles.signForm}>
        <Input
          placeholder="Full name"
          icon={"profile"}
          value={value.username}
          onChangeText={(text) => handleChangeText(text, "username")}
        />
        <Input
          placeholder="Email"
          icon={"email"}
          value={value.email}
          onChangeText={(text) => handleChangeText(text, "email")}
        />
        <Input
          placeholder="Phone number"
          icon={"phone"}
          value={value.phone}
          onChangeText={(text) => handleChangeText(text, "phone")}
        />
        <Input
          placeholder="Password"
          icon={"password"}
          secureTextEntry={true}
          value={value.password}
          onChangeText={(text) => handleChangeText(text, "password")}
        />
        <Input
          placeholder="Pays"
          icon={"localisation"}
          value={value.pays}
          onChangeText={(text) => handleChangeText(text, "pays")}
        />
        <Input
          placeholder="Region"
          icon={"localisation"}
          value={value.region}
          onChangeText={(text) => handleChangeText(text, "region")}
        />
        <AppButton title="Sign up" onPress={handleSignup} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    position: "relative",
  },
  addIcon: {
    position: "absolute",
    bottom: 0,
    right: 8,
    borderRadius: 50,
  },
  signForm: {
    padding: 24,
    backgroundColor: "#617ded",
    flex: 1,
    gap: 16,
    width: "100%",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});

export default SignInScreen;
