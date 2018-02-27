import React from 'react';
import { StackNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LandingScreen from '../screens/LandingScreen';
import DetailScreen from '../screens/DetailScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import BadgeScreen from '../screens/BadgeScreen';

export const AppNavigator = StackNavigator({
	ProfileScreen: { screen: ProfileScreen },

	LoginScreen: { screen: LoginScreen },
	Register: { screen: RegisterScreen },
	LandingScreen: { screen: LandingScreen },
	DetailScreen: { screen: DetailScreen },
	BadgeScreen: { screen: BadgeScreen },
	MapScreen: { screen: MapScreen },
	LeaderboardScreen: { screen: LeaderboardScreen },

	SettingScreen: {screen: SettingScreen},
});