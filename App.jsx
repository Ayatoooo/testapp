import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/components/CircleButton';

export default function App() {
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
