import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Input from "@/components/input";
import SearchIcon from "@/components/icons/SearchIcon";
import AdjustIcon from "@/components/icons/AdjustIcon";
import Card from "@/components/card/Card";
import { images } from "@/components/images/Image";
import { useRouter } from "expo-router";

const Index = () => {
  const data = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    title: "Service",
    img: "service" + ((index % 3) + 1).toString(),
  }));

  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <View style={styles.greetingHeader}>
          <View style={{}}>
            <Text style={styles.text}>Hello,</Text>
            <Text style={styles.text}>Good morning</Text>
          </View>
          <View
            style={{ padding: 6, backgroundColor: "#16DAF0", borderRadius: 50 }}
          >
            <FontAwesome
              name="heart"
              size={20}
              color="white"
              onPress={() => router.replace("/")}
            />
          </View>
        </View>
        <View style={{ position: "relative", marginTop: 16 }}>
          <Input placeholder="Search" icon={<SearchIcon />} />
          <View
            style={{ position: "absolute", zIndex: 1000, top: 10, right: 10 }}
          >
            <AdjustIcon />
          </View>
        </View>
      </View>
      <View style={styles.categories}>
        <Text
          style={
            (styles.text, { color: "black", fontSize: 20, marginBottom: 8 })
          }
        >
          Explore categories
        </Text>
        <FlatList
          columnWrapperStyle={{
            gap: 8,
          }}
          numColumns={2}
          horizontal={false}
          data={data}
          renderItem={({ item }) => (
            <Card title={item.title} image={item.img as keyof typeof images} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0E1EF0",
    padding: 16,
    justifyContent: "space-between",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  greetingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  categories: {
    flex: 2,
    marginTop: 8,
    padding: 8,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
