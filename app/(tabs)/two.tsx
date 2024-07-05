import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "./../../components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useTranslation } from "react-i18next";
import i18next from "@/services/i18next";

export default function TabTwoScreen() {
  const { t } = useTranslation();

  // style={Styles.button}
  return (
    <View style={styles.container}>
      <Text className="" style={styles.title}>
        {t("Search")}
      </Text>
      <TouchableOpacity
        className="border-4 border-teal-500 px-16 py-4 mt-4"
        onPress={async () => await i18next.changeLanguage(`ar`)}
      >
        <Text style={{ color: "#fff" }}>ar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="border-4 border-teal-500 px-16 py-4 mt-4"
        onPress={async () => await i18next.changeLanguage(`en`)}
      >
        <Text style={{ color: "#fff" }}>en</Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
