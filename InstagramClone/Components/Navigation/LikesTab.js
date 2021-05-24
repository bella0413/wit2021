import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function LikesTab(props) {
  return (
    <View style={style.container}>
      <Text style={style.bigFont}>Likes</Text>
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

export default LikesTab;
