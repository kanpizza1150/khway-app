import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import ScreenHeader from '../components/ScreenHeader'
import styles, { COLORS, typo } from '../style'

const FarmManagementScreen = () => {
  const navigation = useNavigation()

  const menus = [
    {
      name: 'K39 Ranch',
      color: COLORS.turquoise,
      icon: '1',
      navigateTo: 'FarmDetail',
    },
    {
      name: 'ทศพลฟาร์ม',
      color: COLORS.turquoise,
      icon: '2',
      navigateTo: 'FarmDetail',
    },
  ]
  const onMenuPress = (to, data) => {
    navigation.navigate(to, { data })
  }
  return (
    <SafeAreaView style={[styles.container, { justifyContent: 'flex-start' }]}>
      <ScreenHeader title="จัดการฟาร์ม" />
      <View style={{ justifyContent: 'flex-start' }}>
        <FlatList
          data={[
            ...menus,
            {
              color: '#e0e0e0',
              navigateTo: '',
              textColor: COLORS.primary,
              name: 'เพิ่มฟาร์ม',
            },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'column',
                margin: 10,
                height: 150,
                backgroundColor: item.color,
                borderRadius: 20,
                overflow: 'hidden',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => onMenuPress(item.navigateTo, item)}
            >
              <Text
                style={[typo.h1, { color: item?.textColor || COLORS.white }]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  )
}
export default FarmManagementScreen
