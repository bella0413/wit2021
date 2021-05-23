import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SearchTab(props) {
  return (
    <View style={style.container}>
      <Text style={style.bigFont}>Search</Text>
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

export default SearchTab;
