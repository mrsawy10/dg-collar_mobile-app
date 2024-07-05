import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { t } from "i18next";

import { Drawer } from "expo-router/drawer";
import ActionSheet from "../components/ActionSheet";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      {/* <Drawer> */}
      <Tabs.Screen
        name="index"
        options={{
          title: t(`Home`),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => <ActionSheet />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: t(`Chat`),
          headerRight: () => <ActionSheet />,

          tabBarIcon: ({ color }) => <TabBarIcon name="comment" color={color} />,
        }}
      />

      <Tabs.Screen
        name="three"
        options={{
          title: t(`Profile`),
          headerRight: () => <ActionSheet />,

          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      {/* </Drawer> */}
    </Tabs>
  );
}
