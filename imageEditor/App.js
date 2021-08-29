import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ImageEditScreen from './screens/ImageEditScreen';
import CompareImage from './screens/CompareImage';
const App = () => {
  return (
    <SafeAreaView>
      {/* <ImageEditScreen></ImageEditScreen> */}
      <CompareImage></CompareImage>
    </SafeAreaView>
  );
};

export default App;
