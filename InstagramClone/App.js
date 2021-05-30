import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './Components/MainScreen';
import AddMediaScreen from './Components/AddMediaScreen';
import LikesScreen from './Components/LikesScreen';
import SendScreen from './Components/SendScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

function renderAddMedia(navigation) {
  return (
    <MaterialIcons
      name="add-circle-outline"
      size={29}
      style={{paddingHorizontal: 8}}
      onPress={() => navigation.navigate('AddMediaScreen')}
    />
  );
}
function renderLikes(navigation) {
  return (
    <Icon
      name="heart-outline"
      style={{paddingHorizontal: 8}}
      onPress={() => navigation.navigate('LikesScreen')}></Icon>
  );
}
function renderSend(navigation) {
  return (
    <Icon
      name="ios-send"
      style={{paddingHorizontal: 8}}
      onPress={() => navigation.navigate('SendScreen')}></Icon>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({navigation}) => ({
            title: 'Instagram',
            headerTitleStyle: {fontStyle: 'italic', fontSize: 25},
            headerTitleAlign: 'left',
            headerRight: () => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                {renderAddMedia(navigation)}
                {renderLikes(navigation)}
                {renderSend(navigation)}
              </View>
            ),
          })}
        />
        <Stack.Screen name="AddMediaScreen" component={AddMediaScreen} />
        <Stack.Screen name="LikesScreen" component={LikesScreen} />
        <Stack.Screen name="SendScreen" component={SendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
