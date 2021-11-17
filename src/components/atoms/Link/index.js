import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Link({title, size, align}) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: colors.text.scondary,
    fontFamily: fonts.primary.normal,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
