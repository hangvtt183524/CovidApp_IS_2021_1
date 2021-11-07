import { useTheme } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesom from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import style_default from '../shared/const';

const LoginScreen = () => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor='#009387' barStyle='light-content'></StatusBar> */}
            <View style={styles.header}>
                <Text style={styles.text_header}>Login</Text>
                <Text style={styles.text_header}>SignUp</Text>
            </View>
            <Animatable.View 
                animation='fadeInUpBig'
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesom name="user-o" color={colors.text} size={20} />
                    <TextInput 
                        placeholder="Username"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                </View>

                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather name="lock" color={colors.text} size={20} />
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                    />
                </View>
                <TouchableOpacity>
                    <Text style={{color: '#666666', marginTop: 15}}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.signIn, {
                            borderColor: style_default.THEME_COLOR,
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={styles.textSign}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: style_default.THEME_COLOR,
    },
    header: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        paddingRight: 100
    },
    text_header: {
        color: style_default.WHITE_COLOR,
        fontWeight: 'bold',
        fontSize: 30
    },
    footer: {
        flex: 3,
        backgroundColor: style_default.WHITE_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        margin: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 20,
        color: '#05375a',
        
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});