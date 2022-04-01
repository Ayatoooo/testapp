import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemoList() {
  return (
    <View>
      <View style={styles.MemoListItem}>
        <View>
          <Text style={styles.MemoListTitle}>買い物リスト</Text>
          <Text style={styles.MemoListDate}>2022年03月30日</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  MemoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row', // 主軸の方向や向き
    justifyContent: 'space-between',
    paddingVertical: 16, // 内方向の間隔
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1, // 枠線
    borderColor: 'rgba( 0, 0, 0, 0.15 )', // 枠線色
  },
  MemoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  MemoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
