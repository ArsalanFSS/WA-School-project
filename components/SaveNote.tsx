import { Pressable, Text, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScreenNavigationStackProp } from "../App";
import { Note, saveNote } from "../services/noteStoreService";

export const SaveNote: React.FC<Note> = ({ text, id }) => {
  const navigation = useNavigation<ScreenNavigationStackProp>();
  const theme = useColorScheme();
  const saveNoteAndNavigateHome = async () => {
    await saveNote(text, id);
    navigation.navigate("Home");
  };

  return (
    <Pressable onPress={saveNoteAndNavigateHome}>
      <Ionicons name="chevron-back" size={30} color={theme == "dark" ? "white" : "#ffb703"} />
    </Pressable>
  );
};
