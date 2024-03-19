import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function UserDetailsScreen({ route }) {
 const  username  = route.params.user;
  console.log(route.params)
  console.log(route.params.user.username)

  // Parse phone number
  const phoneNumber = username.phone.replace(/[^\d]/g, '');

  return (
    <View style={styles.container}>
      <Text>Nom Complet: {username.name}</Text>
      <Text>Adresse: {username.address.street}, {username.address.city}</Text>
      <Text>Numéro de téléphone: {phoneNumber}</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Appeler')}>
        <Text style={styles.buttonText}>Appeler</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});














