import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR, WHITE_COLOR } from '../shared/const';

const Home = ({ navigation }) => {

  const handlePress = (next) => {
    navigation.navigate(next);
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{ maxWidth: 400 ,width: '80%' }}>
        <TouchableOpacity
          onPress={() => handlePress('LoginView')}
          style={styles.button}
        >
          <Text style={{ color: WHITE_COLOR}}>
              Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ maxWidth: 400 ,width: '80%' }}>
        <TouchableOpacity
          onPress={() => handlePress('RegisterView')}
          style={styles.button}
        >
          <Text style={{ color: WHITE_COLOR}}>
              Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default Home;
