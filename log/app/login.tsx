import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React from "react"
import { Link } from "expo-router";

const Login = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{ textAlign: "center" }}>Login no sistema! </Text>
            <TextInput style={{borderColor: 'blue', borderWidth: 1, borderRadius: 10, fontSize: 22,
            width: '80%',
            padding: 10,
            margin: 10,}}
            placeholder="Informe o email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            />
            <TextInput style={{borderWidth: 1, borderRadius: 10, borderColor: 'blue', width: '80%', padding:10,
            margin: 10, fontSize: 22}}
            placeholder="Informe a senha"
            autoCapitalize="none"
            secureTextEntry
            />
            <link href={"/products"}>
                <Pressable style={{backgroundColor: 'blue', width: '80%', margin: 10,
                    padding: 10,
                    borderRadius: 10,
                    alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}>Logar</Text>
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