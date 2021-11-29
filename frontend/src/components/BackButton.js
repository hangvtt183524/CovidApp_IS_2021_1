import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


function BackButton({ navigation }) {
    
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <MaterialIcons name='arrow-back' size={20} />
            </TouchableOpacity>
        </View>
    );
}

export default BackButton;