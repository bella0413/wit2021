import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HomeTab(props) {
  return (
    <View style={style.container}>
      <Text>Home</Text>
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

export default HomeTab;
