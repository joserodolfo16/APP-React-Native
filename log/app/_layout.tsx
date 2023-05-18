import { View, Text, Button, Pressable } from "react-native"
import React from "react"
import { Stack } from "expo-router";

const StackLayout = () => {
    
    return (
        <Stack 
        screenOptions={{
            headerStyle: {
                backgroundColor: '#10101E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Stack.Screen name="index" options={{headerTitle: 'Login',
            headerShown: false}}/>
        </Stack>
    );
};

export default StackLayout;