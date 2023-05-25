import React, { useState } from 'react';
import axios from 'axios';
import { Pressable, StyleSheet, Text, TextInput, View, Button, Alert } from "react-native"
import { Link } from "expo-router";

const API_URL = 'https://dummyjson.com/auth/login';

const Login = () => {
  const [id, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(API_URL, { id, password });

      if (response.status === 200) {
        // Login bem-sucedido
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
      } else {
        // Login falhou
        Alert.alert('Erro', 'Usuário ou senha inválidos.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Erro ao fazer login. Por favor, tente novamente mais tarde.');
    }
  };


    return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{ textAlign: "center" }}>Login no sistema! </Text>
            <TextInput style={{borderColor: 'blue', borderWidth: 1, borderRadius: 10, fontSize: 22,
            width: '80%',
            padding: 10,
            margin: 10,}}
            placeholder="Informe o usuário"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            value={id}
            onChangeText={text => setUsername(text)}
            />
            <TextInput style={{borderWidth: 1, borderRadius: 10, borderColor: 'blue', width: '80%', padding:10,
            margin: 10, fontSize: 22}}
            placeholder="Informe a senha"
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            />
            <link href={"/products"}>
                <Pressable style={{backgroundColor: 'blue', width: '80%', margin: 10,
                    padding: 10,
                    borderRadius: 10,
                    alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}} 
                    onPress={handleLogin}> Logar</Text>
                </Pressable>
            </link>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%',}}>
                <Pressable style={{padding: 10}}>
                <Text style={{color: 'blue'}}>Não sei a senha.</Text>
                </Pressable>
                <Pressable style={{borderColor: 'blue'}}>
                <Text style={{padding: 10}}>Novo usuário.</Text>
                </Pressable>
            </View>
        </View>


    );
};


export default Login;