import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import styles, { COLORS, typo } from "../style"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontistoIcons from "react-native-vector-icons/Fontisto"
import EntypoIcons from "react-native-vector-icons/Entypo"
import AntDesignIcons from "react-native-vector-icons/AntDesign"
import { CircleButton, RectButton } from "../Component/Button"
const InfoWithIcon = ({ value, icon }) => {
  return (
    value && (
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 3 }}>
        {icon}
        <Text style={[typo.body, { marginLeft: 5 }]}>{value}</Text>
      </View>
    )
  )
}
const CardInfo = ({ data }) => {
  const sellingTypeText = {
    sire: "พ่อพันธุ์",
    dam: "แม่พันธุ์",
    semen: "น้ำเชื้อ",
  }
  return (
    <View style={{ padding: 10, paddingBottom: 0 }}>
      <Text style={[typo.h1, { textAlign: "center" }]}>{data.name}</Text>
      <View style={{ flex: 1 }}>
        {<InfoWithIcon value={data?.farm} icon={<EntypoIcons name="location-pin" size={20} color="#c2233d" />} />}
        {
          <InfoWithIcon
            value={data?.contractInfo?.tel}
            icon={<MaterialCommunityIcons name="phone" size={20} color="green" />}
          />
        }
        {
          <InfoWithIcon
            value={data?.contractInfo?.socialMedia?.facebook}
            icon={<MaterialCommunityIcons name="facebook" size={20} color="#3b5998" />}
          />
        }
        {
          <InfoWithIcon
            value={data?.contractInfo?.socialMedia?.lineId}
            icon={<FontistoIcons name="line" size={20} />}
          />
        }
        {
          <InfoWithIcon
            value={data?.contractInfo?.address}
            icon={<MaterialCommunityIcons name="home" size={20} color={COLORS.primary} />}
          />
        }
        {
          <InfoWithIcon
            value={data?.sellingType && `ขาย${sellingTypeText[data?.sellingType]}`}
            icon={<AntDesignIcons name="shoppingcart" size={20} color="#F5BD02" />}
          />
        }
      </View>
    </View>
  )
}
export default function Card({ data }) {
  return (
    <View style={styles.card}>
      <View style={{ width: "100%", height: 200 }}>
        <Image
          source={{
            uri: data.imgUrl,
          }}
          resizeMode="cover"
          style={styles.cardImage}
        />
      </View>
      <CircleButton
        right={10}
        top={10}
        imgUrl={{
          uri: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/heart-icon.png",
        }}
        handlePress={() => {}}
      />
      <CardInfo data={data} />
      <View style={{ padding: 10, width: "100%" }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: 50,
            padding: 8,
            alignSelf: "flex-end",
          }}>
          <Text style={[typo.body, { color: COLORS.white }]}>ดูรายระเอียด</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
