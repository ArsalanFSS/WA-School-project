import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { RootStackParamList, ScreenNavigationStackProp } from "../App";
import { DeleteNote } from "../components/DeleteNote";
import { NoteTakingInput } from "../components/NoteTakingInput";

type EditScreenRouteProp = RouteProp<RootStackParamList, "EditNote">;

export const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationStackProp>();
  const noteId = route.params.noteId;
  const theme = useColorScheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit note" : "New note",
      headerStyle: {
        backgroundColor: theme == "dark" ? "#1c1c1c" : "white",
      },
      headerRight: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>),
    });
  }, [navigation]);

  return <NoteTakingInput noteId={noteId} />;
};
