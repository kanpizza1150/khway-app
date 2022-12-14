import {
  Prompt_300Light,
  Prompt_400Regular,
  Prompt_500Medium,
  Prompt_700Bold,
  useFonts,
} from '@expo-google-fonts/prompt'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { MaterialCommunityIcons } from './components/Icon'
import FarmDetailScreen from './screens/FarmDetail'
import FarmManagementScreen from './screens/FarmManagement'
import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'
import SireDetailScreen from './screens/SireDetail'
import SireListScreen from './screens/SireList'
import styles, { COLORS, typo } from './style'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()
export default function App() {
  let [fontsLoaded] = useFonts({
    Prompt_400Regular,
    Prompt_700Bold,
    Prompt_500Medium,
    Prompt_300Light,
  })

  if (!fontsLoaded) {
    return null
  }
  const getScreenTitle = (params) => params?.data?.name || ''
  const subScreens = [
    {
      name: 'SireDetail',
      component: SireDetailScreen,
      getTitle: getScreenTitle,
    },
    {
      name: 'FarmDetail',
      component: FarmDetailScreen,
      getTitle: getScreenTitle,
    },
  ]
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.primary }} />
      <Stack.Navigator initialRouteName="Tabs">
        {subScreens.map((screen) => (
          <Stack.Screen
            name={screen.name}
            component={screen.component}
            options={({ route }) => ({
              ...TransitionPresets.DefaultTransition,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
              title: (
                <Text style={[typo.h1, { color: COLORS.white }]}>
                  {screen.getTitle(route?.params)}
                </Text>
              ),
            })}
          />
        ))}
        <Stack.Screen
          name="Tabs"
          component={BottomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const BottomTab = () => {
  const routes = [
    {
      name: 'Home',
      icon: 'home',
      component: HomeScreen,
      tabBarLabel: '????????????????????????',
    },
    {
      name: 'SireList',
      icon: 'cow',
      component: SireListScreen,
      tabBarLabel: '??????????????????????????????',
    },
    {
      name: 'FarmManagement',
      icon: 'greenhouse',
      component: FarmManagementScreen,
      tabBarLabel: '?????????????????????????????????',
    },
    {
      name: 'Profile',
      icon: 'account',
      component: ProfileScreen,
      tabBarLabel: '???????????????',
    },
  ]
  return (
    <Tab.Navigator
      initialRouteName={'FarmManagement'}
      activeColor={COLORS.background}
      barStyle={styles.bottomBarStyle}
    >
      {routes.map((route) => (
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
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  )
}
