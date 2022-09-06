import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import ScreenHeader from '../components/ScreenHeader';
import styles, { typo } from '../style';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="บัญชี" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[typo.h1, { fontSize: 50 }]}>🐃</Text>
        <Text style={[typo.h1]}>Coming soon...</Text>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
