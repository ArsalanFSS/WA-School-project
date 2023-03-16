import React from "react";
import { TextInput, StyleSheet, useColorScheme } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScreenNavigationStackProp } from "../App";
import { getNote } from "../services/noteStoreService";
import { SaveNote } from "./SaveNote";

type Props = {
  noteId?: string;
};

export const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const theme = useColorScheme();
  const [text, onChangeText] = React.useState<string>("");
  const navigation = useNavigation<ScreenNavigationStackProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <SaveNote text={text} id={noteId ?? ""} />,
    });
  }, [navigation, text, noteId]);

  useFocusEffect(
    React.useCallback(() => {
      if (noteId) {
        getNote(noteId).then((result) => onChangeText(result?.text ?? ""));
      }
    }, [noteId])
  );

  return (
    <>
      <TextInput
        autoFocus={true}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        style={theme == "dark" ? styles.noteInput_dark : styles.noteInput_light}
        textAlignVertical="top"
      />
    </>
  );
};

const styles = StyleSheet.create({
  noteInput_light: {
    fontSize: 16,
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ffb70342",
  },
  noteInput_dark: {
    color: "white",
    fontSize: 16,
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#826211",
  },
});
