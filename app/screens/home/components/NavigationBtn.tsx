import { Pressable, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { t } from "i18next";
import { Icon } from "native-base";
import cn from "@/utils/cn";

interface Props {
  onPress: () => void;
  title: string;
  icon: any;
  className?: string;
}

const NavigationBtn = ({ onPress, title, icon, className }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "w-5/12 flex-row my-4 mx-auto  p-5 bg-[#219C90] rounded-md justify-between ",
        className
      )}
    >
      <View className="items-center  justify-center text-center flex-row bg-[#219C90]">
        <Text className="items-center  justify-center text-center flex text-zinc-100">{title}</Text>
        {/* <MaterialIcons size={24} color="white" name="arrow-back" /> */}
      </View>
      <Icon className="text-white" as={<MaterialIcons size={24} name={icon} />} />
    </TouchableOpacity>
  );
};

export default NavigationBtn;
