import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotesListScreen } from './src/screens/NotesList/NotesList.screen';
import { SingleNoteScreen } from './src/screens/SingleNote/SingleNote.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Notes list"
        component={NotesListScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name="Single note"
        component={SingleNoteScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

