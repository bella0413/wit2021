import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ProfileTab(props) {
  return (
    <View style={style.container}>
      <Text style={style.bigFont}>Profile</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigFont: {
    fontSize: 50,
  },
});

export default ProfileTab;
