import { Text, View } from "react-native";
import React, { Component } from "react";
import { Pressable, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import cn from "@/utils/cn";
import { Icon } from "native-base";
import { Divider } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";
const arrOf9: any = [
  {
    name: "Animals",
    icon: "pets",
    color: "teal",
    number: 0,
  },
  {
    name: "Vaccination",
    icon: "medication-liquid",
    color: "#55AD9F",
    number: 2,
  },
  {
    number: 3,
    name: "Sick",
    icon: "sick",
    color: "#78ABA8",
  },
  {
    name: "Weaners",
    icon: "vaccines",
    color: "#219C90",
    number: 5,
  },
  {
    name: "Calves",
    icon: "pets",
    color: "teal",
    number: 7,
  },
];

// "teal", "#55AD9B", "#95D2B3", "#D8EFD3"

export class Categories extends Component {
  render() {
    return (
      <ScrollView
        className={cn(`m-[0.1rem] mt-3 mb-5`)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          height: 140,
          flexGrow: 0,
        }}
      >
        {arrOf9.map((item: any, i: number) => (
          <View
            className={`w-24 h-32 rounded-md mx-3 items-center justify-start dark:bg-zinc-900`}
            style={{ backgroundColor: item.color }}
            key={i}
          >
            <View className="items-center justify-start py-3 gap-1">
              <MaterialIcons color={`white`} size={27} name={item.icon} />
              <Text className="text-zinc-100  text-xs ">{item.name}</Text>
            </View>
            <Divider style={{ width: `90%` }} />
            <Text className="text-zinc-100 mt-4">{item.number}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default Categories;

const styles = StyleSheet.create({
  //   item: {
  //     width: 100, // Set width as needed
  //     height: 100,
  //     marginHorizontal: 10,
  //     backgroundColor: "#f0f0f0",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     borderRadius: 8,
  //   },
});
