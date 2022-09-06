import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../style"

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: 30,
        height: 30,
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        ...props,
      }}>
      <Image source={imgUrl} resizeMode="cover" style={{ width: 18, height: 18 }} />
    </TouchableOpacity>
  )
}
export const RectButton = ({ handlePress, children, ...props }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        padding: 12,
        ...props,
      }}>
      <Text style={{ fontSize: 12, color: "white" }}>{children}</Text>
    </TouchableOpacity>
  )
}
