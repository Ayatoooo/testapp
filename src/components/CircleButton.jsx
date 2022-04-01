import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function CircleButton(props) {
  const { children } = props; // CircleButtonの子要素の抜き出し
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleLabel}>{children}</Text>
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired, // stringを必須項目にする
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32, // 枠線に丸みをつける
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // IOS shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // android shadow
    elevation: 5,
  },
  circleLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
