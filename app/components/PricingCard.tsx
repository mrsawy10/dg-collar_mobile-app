import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Button } from "native-base";
// ____________
const { width, height } = Dimensions.get(`window`);
// ____________
const PricingCard = () => {
  const arrOf3 = new Array(3).fill(0);

  return (
    <View style={{ width: width / 2.5 }} className="rounded  border border-teal-500  bg-white m-auto">
      <View className="py-3 m-auto">
        <Text className="text-xl text-teal-400">Free</Text>
      </View>
      <View className="m-auto">
        {arrOf3.map((e) => (
          <View className="flex-row gap-2">
            <Text className="font-extrabold">5</Text>
            <Text className="text-sm">Feature title</Text>
          </View>
        ))}
      </View>

      <Button className="m-auto mh-3 my-4 border-teal-300" colorScheme="teal" variant={"outline"} onPress={() => console.log("hello world")}>
        Click Me
      </Button>
    </View>
  );
};

export default PricingCard;
