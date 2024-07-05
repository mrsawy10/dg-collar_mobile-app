import { View, TextInput } from "react-native";
import React from "react";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

//     <View className="w-10/12 border rounded-md  border-teal-600 mt-4 px-2 py-3">
//       <TextInput
//         className="text-black dark:text-white "
//         placeholderTextColor="#A0AEC0"
//         placeholder="Search"
//       />
//     </View>

import { useTranslation } from "react-i18next";
import cn from "@/utils/cn";

function SearchBar() {
  const { t, i18n } = useTranslation();
  let currLang = i18n.language;
  // console.log({ currLang });
  return (
    <VStack
      my="4"
      mx="4"
      space={5}
      w="95%"
      // maxW="300px"
    
    >
      <VStack
        w="100%"
        space={5}
        alignSelf="center"
        // style={{
        //   shadowColor: "#000",
        //   shadowOffset: { width: 0, height: 1 },
        //   shadowOpacity: 0.2,
        //   shadowRadius: 1.41,
        //   elevation: 2,
        // }}
      >
        {/* <Heading className="dark:text-zinc-300" fontSize="lg">Material</Heading> */}
        <Input
          placeholder={t("Search with Name or Id .")}
          width="100%"
          borderRadius="4"
          py="3"
          px="2"
          // style={{ borderColor: `black`  }}
          className={cn("dark:text-zinc-300 ", `${currLang === "ar" ? "text-right" : "text-left"}`)}
          fontSize="11"
          InputRightElement={
            currLang === "en" ? (
              <Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name={"search"} />} />
            ) : (
              <></>
            )
          }
          InputLeftElement={
            currLang === "ar" ? (
              <Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name={"search"} />} />
            ) : (
              <></>
            )
          }
        />
      </VStack>
    </VStack>
  );
}

export default SearchBar;
