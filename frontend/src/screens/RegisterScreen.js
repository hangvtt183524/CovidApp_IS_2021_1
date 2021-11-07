import React from 'react';
import {
  View, 
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import style_default from '../shared/const';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>SignUp Now!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}
      >
        <ScrollView>
          <Text style={styles.text_footer}>Can cuoc cong dan</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={style_default.AUTHEN_COLOR} size={20} />
            <TextInput 
              placeholder="So CCCD/CMND"
              autoCapitalize="none"
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text_footer}>Mat khau</Text>
          <View style={styles.action}>
            <Feather name="lock" color={style_default.AUTHEN_COLOR} size={20} />
            <TextInput 
              placeholder="Nhap mat khau"
              autoCapitalize="none"
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text_footer}>Nhap lai mat khau</Text>
          <View style={styles.action}>
            <Feather name="lock" color={style_default.AUTHEN_COLOR} size={20} />
            <TextInput 
              placeholder="Nhap lai chinh xac mat khau"
              autoCapitalize="none"
              style={styles.textInput}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn}>
              <Text style={styles.textSign}>Dang ki tai khoan</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style_default.THEME_COLOR,
    flex: 1
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
  footer: {
    flex: 3,
    backgroundColor: style_default.WHITE_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: style_default.WHITE_COLOR,
    fontSize: 30, 
    fontWeight: 'bold'
  },
  text_footer: {
    color: style_default.AUTHEN_COLOR,
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 25
  },
  textInput: {
    flex: 1,
    margin: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 20,
    color: style_default.AUTHEN_COLOR,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  textSign: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: style_default.THEME_COLOR,
    borderWidth: 1,
  }
});