import { useNavigation } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { CircleButton } from '../components/Button';
import styles, { COLORS, typo } from '../style';

export const InfoWithIcon = ({ value, icon, ...props }) => {
  return (
    value && (
      <View style={{ flexDirection: 'row', marginVertical: 3 }}>
        {icon}
        <TouchableOpacity onPress={props?.onPress} disabled={!props?.onPress}>
          <Text style={[typo.body, { marginLeft: 5 }]}>{value}</Text>
        </TouchableOpacity>
      </View>
    )
  );
};
export const sellingTypeText = {
  sire: 'พ่อพันธุ์',
  dam: 'แม่พันธุ์',
  semen: 'น้ำเชื้อ'
};
export const ContactInfo = ({ data }) => {
  return (
    <Fragment>
      <InfoWithIcon
        value={data?.farm}
        icon={<EntypoIcons name="location-pin" size={20} color="#c2233d" />}
        onPress={() => {
          const { lat, long } = data?.contractInfo;
          if (lat && long) {
            Linking.openURL(
              `https://www.google.com/maps/search/?api=1&query=${lat},${long}`
            );
          }
        }}
      />
      <InfoWithIcon
        value={data?.contractInfo?.tel}
        onPress={() => {
          Linking.openURL(`tel:${data?.contractInfo?.tel}`);
        }}
        icon={<MaterialCommunityIcons name="phone" size={20} color="green" />}
      />
      <InfoWithIcon
        value={data?.contractInfo?.socialMedia?.facebook}
        onPress={() => {
          const { facebookUrl } = data?.contractInfo?.socialMedia;
          if (facebookUrl) {
            Linking.openURL(facebookUrl);
          }
        }}
        icon={
          <MaterialCommunityIcons name="facebook" size={20} color="#3b5998" />
        }
      />
      <InfoWithIcon
        value={data?.contractInfo?.socialMedia?.lineId}
        icon={<FontistoIcons name="line" size={20} />}
      />
      <InfoWithIcon
        value={data?.contractInfo?.address}
        icon={
          <MaterialCommunityIcons
            name="home"
            size={20}
            color={COLORS.primary}
          />
        }
      />
    </Fragment>
  );
};

export const Rewards = ({ data }) => {
  return (
    <Fragment>
      {data.rewards.map(reward => (
        <InfoWithIcon
          key={reward}
          value={reward}
          icon={<FontAwesomeIcons name="trophy" size={20} color="#F5BD02" />}
        />
      ))}
    </Fragment>
  );
};
export const CardInfo = ({ data }) => {
  return (
    <View style={{ padding: 10, paddingBottom: 0 }}>
      <Text style={[typo.h1, { textAlign: 'center' }]}>{data.name}</Text>
      <View style={{ flex: 1 }}>
        <ContactInfo data={data} />
      </View>
    </View>
  );
};
export default function Card({ data }) {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={{ width: '100%', height: 200 }}>
        <Image
          source={{
            uri: data.imgUrl[0]
          }}
          resizeMode="cover"
          style={styles.cardImage}
        />
      </View>
      <CircleButton
        right={10}
        top={10}
        imgUrl={{
          uri: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/heart-icon.png'
        }}
        handlePress={() => {}}
      />
      <CardInfo data={data} />
      <View style={{ padding: 10, width: '100%' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SireDetail', { data })}
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: 50,
            padding: 8,
            alignSelf: 'flex-end'
          }}
        >
          <Text style={[typo.body, { color: COLORS.white }]}>ดูรายระเอียด</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
