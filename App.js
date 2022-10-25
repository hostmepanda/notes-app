import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';

import { NotesListScreen } from './src/screens/NotesList/NotesList.screen';
import { SingleNoteScreen } from './src/screens/SingleNote/SingleNote.screen';
import { store } from './src/store/appStore';
import { DatabaseStore } from './src/store/databaseStore';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    DatabaseStore.init()
      .then(() => {
        console.log('Database connected');
        setIsLoaded(true);
      })
      .catch(error => console.log('Error while connecting to local DB...', error));
  }, []);

  useEffect(() => {
    (async () => {
      if (isLoaded) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [isLoaded]);


  if (!isLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Notes list"
            component={NotesListScreen}
            options={{ headerShown: false }}/>
          <Stack.Screen
            name="Single note"
            component={SingleNoteScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

