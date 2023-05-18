import { View, Text, Button, Pressable } from "react-native"
import React from "react"
import { Link } from "expo-router";

const Home = () => {
    
    return (
        <View style={{ marginTop: 60 }}>

            <link href={'/login'}>
                <Pressable>
                    <Text style={{ textAlign: "center" }}>Login 
                    </Text>
                </Pressable>
            </link>
            
        </View>
    );
};

export default Home;