import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
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
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import axios from 'axios';

const LoginScreen = ({navigation}) => {
    const { colors } = useTheme();

    const [hidePass, setHidePass] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLogin = false;

    const home = () => {
        
        navigation.navigate("Home");
    }

    const login =  async function (event) {
        event.preventDefault();

        const account = {
            phoneNumber: phoneNumber,
            email: email,
            password: password
        };

        await axois.post(`http://192.168.0.108:5000/accounts/login`, { account })
        .then(res => {
            if (res.data.message === 'OK') isLogin = true;
        })
        .catch(err => {
            console.log(err);            
        });

        if (isLogin) navigation.navigate("Home");
    };

    const register = () => {
        navigation.navigate("RegisterScreen");
    }

    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor='#009387' barStyle='light-content'></StatusBar> */}
            <View style={styles.header}>
                <Text style={styles.text_header}>Sổ sức khỏe điện tử</Text>
                
            </View>
            <Animatable.View 
                animation='fadeInUpBig'
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Số điện thoại</Text>
                <View style={styles.action}>
                    <FontAwesom name="user-o" color={colors.text} size={20} />
                    <TextInput 
                        placeholder="Số điện thoại"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={text => setPhoneNumber(text)}
                    />
                </View>

                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Email</Text>
                <View style={styles.action}>
                    <FontAwesom name="user-o" color={colors.text} size={20} />
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Mật khẩu</Text>
                <View style={styles.action}>
                    <Feather name="lock" color={colors.text} size={20} />
                    
                    <TextInput 
                        placeholder="Mật khẩu"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        secureTextEntry={hidePass ? true : false}
                        autoCapitalize="none"
                        onChangeText={text => setPassword(text)}
                    />
                    <FontAwesome5
                        name={hidePass ? 'eye' : 'eye-slash'} 
                        color={colors.text} size={20} 
                        onPress={() => setHidePass(!hidePass)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={{color: '#666666', marginTop: 15}}>Quên mật khẩu?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.signIn, {
                            borderColor: style_default.THEME_COLOR,
                            borderWidth: 1,
                            marginTop: 15,
                        }]}
                        onPress={home}
                    >
                        <Text style={[styles.textSign, {color:'white'}]}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.signUp, {
                            borderColor: style_default.THEME_COLOR,
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                        onPress={register}
                    >
                        <Text style={styles.textSign}>Chưa có tài khoản?</Text>
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
        fontSize: 30.,
        
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
        borderRadius: 10,
        backgroundColor: style_default.THEME_COLOR,
    },
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    }
});