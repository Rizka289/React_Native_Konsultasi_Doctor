import {stringLiteral} from '@babel/types';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, IconStart} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <View style={styles.rate}>
        <IconStart />
        <IconStart />
        <IconStart />
        <IconStart />
        <IconStart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  profile: {flex: 1},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  rate: {flexDirection: 'row'},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.scondary,
    marginTop: 2,
  },
});
