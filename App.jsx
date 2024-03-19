import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserListScreen from './screens/UserListScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="UserListScreen" component={UserListScreen} options={{ title: 'Liste des Utilisateurs' }} />
      <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
    
  )
}


  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    userItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    username: {
      fontSize: 18,
    },
    button: {
      marginTop: 20,
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  
 

 
