// import { StyleSheet } from "react-native";
import { Pressable, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import SearchBar from "@/app/components/SearchBar";
import { Icon, useTheme } from "native-base";
import cn from "@/utils/cn";
import PricingCard from "@/app/components/PricingCard";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { t } from "i18next";
import MyChart from "@/app/components/Chart";
import NavigationBtn from "./components/NavigationBtn";
import Categories from "./components/Categories";
import { useTheme as useNativeTheme } from "@react-navigation/native";

// import { SearchBar } from 'react-native-screens';
export default function TabOneScreen() {
  const { colors } = useTheme();
  const { dark } = useNativeTheme()
  const router = useRouter();
  const arrOf9 = new Array(9).fill(0);

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: dark ? `black` : `white` }]}>
      <View className="items-center dark:bg-zinc-950">

        <SearchBar />

        <Categories />
        <View className="flex-row   flex-wrap w-full bg-zinc-100 dark:bg-zinc-950 py-5">
          <NavigationBtn
            className="w-6/12"
            title={t("Finance")}
            icon="attach-money"
            onPress={() => {
              router.push(`finance`);
            }}
          />
          <NavigationBtn
            className="w-6/12"
            title={t("To Do List")}
            icon="app-registration"
            onPress={() => {
              router.push(`ToDo`);
            }}
          />
        </View>

        <MyChart />
        <View className="flex-row items-center  justify-around bg-zinc-100 dark:bg-zinc-950 py-5 w-full rounded-sm">
          <PricingCard />
          <PricingCard />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  item: {
    width: 100, // Set width as needed
    height: 100,
    marginHorizontal: 10,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
