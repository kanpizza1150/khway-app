import React, { Fragment } from 'react'
import { Dimensions, FlatList, SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { InfoWithIcon } from '../components/Card'
import { FeatherIcons, FontistoIcons, IoniconsIcons } from '../components/Icon'
import styles, { COLORS, typo } from '../style'

const FarmDetailScreen = ({ route, navigation }) => {
  const { data } = route.params

  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <FlatList
          renderItem={({ item }) => item}
          showsVerticalScrollIndicator={false}
          data={[
            <View style={[styles.infoBox]}>
              <Text style={[typo.h2]}>ข้อมูลทั่วไป: </Text>
              <InfoWithIcon value={`ชื่อ: ${data.name}`} icon={<Fragment />} />
            </View>,
            <View style={[styles.infoBox]}>
              <Text style={[typo.h2]}>ข้อมูลควาย: </Text>
              <FlatList
                style={{ marginVertical: 20 }}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={[
                  {
                    bgColor: COLORS.gold,
                    value: '20',
                    label: 'ทั้งหมด',
                  },
                  {
                    bgColor: COLORS.naturalGreen,
                    value: '5',
                    label: 'ตัวผู้',
                  },
                  {
                    bgColor: COLORS.pink,
                    value: '15',
                    label: 'ตัวเมีย',
                  },
                ]}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.shadowBox,
                      styles.centered,
                      {
                        width: 100,
                        height: 100,
                        backgroundColor: item.bgColor,
                        borderRadius: 50,
                      },
                    ]}
                  >
                    <Text style={[typo.body, { color: COLORS.white }]}>
                      {item.label}
                    </Text>
                    <Text style={[typo.h1, { color: COLORS.white }]}>
                      {item.value}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>,
            <View style={[styles.infoBox]}>
              <Text style={[typo.h2]}>กิจกรรม: </Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={[
                  {
                    label: 'กำหนดกลับสัด',
                    icon: (
                      <FeatherIcons
                        name="refresh-ccw"
                        size={20}
                        color={COLORS.primary}
                      />
                    ),
                  },
                  {
                    label: 'ยา/วัคซีน',
                    icon: (
                      <FontistoIcons
                        name="pills"
                        size={20}
                        color={COLORS.primary}
                      />
                    ),
                  },
                  {
                    label: 'รอบผสม',
                    icon: (
                      <IoniconsIcons
                        name="timer-outline"
                        size={20}
                        color={COLORS.primary}
                      />
                    ),
                  },
                  {
                    label: 'กำหนดคลอด',
                    icon: (
                      <FontistoIcons
                        name="date"
                        size={20}
                        color={COLORS.primary}
                      />
                    ),
                  },
                ]}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.shadowBox,
                      {
                        padding: 10,
                        flex: 1,
                        width: Dimensions.get('screen').width * 0.43,
                        flexDirection: 'row',
                        alignItems: 'center',
                      },
                    ]}
                  >
                    {item.icon}
                    <Text
                      style={[
                        typo.body,
                        { color: COLORS.primary, marginLeft: 10 },
                      ]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>,
          ]}
        />
      </View>
    </SafeAreaView>
  )
}

export default FarmDetailScreen
