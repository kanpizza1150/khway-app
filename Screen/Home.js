import React from "react"
import { SafeAreaView, Text, View, FlatList, Dimensions, TouchableOpacity } from "react-native"
import { COLORS, typo } from "../style"
import WavyHeader from "../Component/WavyHeader"
import { useNavigation } from "@react-navigation/native"

const HomeScreen = () => {
  const navigation = useNavigation()
  const onMenuPress = (to) => {
    navigation.navigate(to)
  }
  const menus = [
    {
      title: "ทำเนียบควายไทย",
      color: COLORS.primary,
      number: "",
      icon: "🐃",
      navigateTo: "SireList",
    },
    {
      title: "จัดการฟาร์ม",
      color: "#009FB7",
      number: "",
      icon: "🏡",
      navigateTo: "FarmManagement",
    },
  ]
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: COLORS.background }}>
      <View
        style={{
          padding: 20,
          alignItems: "center",
          marginBottom: 15,
          backgroundColor: "transparent",
        }}>
        <WavyHeader
          customStyles={{
            position: "absolute",
            width: Dimensions.get("window").width,
          }}
          customHeight={160}
          customTop={130}
          customBgColor={COLORS.primary}
          customWavePattern="M0,96L48,112C96,128,192,160,288,
        186.7C384,213,480,235,576,213.3C672,192,768,128,864,
        128C960,128,1056,192,1152,208C1248,224,1344,192,1392,
        176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,
        0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,
        0,96,0,48,0L0,0Z"
        />
        <Text style={[typo.h1, { color: COLORS.white, fontSize: 30 }]}>ควายไทย</Text>
        <Text style={[typo.h1, { color: COLORS.white }]}>แอพหรับคนเลี้ยงควาย</Text>
        <Text style={{ color: COLORS.white, fontSize: 100 }}>🐃</Text>
      </View>

      <FlatList
        data={menus}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 10,
              width: 200,
              height: 200,
              backgroundColor: item.color,
              borderRadius: 20,
              overflow: "hidden",
              padding: 10,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
            onPress={() => onMenuPress(item.navigateTo)}>
            <View
              style={{
                backgroundColor: COLORS.white,
                position: "absolute",
                top: "-10%",
                left: "-10%",
                width: 150,
                height: 150,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text
                style={{
                  fontSize: 50,
                }}>
                {item.icon}
              </Text>
            </View>
            {/* <Text style={[typo.h2, { color: COLORS.white }]}>{item.number}</Text> */}
            <Text style={[typo.h1, { color: COLORS.white }]}>{item.title}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </SafeAreaView>
  )
}
export default HomeScreen
