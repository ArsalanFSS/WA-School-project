import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { EditNoteScreen } from "./screens/EditNoteScreen";
import { NewNote } from "./components/NewNote";

export type RootStackParamList = {
  Home: undefined;
  EditNote: { noteId?: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export type ScreenNavigationStackProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function App() {
  const theme = useColorScheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "My notes",
            headerStyle: {
              backgroundColor: theme == "dark" ? "#1c1c1c" : "white",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: theme == "dark" ? "white" : "black",
            },
            headerRight: () => <NewNote />,
          }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>

      <StatusBar style={theme == "dark" ? "light" : "dark"} />
    </NavigationContainer>
  );
}
