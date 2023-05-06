import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login no sistema!</Text>
      <TextInput style={styles.formInput}
      placeholder="Informe o email"
      keyboardType="email-address"
      autoCapitalize="none"
      autoComplete="email"
      />
      <TextInput style={styles.formInput}
      placeholder="Informe a senha"
      autoCapitalize="none"
      secureTextEntry
      />
      <Pressable style={styles.formButton}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Não sei a senha.</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Novo usuário.</Text>
        </Pressable>
      </View>
    </View>
  );
};
