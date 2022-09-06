import { useIsFocused } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { Text, View } from "react-native"

const FocusedStatusBar = () => {
  const isFocus = useIsFocused()
  return isFocus ? <StatusBar animated backgroundColor="olive" /> : null
}

export default FocusedStatusBar
