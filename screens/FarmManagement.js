import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import ScreenHeader from '../components/ScreenHeader';
import styles, { COLORS, typo } from '../style';

const FarmManagementScreen = () => {
  const navigation = useNavigation();

  const menus = [
    {
      title: 'K39 Ranch',
      color: '#009FB7',
      number: '',
      icon: '1',
      navigateTo: 'SireList'
    },
    {
      title: 'K39 Ranch',
      color: '#009FB7',
      number: '',
      icon: '2',
      navigateTo: 'SireList'
    }
  ];
  const onMenuPress = to => {
    navigation.navigate(to);
  };
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
              title: 'เพิ่มฟาร์ม'
            }
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
                alignItems: 'center'
              }}
              onPress={() => onMenuPress(item.navigateTo)}
            >
              <Text
                style={[typo.h1, { color: item?.textColor || COLORS.white }]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};
export default FarmManagementScreen;
