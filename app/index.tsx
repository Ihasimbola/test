import AppButton from "@/components/button/AppButton";
import ProfileIcon from "@/components/icons/ProfileIcon";
import { GetImage } from "@/components/images/Image";
import Input from "@/components/input";
import UserService from "@/service/userService";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChangeText = (text: string, input: string) => {
    setValue((prevState) => ({
      ...prevState,
      [input]: text,
    }));
  };

  const handleLogin = async () => {
    const res = await UserService.login(value);
    if (res.status === 200) {
      router.replace("/home/(tabs)");
    } else {
      alert("Invalid credentials, or need to sign up");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 54,
        marginTop: 16,
      }}
    >
      <View style={styles.imgContainer}>
        <Image
          source={GetImage("welcome")}
          style={{ width: 200, height: 200 }}
        />
      </View>

      <View style={styles.signForm}>
        <Input
          placeholder="Email"
          icon={"email"}
          onChangeText={(text) => handleChangeText(text, "email")}
          value={value.email}
        />
        <Input
          placeholder="Password"
          icon={"password"}
          secureTextEntry={true}
          onChangeText={(text) => handleChangeText(text, "password")}
          value={value.password}
        />
        <AppButton title="Sign in" onPress={handleLogin} />
        <Text style={{ color: "white" }}>
          Don't have an account?
          <Link style={{ color: "blue" }} href="/signup">
            {" "}
            Sign up
          </Link>
        </Text>
      </View>
      {/* <Link href="/home/(tabs)">Home</Link> */}
    </View>
  );
}

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
