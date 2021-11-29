import React from "react";
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FunctionHome from "../components/FunctionHome";

import style_default from '../shared/const';

const HomeScreen = ({navigation}) => {

  const toProfile = () => {
    navigation.navigate('ProfileScreen');
  } 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_info}>
          <Text style={styles.header_text}>Username</Text>
        </View>
        <View style={styles.header_icon}>
          <FontAwesome5 name="cat" color={style_default.WHITE_COLOR} size={60} />
        </View>
      </View>
      <View style={styles.body}>
        <View  style={styles.body_function}>
          <FunctionHome name="Scan QR" />
        </View>
        <View  style={styles.body_function}>
          <FunctionHome name="History" />
        </View>
        <View  style={styles.body_function}>
          <FunctionHome name="YourQR" event={toProfile} />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style_default.THEME_COLOR
  },
  header: {
    flex: 1.75,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    alignContent: 'space-between',
    marginTop: 20
  },
  header_info : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header_text: {
    color: style_default.WHITE_COLOR,
    fontSize: 20
  },
  header_icon: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-around'
  },
  body_function: {
    width: '80%',
    height: 85,
    backgroundColor: '#54a',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignContent: 'center'
  },
});

export default HomeScreen;