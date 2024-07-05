import React from "react";
import {
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Center,
  NativeBaseProvider,
} from "native-base";
import { useTheme } from "@react-navigation/native";

import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions, StyleSheet, View } from "react-native";
const { width, height } = Dimensions.get("window");

function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Bars onPress={onOpen} />
      <Actionsheet


        isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content

          style={{ backgroundColor: "#135D66" }}
        >
          <Box
            style={{ backgroundColor: "#135D66" }}

            w="100%" h={60} px={4} justifyContent="center">
            <Text
              style={{ backgroundColor: "#135D66", color: "white" }}

              fontSize="18"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Albums
            </Text>
          </Box>
          <TouchableOpacity>
            <ActionSheetItem
            >
              Delete
            </ActionSheetItem>
          </TouchableOpacity>
          {/* <Actionsheet.Item isDisabled>Share</Actionsheet.Item> */}
          <ActionSheetItem>Play</ActionSheetItem>
          <ActionSheetItem>Favourite</ActionSheetItem>
          <ActionSheetItem>Cancel</ActionSheetItem>
        </Actionsheet.Content>
      </Actionsheet>
    </Center >
  );
}

export default () => {
  return (
    // <NativeBaseP/rovider>
    <Center flex={1} px="3">
      <Example />
    </Center>
    // </NativeBaseProvider>
  );
};

const Bars = ({ onPress }: { onPress: () => void }) => {
  const theme = useTheme();
  // console.log({ theme });
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome
        name="bars"
        size={25}
        style={{ marginRight: 15, color: theme.dark ? `white` : `black` }}
      />
    </TouchableOpacity>
  );
};

{/* <Text className="/text-black dark:text-white">sh</Text> */ }
// color={theme.dark ? `white` : `black`}



const ActionSheetItem = ({ children }: { children: React.ReactNode }) => {
  return <Actionsheet.Item
    style={{ backgroundColor: "#135D66", borderColor: "white", justifyContent: "center", alignItems: `flex-start`, width: width - 10 }}

  >
    <Text
      className="items-start text-white justify-start text-start  w-full"
    >

      {children}
    </Text>
  </Actionsheet.Item>

}