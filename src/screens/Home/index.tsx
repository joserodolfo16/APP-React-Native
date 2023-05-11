import { View, Text, Button } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native";
import { TabType } from "../../routes/tab";

const Home = () => {

    const navigation = useNavigation<TabType>();


    return (
        <View style={{ marginTop: 60 }}>
            <Text style={{ textAlign: "center" }}>Home </Text>
            <Button 
            title="Fazer login"
            onPress={()=>{
                navigation.navigate("Login");
            }
            
            }
            />
        </View>
    );
};

export default Home;