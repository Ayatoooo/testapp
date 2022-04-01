import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.AppBar}>
      <View style={styles.AppBarInner}>
        <Text style={styles.AppBarTitle}>Memo App</Text>
        <Text style={styles.AppBarRight}>Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppBar: {
    width: '100%', // 幅
    height: 104, // 高さ
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end', // flexboxに対する縦間隔をどう取るか
  },
  AppBarInner: {
    alignItems: 'center', // flexboxに対する横間隔をどう取るか
  },
  AppBarRight: {
    position: 'absolute', // 位置
    right: 19,
    bottom: 16,
    color: 'rgba( 255, 255, 255, 0.8 )', // 透明度を持たせた色指定
  },
  AppBarTitle: {
    margin: 8, // 外方向の間隔
    fontSize: 22, // 文字のサイズ
    lineHeight: 32, // 行の高さ
    color: '#ffffff', // 文字色
    fontWeight: 'bold', // 文字の太さ
  },
});
