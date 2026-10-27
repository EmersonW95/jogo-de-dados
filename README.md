<h1 align="center">🎲 Jogo de Dados</h1>

<p align="center">
  Jogo de dados para 2 jogadores em 5 rodadas<br>
  Feito com React Native + Expo 🚀
</p>

<p align="center">
  <a href="https://github.com/EmersonW95"><img src="https://img.shields.io/badge/GitHub-EmersonW95-181717?logo=github" alt="GitHub"></a>
  <a href="https://linkedin.com/in/emerson-willian-19984630b"><img src="https://img.shields.io/badge/LinkedIn-Emerson%20Willian-0A66C2?logo=linkedin" alt="LinkedIn"></a>
  <img src="https://img.shields.io/badge/React%20Native-Expo-000020?logo=expo" alt="Expo">
</p>

---

## 📱 Sobre o app

**Jogo de Dados** é um app em **React Native + Expo** disputado entre dois jogadores ao longo de 5 rodadas. Em cada rodada, cada jogador joga dois dados e vence quem tiver a **maior soma**. Se as somas forem iguais, a rodada é empatada.

É uma atividade acadêmica, migrada de um projeto web em Next.js para praticar componentes do React Native, estado com hooks e estilização com `StyleSheet`.

## 🎮 Como jogar

1. O **Jogador 1** clica em **Jogar** e rola seus dois dados.
2. O **Jogador 2** clica em **Jogar** e rola os dele (só um botão fica habilitado por vez).
3. O app mostra o resultado da rodada: *Jogador 1 venceu*, *Jogador 2 venceu* ou *Empate*.
4. Toque em **Próxima rodada** para continuar.
5. Após a 5ª rodada, o app informa quem **venceu a partida** (ou **empate geral**) e exibe o botão **Jogar Novamente**.

## 🧩 Estrutura

| Arquivo | Função |
|---|---|
| `App.js` | Tela principal |
| `components/Dado.js` | Recebe a prop `valor` (1 a 6) e exibe a imagem do dado |
| `components/JogoDados.js` | Lógica e interface do jogo |
| `assets/dice/` | Imagens PNG das faces dos dados |

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| React Native | Interface do app |
| Expo / Expo Go | Desenvolvimento e testes no celular |
| React Hooks (`useState`) | Estado do jogo |

## ▶️ Como rodar

```bash
cd jogo-dados
npm install
npx expo start
```

Escaneie o QR code com o **Expo Go** no celular.

---

<p align="center">Feito por Emerson Willian do Nascimento Dias</p>