import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function AddMediaTab(props) {
  return (
    <View style={style.container}>
      <Text style={style.bigFont}>AddMedia</Text>
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

export default AddMediaTab;
