import { View, Text, SafeAreaView, Image, FlatList, Dimensions } from "react-native"
import React, { Fragment } from "react"
import styles, { COLORS, typo } from "../style"
import { ContactInfo, InfoWithIcon, Rewards } from "../Component/Card"
import Carousel from "react-native-snap-carousel"
const CarouselCardItem = ({ item, index }) => {
  return (
    <View>
      <Image source={{ uri: item.imgUrl }} style={{ height: 300 }} />
    </View>
  )
}
const SireDetailScreen = ({ route, navigation }) => {
  const SLIDER_WIDTH = Dimensions.get("window").width
  const ITEM_WIDTH = SLIDER_WIDTH
  const isCarousel = React.useRef(null)
  const { data } = route.params
  const imageSource = data.imgUrl.map((img) => ({ imgUrl: img }))

  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <FlatList
          data={[
            <Fragment>
              <Carousel
                layoutCardOffset={9}
                vertical={false}
                ref={isCarousel}
                data={imageSource}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
              />
            </Fragment>,
            <View
              style={[
                styles.card,
                { backgroundColor: COLORS.white, padding: 10, marginBottom: 0, marginHorizontal: 10 },
              ]}>
              <Text style={[typo.h2]}>ข้อมูล: </Text>
              <InfoWithIcon value={`ชื่อ: ${data.name}`} icon={<Fragment />} />
              <InfoWithIcon value={`Sire: ${data.sire}`} icon={<Fragment />} />
              <InfoWithIcon value={`Dam: ${data.dam}`} icon={<Fragment />} />
              <InfoWithIcon value={`Calved Date: ${data?.calved || "-"}`} icon={<Fragment />} />
            </View>,
            <View
              style={[
                styles.card,
                { backgroundColor: COLORS.white, padding: 10, marginBottom: 0, marginHorizontal: 10 },
              ]}>
              <Text style={[typo.h2]}>รางวัล: </Text>
              <Rewards data={data} />
            </View>,
            <View
              style={[
                styles.card,
                { backgroundColor: COLORS.white, padding: 10, marginBottom: 0, marginHorizontal: 10 },
              ]}>
              <Text style={[typo.h2]}>ช่องทางการติดต่อ:</Text>
              <ContactInfo data={data} />
            </View>,
          ]}
          renderItem={({ item }) => item}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default SireDetailScreen
