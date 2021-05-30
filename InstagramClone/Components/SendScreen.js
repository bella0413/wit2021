import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Icon} from 'native-base';

function SendScreen(props) {
  return (
    <View style={style.container}>
      <Icon name="ios-send" style={{fontSize: 90}}></Icon>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SendScreen;
