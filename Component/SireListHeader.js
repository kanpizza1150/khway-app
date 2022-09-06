// import { faker } from "@faker-js/faker"
import React, { useMemo, useState } from "react"
import { Text, TextInput, View, Image, Dimensions, TouchableOpacity } from "react-native"
import { COLORS, typo } from "../style"
import IoniconsIcons from "react-native-vector-icons/Ionicons"
import EntypoIcons from "react-native-vector-icons/Entypo"

const SireListHeader = ({ onSearch, onTagChange }) => {
  const [tag, setTag] = useState("all")
  const [searchKeyword, setSearchKeyword] = useState("")
  const list = [
    { title: "ทั้งหมด", value: "all", isActive: tag === "all" },
    { title: "พ่อพันธุ์", value: "sire", isActive: tag === "sire" },
    { title: "แม่พันธุ์", value: "dam", isActive: tag === "dam" },
  ]
  const handleSearch = (val) => {
    setSearchKeyword(val)
    onSearch(val, tag)
  }
  const handleTag = (val) => {
    setTag(val)
    onSearch(searchKeyword, val)
  }
  const tags = useMemo(() => {
    return (
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 10 }}>
        {list.map((tag) => (
          <TouchableOpacity
            onPress={() => handleTag(tag.value)}
            key={tag.value}
            style={{
              borderRadius: 20,
              borderWidth: 1,
              borderColor: COLORS.background,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginRight: 5,
              backgroundColor: tag.isActive ? COLORS.background : COLORS.primary,
            }}>
            <Text style={[typo.body, { color: tag.isActive ? COLORS.primary : COLORS.background }]}>{tag.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }, [onTagChange, tag, list])

  return (
    <View>
      <View
        style={{
          width: "100%",
          borderRadius: 12,
          backgroundColor: `rgba(255,255,255,1)`,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 12,
          paddingVertical: 10,
        }}>
        <IoniconsIcons name="search" color={COLORS.primary} size={20} style={{ marginRight: 10 }} />
        <TextInput
          placeholder="ค้นหาชื่อควายไทย"
          onChangeText={handleSearch}
          style={[typo.body, { flex: 1, color: COLORS.primary, fontSize: 16 }]}
          placeholderTextColor={COLORS.primary}
          value={searchKeyword}
        />
        {searchKeyword && (
          <TouchableOpacity
            onPress={() => {
              handleSearch("")
            }}>
            <EntypoIcons name="circle-with-cross" size={16} color={COLORS.primary} />
          </TouchableOpacity>
        )}
      </View>
      {tags}
    </View>
  )
}

export default SireListHeader
