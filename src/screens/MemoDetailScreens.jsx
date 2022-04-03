import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.MemoHeader}>
        <Text style={styles.MemoTitle}>買い物リスト</Text>
        <Text style={styles.MemoDate}>2022年04月03日 17:00</Text>
      </View>
      <ScrollView style={styles.MemoBody}>
        <Text>
          買い物リスト
          あああああああああああああああああ
          いいいいいいいいいいいいいいいいいいいいい
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }}>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  MemoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  MemoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  MemoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  MemoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  MemoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
