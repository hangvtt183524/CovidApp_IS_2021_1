import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style_default from '../shared/const';
import { LinearGradient } from 'expo-linear-gradient';

const iconMap = {
    "History": "history",
    "Scan QR": "qrcode-scan",
    "YourQR": "qrcode-edit"
}

const FunctionHome = (functionName) => {
    return (
        <TouchableOpacity style={styles.container}>
            <LinearGradient colors={['#916BBF', '#C996CC']} style={styles.lineargradient} >
                <View>
                    {functionName.name === 'Notification' ? <Ionicons name="notifications" color={style_default.WHITE_COLOR} size={40} style={styles.icon} /> : <MaterialCommunityIcons name={iconMap[functionName.name]}  color={style_default.WHITE_COLOR} size={40} style={styles.icon} />}
                    <Text style={styles.lineargradient_text}>
                        {functionName.name}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        flex: 1,
        alignSelf: 'center'
    },
    lineargradient: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineargradient_text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
export default FunctionHome;