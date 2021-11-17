import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

export default function UploadPhoto({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  content: {paddingHorizontal: 40, flex: 1, paddingBottom: 64},
  page: {backgroundColor: colors.white, flex: 1},
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    colors: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.scondary,
  },
});
