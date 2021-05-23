import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeTab from './Navigation/HomeTab';
import SearchTab from './Navigation/SearchTab';
import AddMediaTab from './Navigation/AddMediaTab';
import LikesTab from './Navigation/LikesTab';
import ProfileTab from './Navigation/ProfileTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();
function MainScreen(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#262626"
      inactiveColor="#a2a2a2"
      barStyle={{backgroundColor: '#eeeeee'}}
      labeled={false}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AddMedia"
        component={AddMediaTab}
        options={{
          tabBarLabel: 'AddMedia',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="add-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesTab}
        options={{
          tabBarLabel: 'Likes',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
