import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { StatusBar } from "expo-status-bar"
import styles, { COLORS } from "./style"
import HomeScreen from "./Screen/Home"
import SireListScreen from "./Screen/SireList"
import FarmManagementScreen from "./Screen/FarmManagement"
import ProfileScreen from "./Screen/Profile"
import {
  useFonts,
  Prompt_400Regular,
  Prompt_700Bold,
  Prompt_500Medium,
  Prompt_300Light,
} from "@expo-google-fonts/prompt"
import { SafeAreaView } from "react-native"

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

  const routes = [
    { name: "Home", icon: "home", component: HomeScreen, tabBarLabel: "หน้าหลัก" },
    { name: "SireList", icon: "cow", component: SireListScreen, tabBarLabel: "รวมควายไทย" },
    { name: "FarmManagement", icon: "greenhouse", component: FarmManagementScreen, tabBarLabel: "จัดการฟาร์ม" },
    { name: "Profile", icon: "account", component: ProfileScreen, tabBarLabel: "บัญชี" },
  ]
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.primary }} />

      <Tab.Navigator initialRouteName={"FarmManagement"} activeColor={COLORS.background} barStyle={styles.bottomBarStyle}>
        {routes.map((route) => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              tabBarLabel: route.tabBarLabel,
              tabBarIcon: ({ color }) => <MaterialCommunityIcons name={route.icon} color={color} size={26} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  )
}
