import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import color_default from '../shared/const';

const ProfileScreen = ({navigation}) => {

    const logout = () => {
        navigation.navigate("LoginScreen");
    };

    const changePassword = () => {
        navigation.navigate("ChangePasswordScreen");
    }

    return (
        <ScrollView>
            <View>
                <View style={styles.top}>
                    <View style={styles.info}>
                        <Image
                        source={{uri:'https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-1/c0.13.540.541a/s320x320/250961125_3086202304961539_1705525757844733315_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iqJi7cLPIs4AX8J9iG0&_nc_ht=scontent.fhph1-3.fna&oh=3fb66af09cd346890c8e7d2bf2e3c1eb&oe=619A6A4D'}}
                        style={styles.avatar}
                        />
                        <View style={styles.textInfo}>
                            <Text style={styles.name}>Vũ Thị Thu Hằng</Text>
                            <Text style={styles.phoneNumber}>0987654321</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Image
                        source={{uri:'https://ps.w.org/doqrcode/assets/icon-256x256.png?rev=2143781'}}
                        style={styles.qrcode}
                        />
                        <Text
                        style={{alignSelf: 'center',
                        paddingTop: 10,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white'}}>Mã sổ sức khỏe</Text>
                    </View>
                </View>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.option}>
                    <MaterialIcons name='person' size={40} style={styles.iconOption} />
                    <Text style={styles.textOption}>Thông tin cá nhân</Text>
                    <MaterialIcons name='arrow-forward-ios' size={20} style={styles.arrow} />
                </TouchableOpacity>
                <View style={{borderColor: 'grey', borderWidth: 0.5}}></View>
                <TouchableOpacity style={styles.option} onPress={changePassword}>
                    <MaterialIcons name='settings' size={40} style={styles.iconOption} />
                    <Text style={styles.textOption}>Đổi mật khẩu</Text>
                    <MaterialIcons name='arrow-forward-ios' size={20} style={styles.arrow} />
                </TouchableOpacity>
                <View style={{borderColor: 'grey', borderWidth: 0.5}}></View>
                <TouchableOpacity style={styles.option}>
                    <MaterialIcons name='info' size={40} style={styles.iconOption} />
                    <Text style={styles.textOption}>Giới thiệu</Text>
                    <MaterialIcons name='arrow-forward-ios' size={20} style={styles.arrow} />
                </TouchableOpacity>
                <View style={{borderColor: 'grey', borderWidth: 0.5}}></View>
                <TouchableOpacity style={styles.option} onPress={logout}>
                    <MaterialIcons name='logout' size={40} style={styles.iconOption} />
                    <Text style={styles.textOption}>Đăng xuất</Text>
                    <MaterialIcons name='arrow-forward-ios' size={20} style={styles.arrow} />
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    )
    
}

export default ProfileScreen;

const styles = StyleSheet.create({
    top: {
        backgroundColor: color_default.THEME_COLOR,
        height: 310,
        flexDirection: 'column',
        padding: 20,
    },
    info: {
        height: 80,
        flexDirection: 'row',
    },
    textInfo: {
        flexDirection: 'column',
        padding: 20,
        justifyContent: 'center',
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        alignContent: 'center',
        alignSelf: 'center',
        color: 'white',
    },
    phoneNumber: {
        fontSize: 15,
        color: 'white',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    qrcode: {
        marginTop: 10,
        height: 150,
        width: 150,
        alignSelf: 'center',
        borderRadius: 20,
    },
    options : {
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    option: {
        flexDirection: 'row',
        height: 60,
        marginLeft: 15,
        width: '100%',
    },
    iconOption: {
        alignSelf: 'center',
        color: '#696969',
    },
    textOption: {
        fontSize: 20,
        alignSelf: 'center',
        paddingLeft: 15,
        color: '#696969',
    },
    arrow: {
        alignSelf: 'center',
        position: 'absolute',
        paddingEnd: 10,
        color: 'grey',
        paddingLeft: 330,
    }

})