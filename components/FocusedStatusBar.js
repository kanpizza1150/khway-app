import { useIsFocused } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const FocusedStatusBar = () => {
  const isFocus = useIsFocused()
  return isFocus ? <StatusBar animated backgroundColor="olive" /> : null
}

export default FocusedStatusBar
