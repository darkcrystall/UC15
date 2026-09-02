import React from "react";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import ListaProdutos from "./components/ListaProdutos";
import {
  SafeAreaFrameContext,
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { COLORS } from "./palette/colors";

const theme = {
  colors: {
    primary: COLORS.destaque,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <ListaProdutos />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
