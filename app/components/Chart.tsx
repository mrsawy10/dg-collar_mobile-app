import { useTheme } from "@react-navigation/native";
import { Dimensions, StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryPie } from "victory-native";

const data = [
  { quarter: `males`, earnings: 13000 },
  { quarter: `females`, earnings: 16500 },
  { quarter: `pregnant`, earnings: 14250 },
  { quarter: `unmarried`, earnings: 8250 },
  // { quarter: 4, earnings: 19000 },
];

const { width, height } = Dimensions.get("window");
export default function App() {
  const theme = useTheme();
  // console.log({ theme });
  return (
    <View style={styles.container} className="w-full flex-column flex-wrap justify-center ">
      <View className="w-ful  ">
        <VictoryChart width={width - 40}>
          <VictoryBar
            // colorScale={["teal", "#55AD9B", "#95D2B3", "#D8EFD3"]}
            style={{
              data: { fill: "#95D2B3" }
              ,
              border: { fill: "#95D2B3" }
            }}

            data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
      <View className="w-ful ">
        <VictoryPie
          animate={{
            duration: 2000,
          }}
          style={{
            labels: { fill: theme.dark ? "white" : `black`, fontWeight: "bold" },
            parent: { width: 30 },
          }}
          colorScale={["teal", "#55AD9B", "#95D2B3", "#D8EFD3"]}
          data={[
            { x: 1, y: 4, label: "Cows" },
            { x: 4, y: 5, label: "Males" },
            { x: 5, y: 7, label: "Females" },
            { x: 7, y: 8, label: "Sheep" },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f5fcff",
    marginBottom: 30,
  },
});
