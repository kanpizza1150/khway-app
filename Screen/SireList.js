import React, { Fragment, useMemo, useState } from "react"
import { Dimensions, FlatList, SafeAreaView, Text, View } from "react-native"
import Card from "../Component/Card"
import styles, { COLORS, typo } from "../style"
import SireListHeader from "../Component/SireListHeader"
import ScreenHeader from "../Component/ScreenHeader"
import WavyHeader from "../Component/WavyHeader"

const initData = [
  {
    name: "ทองตีนโต",
    imgUrl: [
      "https://scontent.fkdt1-1.fna.fbcdn.net/v/t39.30808-6/302527330_142511618474840_431885523173775045_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEnN2chKNec27kvP-zWSoLjPlAzZMdEvoU-UDNkx0S-hTshGITwBN-0kkPsVm1TweBA8EdvAs2HjTSaiUy5JHvc&_nc_ohc=XGJcoKHnragAX863wuy&_nc_ht=scontent.fkdt1-1.fna&oh=00_AT9oJ0P30HpBVtOIXDWavZs6WDoGCpzdwhndpmnxettjcg&oe=6319E22A",
      "https://i.ytimg.com/vi/pLay-9l54cQ/maxresdefault.jpg",
      "https://i.ytimg.com/vi/GPW3kwj7HGY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXWW1wDKb7EP619YZKu-tZwak6Aw",
    ],
    dam: "หนุ่ม",
    sire: "สวย",
    calvedDate: "",
    type: "sire",
    farm: "ฟาร์มควายบ้านกำนันโป๊ด",
    contractInfo: {
      address: "บ้านเลขที่ 38 หมู่ 6 ต.ทัพทัน อ.ทัพทัน จ.อุทัยธานี 61120",
      lat: "",
      long: "",
      tel: "0878453465",
      socialMedia: {
        facebook: "ฟาร์มควายบ้านกำนันปื้ด",
        facebookUrl: "https://www.facebook.com/kamnanpod/",
        lineId: "",
      },
    },
    sellingType: "dam",
    rewards: ["แชมป์ชลบุรี 65", "แชมป์กระบือแห่งชาติ สกลนคร 65", "แชมป์หนองบัวลำภู 65"],
  },
  {
    name: "จ้าวเพชรลำโขง",
    imgUrl: [
      "https://scontent.fkdt1-1.fna.fbcdn.net/v/t39.30808-6/300519730_497327022395954_4118056125476203260_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG5Qt6mFkYVQN3hFGSzVC-ZsQy6tHEEqgmxDLq0cQSqCUUwuBFZCXS6Ofl5I8Hd-jWEuPC-imkW1HiTrmLTbEOl&_nc_ohc=taXzckJYWpYAX-bD_2B&_nc_ht=scontent.fkdt1-1.fna&oh=00_AT9xFKysVIYHzQEn9xeC1PMqFWji3m54G_yG3fM6ugJLUA&oe=631BD515",
    ],
    dam: "สายเพชรอุดร",
    sire: "ปังแปดริ้ว",
    type: "sire",
    calvedDate: "",
    farm: "บิ๊กไอซ์ ฟาร์มควายไทย",
    contractInfo: {
      address: "53 หมู่ 1 ต.ทัพยายเชียง อ.พรหมพิราม จ.พิษณุโลก",
      tel: "0818862033",
      socialMedia: {
        facebook: "ควายงามเมืองสองแคว",
        facebookUrl:
          "https://www.facebook.com/people/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%84%E0%B8%A7/100011736997547",
        lineId: "",
      },
    },
    sellingType: "semen",
    rewards: ["แชมป์ชลบุรี 65", "แชมป์กระบือแห่งชาติ สกลนคร 65", "แชมป์หนองบัวลำภู 65"],
  },
  {
    name: "ปังแปดริ้ว",
    imgUrl: [
      "https://scontent.fkdt1-1.fna.fbcdn.net/v/t39.30808-6/304837165_142511701808165_6668374636727695414_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG1XNjU-RIH3USkZvI6aXTsyzOo5D2Cn9rLM6jkPYKf2r2_SWzNYTbQ2sEILV9Xx9ZuoULqqjbj8w86n_gpMF1a&_nc_ohc=sQjEHAmtHfcAX9qTzka&_nc_ht=scontent.fkdt1-1.fna&oh=00_AT-Nx6uW8j7AMUvK1gU4r2Euws_rN9CGhH_YXdeuWoSlMQ&oe=631B4D1C",
    ],
    dam: "งาม",
    sire: "ทองสุข",
    calvedDate: "",
    type: "sire",
    farm: "ว.รุ่งเรืองฟาร์ม",
    contractInfo: {
      address: "ต.เสม็ดเหนือ อ.บางคล้า จ.ฉะเฉิงเทรา",
      lat: "",
      long: "",
      tel: "0815853868",
      socialMedia: {
        facebook: "",
        facebookUrl: "",
        lineId: "",
      },
    },
    sellingType: "semen",
    rewards: ["แชมป์ชลบุรี 65", "แชมป์กระบือแห่งชาติ สกลนคร 65", "แชมป์หนองบัวลำภู 65"],
  },
  {
    name: "แสน อุทัย",
    imgUrl: [
      "https://scontent.fkdt1-1.fna.fbcdn.net/v/t39.30808-6/304749304_141819621877373_135808173481144219_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHwqlm_9fJY8ThiNlZ9ocBEIhQDdNReO90iFAN01F473QOo4IV2Ou6Tha-BfkaNhqrMzz0Geyhqqa4ldAYztfay&_nc_ohc=e9aN6IL5LRAAX-RiYTq&_nc_oc=AQmD6YeQhBkYKYO7oEFarvy0SBxr81iUqFU4tP3atCGzobxy60nUYpMx0dPY9ZTbNFWe__HlxrqoClUD-exBCAGS&_nc_ht=scontent.fkdt1-1.fna&oh=00_AT8hua1aj0F_3uf8yOVe701P6jCzxnZ1slNjD9rPAR9Qsg&oe=631B37B9",
    ],
    sire: "เก้า(สายทองสุข)",
    dam: "สวย",
    type: "dam",
    calvedDate: "",
    farm: "BIG BUFFALO",
    contractInfo: {
      address: "อ.สว่างอารมณ์ จ.อุทัยธานี",
      lat: "15.578874229166445",
      long: "99.81440214716775",
      tel: "0863110344",
      socialMedia: {
        facebook: "ควายนา cafe หนึ่งบางปู อุทัยธานี",
        facebookUrl:
          "https://www.facebook.com/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B8%B2-cafe-Manaw-%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B1%E0%B8%A2%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5-112329917205917/",
        lineId: "",
      },
    },
    sellingType: "sire",
    rewards: ["แชมป์ชลบุรี 65", "แชมป์กระบือแห่งชาติ สกลนคร 65", "แชมป์หนองบัวลำภู 65"],
  },
]

const SireListScreen = () => {
  const [data, setData] = useState(initData)
  const handleSearch = (searchKey, tag) => {
    let searched = initData.filter((item) => item.name.toUpperCase().includes(searchKey.toUpperCase()))
    if (tag !== "all") {
      searched = searched.filter((item) => item.type === tag)
    }
    setData(searched)
  }
  const handleTagChange = (val) => {}

  const ListHeader = useMemo(
    () => <SireListHeader onSearch={handleSearch} onTagChange={handleTagChange} />,
    [handleSearch, handleTagChange]
  )
  return (
    <Fragment>
      <SafeAreaView style={[styles.container]}>
        <ScreenHeader title="รวมควายไทย" />
        <View style={{ flex: 1 }}>
          <WavyHeader
            customStyles={{
              position: "absolute",
              width: Dimensions.get("window").width,
              top: 0,
              left: 0,
              right: 0,
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
          <View style={{ zIndex: 0, marginBottom: 40, padding: 10 }}>
            <FlatList
              ListEmptyComponent={
                <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
                  <Text style={[typo.h2, { color: COLORS.white }]}>ไม่พบข้อมูล</Text>
                </View>
              }
              data={data}
              renderItem={({ item }) => <Card data={item} />}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={ListHeader}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  )
}
export default SireListScreen
