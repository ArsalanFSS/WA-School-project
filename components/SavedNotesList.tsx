import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  View,
  useColorScheme,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllNotes, Note } from "../services/noteStoreService";
import { ScreenNavigationStackProp } from "../App";

export const SaveNotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[] | undefined>();
  const navigation = useNavigation<ScreenNavigationStackProp>();
  const theme = useColorScheme();

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <ScrollView>
      {notes?.map(({ id, text }) => {
        return (
          <Pressable
            key={id}
            onPress={() => navigation.navigate("EditNote", { noteId: id })}
            style={({ pressed }) => [
              styles.noteContainer,
              {
                backgroundColor:
                  pressed && theme == "dark"
                    ? "#383838"
                    : pressed
                    ? "#f2f2f2"
                    : theme == "dark"
                    ? "#0a0b0a"
                    : "#fff",
              },
            ]}
          >
            <View key={id} style={styles.row}>
              <Text
                key={id}
                style={theme == "dark" ? styles.note_dark : styles.note_light}
              >
                {text.length === 0 ? "(Blank note)" : text}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  note_light: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    width: "95%",
    alignSelf: "center",
    fontSize: 16,
    color: "black",
    backgroundColor: "#f4e3b4",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e6a400",
  },
  note_dark: {
    paddingVertical: 25,
    paddingHorizontal: 10, 
    width: "95%",
    alignSelf: "center",
    fontSize: 16,
    color: "white",
    backgroundColor: "#ffb70380",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e6a400",
  },
  row: {
    width: "100%",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
  },
  noteContainer: {
    width: "100%",
    flex: 1,
    minHeight: 80,
    overflow: "hidden",
    marginTop: 10,
  },
});
