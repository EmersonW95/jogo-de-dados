import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import JogoDados from "./components/JogoDados";

export default function App() {
  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <JogoDados />
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#0f3d2e" },
  conteudo: { flexGrow: 1, alignItems: "center", justifyContent: "center", padding: 16 },
});
