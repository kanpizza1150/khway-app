import { View, Text } from "react-native"
import React from "react"
import { COLORS, typo } from "../style"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import IoniconsIcons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"
const ScreenHeader = ({ title, onBack = undefined }) => {
  const navigation = useNavigation()
  const handleOnPressBack = () => {
    navigation.goBack()
  }
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
      }}>
      {onBack ? (
        <View>
          <IoniconsIcons name="ios-chevron-back" color={COLORS.background} size={20} onPress={handleOnPressBack} />
        </View>
      ) : (
        <View />
      )}
      <View style={{ marginLeft: 20 }}>
        <Text style={[typo.h1, { color: COLORS.background }]}>{title}</Text>
      </View>
      <View>
        <MaterialCommunityIcons name="bell" color={COLORS.background} size={20} />
      </View>
    </View>
  )
}

export default ScreenHeader
