import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>

      <AppBar />

      <MemoList />
      <MemoList />
      <MemoList />
      <MemoList />

      <CircleButton>+</CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // flexbox表示範囲
    backgroundColor: '#F0F4F8', // 背景色
  },
});
