import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Dado from "./Dado";

const TOTAL_RODADAS = 5;
const rolarDado = () => Math.floor(Math.random() * 6) + 1;

const estadoInicial = () => ({
  rodada: 1,
  turno: 1, 
  dadosP1: [null, null],
  dadosP2: [null, null],
  mensagem: "",
  placar: { p1: 0, p2: 0 },
  fimDeJogo: false,
  mensagemFinal: "",
});

function Botao({ titulo, onPress, disabled, estilo }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.botao, estilo, disabled && styles.botaoDesabilitado]}
    >
      <Text style={[styles.botaoTexto, disabled && styles.botaoTextoDesabilitado]}>
        {titulo}
      </Text>
    </Pressable>
  );
}

export default function JogoDados() {
  const [e, setE] = useState(estadoInicial);

  function jogarJogador1() {
    setE((a) => ({ ...a, dadosP1: [rolarDado(), rolarDado()], turno: 2, mensagem: "" }));
  }

  function jogarJogador2() {
    const dadosP2 = [rolarDado(), rolarDado()];
    const somaP1 = e.dadosP1[0] + e.dadosP1[1];
    const somaP2 = dadosP2[0] + dadosP2[1];
    const placar = { ...e.placar };
    let mensagem = "Empate";
    if (somaP1 > somaP2) {
      mensagem = "Jogador 1 venceu";
      placar.p1++;
    } else if (somaP2 > somaP1) {
      mensagem = "Jogador 2 venceu";
      placar.p2++;
    }

    if (e.rodada === TOTAL_RODADAS) {
      const mensagemFinal =
        placar.p1 > placar.p2
          ? "Jogador 1 venceu o jogo"
          : placar.p2 > placar.p1
          ? "Jogador 2 venceu o jogo"
          : "Empate geral";
      setE((a) => ({ ...a, dadosP2, placar, mensagem, fimDeJogo: true, mensagemFinal }));
    } else {
      setE((a) => ({ ...a, dadosP2, placar, mensagem, turno: 0 }));
    }
  }

  function proximaRodada() {
    setE((a) => ({
      ...a,
      rodada: a.rodada + 1,
      turno: 1,
      dadosP1: [null, null],
      dadosP2: [null, null],
      mensagem: "",
    }));
  }

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Jogo de Dados</Text>
      <Text style={styles.rodada}>
        Rodada {e.rodada}/{TOTAL_RODADAS}
      </Text>

      <View style={styles.jogadores}>
        <View style={styles.jogador}>
          <Text style={styles.nome}>Jogador 1</Text>
          <View style={styles.dados}>
            <Dado valor={e.dadosP1[0]} />
            <Dado valor={e.dadosP1[1]} />
          </View>
          <Botao
            titulo="Jogar"
            onPress={jogarJogador1}
            disabled={e.turno !== 1 || e.fimDeJogo}
          />
        </View>

        <View style={styles.divisor} />

        <View style={styles.jogador}>
          <Text style={styles.nome}>Jogador 2</Text>
          <View style={styles.dados}>
            <Dado valor={e.dadosP2[0]} />
            <Dado valor={e.dadosP2[1]} />
          </View>
          <Botao
            titulo="Jogar"
            onPress={jogarJogador2}
            disabled={e.turno !== 2 || e.fimDeJogo}
          />
        </View>
      </View>

      <View style={styles.mensagem}>
        <Text style={styles.mensagemTexto}>{e.mensagem}</Text>
      </View>

      {e.turno === 0 && !e.fimDeJogo && (
        <Botao titulo="Próxima rodada" onPress={proximaRodada} estilo={styles.botaoProxima} />
      )}

      {e.fimDeJogo && (
        <>
          <View style={styles.mensagemFinal}>
            <Text style={styles.mensagemFinalTexto}>{e.mensagemFinal}</Text>
          </View>
          <Botao
            titulo="Jogar Novamente"
            onPress={() => setE(estadoInicial())}
            estilo={styles.botaoNovamente}
          />
        </>
      )}
    </View>
  );
}

const VERDE = "#01160f";
const CREME = "#fbf7ef";
const DOURADO = "#d4af37";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 460,
    backgroundColor: CREME,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(212,175,55,0.5)",
  },
  titulo: { fontSize: 28, fontWeight: "700", color: VERDE },
  rodada: { fontSize: 16, fontWeight: "600", color: "#b3462c", marginTop: 4, marginBottom: 20 },
  jogadores: { flexDirection: "row", justifyContent: "space-between" },
  jogador: { flex: 1, alignItems: "center", gap: 12 },
  divisor: { width: 1, backgroundColor: "rgba(28,28,28,0.12)", marginHorizontal: 8 },
  nome: { fontSize: 16, fontWeight: "600", color: "#1c1c1c" },
  dados: { flexDirection: "row", gap: 6 },
  botao: { backgroundColor: VERDE, paddingVertical: 10, paddingHorizontal: 22, borderRadius: 10 },
  botaoDesabilitado: { backgroundColor: "#d8d2c4" },
  botaoTexto: { color: CREME, fontSize: 15, fontWeight: "600" },
  botaoTextoDesabilitado: { color: "#928c7c" },
  mensagem: {
    marginTop: 24,
    padding: 14,
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: "rgba(15,61,46,0.08)",
    borderWidth: 1,
    borderColor: "rgba(15,61,46,0.18)",
    justifyContent: "center",
  },
  mensagemTexto: { textAlign: "center", fontWeight: "600", color: VERDE },
  botaoProxima: { alignSelf: "center", marginTop: 14 },
  mensagemFinal: { marginTop: 12, padding: 16, borderRadius: 12, backgroundColor: VERDE },
  mensagemFinalTexto: { textAlign: "center", color: CREME, fontSize: 17, fontWeight: "600" },
  botaoNovamente: { alignSelf: "center", marginTop: 14, backgroundColor: DOURADO },
});
