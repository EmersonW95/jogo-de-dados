import { Image, StyleSheet } from "react-native";

const FACES = {
  1: require("../assets/dice/dado-1.png"),
  2: require("../assets/dice/dado-2.png"),
  3: require("../assets/dice/dado-3.png"),
  4: require("../assets/dice/dado-4.png"),
  5: require("../assets/dice/dado-5.png"),
  6: require("../assets/dice/dado-6.png"),
};
const VAZIO = require("../assets/dice/dado-vazio.png");

export default function Dado({ valor }) {
  return (
    <Image
      style={styles.dado}
      source={valor ? FACES[valor] : VAZIO}
      accessibilityLabel={valor ? `Dado com valor ${valor}` : "Dado ainda não jogado"}
    />
  );
}

const styles = StyleSheet.create({
  dado: { width: 64, height: 64 },
});
