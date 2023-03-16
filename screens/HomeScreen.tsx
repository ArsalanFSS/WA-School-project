import React from "react";
import { SaveNotesList } from "../components/SavedNotesList";
import { StyleSheet, View, useColorScheme } from "react-native";

export const HomeScreen: React.FC = () => {
  const theme = useColorScheme();
  return (
    <View style={theme == 'dark' ? styles.container_dark : styles.container_light}>
      <SaveNotesList />
    </View>
  );
};

const styles = StyleSheet.create({
  container_light: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container_dark: {
    backgroundColor: "#0a0b0a",
    flex: 1,
  }
});
