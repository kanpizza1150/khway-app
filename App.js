import {
  Prompt_300Light,
  Prompt_400Regular,
  Prompt_500Medium,
  Prompt_700Bold,
  useFonts
} from '@expo-google-fonts/prompt';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  TransitionPresets,
  createStackNavigator
} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FarmManagementScreen from './screens/FarmManagement';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import SireDetailScreen from './screens/SireDetail';
import SireListScreen from './screens/SireList';
import styles, { COLORS, typo } from './style';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Prompt_400Regular,
    Prompt_700Bold,
    Prompt_500Medium,
    Prompt_300Light
  });

  if (!fontsLoaded) {
    return null;
  }
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01
    }
  };
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.primary }} />
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="SireDetail"
          component={SireDetailScreen}
          options={({ route }) => ({
            ...TransitionPresets.DefaultTransition,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: COLORS.primary
            },
            headerTintColor: COLORS.white,
            title: (
              <Text style={[typo.h1, { color: COLORS.white }]}>
                {route?.params?.data?.name || ''}
              </Text>
            )
          })}
        />
        <Stack.Screen
          name="Tabs"
          component={BottomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomTab = () => {
  const routes = [
    {
      name: 'Home',
      icon: 'home',
      component: HomeScreen,
      tabBarLabel: 'หน้าหลัก'
    },
    {
      name: 'SireList',
      icon: 'cow',
      component: SireListScreen,
      tabBarLabel: 'รวมควายไทย'
    },
    {
      name: 'FarmManagement',
      icon: 'greenhouse',
      component: FarmManagementScreen,
      tabBarLabel: 'จัดการฟาร์ม'
    },
    {
      name: 'Profile',
      icon: 'account',
      component: ProfileScreen,
      tabBarLabel: 'บัญชี'
    }
  ];
  return (
    <Tab.Navigator
      initialRouteName={'FarmManagement'}
      activeColor={COLORS.background}
      barStyle={styles.bottomBarStyle}
    >
      {routes.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarLabel: route.tabBarLabel,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name={route.icon}
                color={color}
                size={26}
              />
            )
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
