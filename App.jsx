import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.AppBar}>
        <View style={styles.AppBarInner}>
          <Text style={styles.AppBarTitle}>Memo App</Text>
          <Text style={styles.AppBarRight}>Logout</Text>
        </View>
      </View>

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

      <View style={styles.circleButton}>
        <Text style={styles.circleLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // flexbox表示範囲
    backgroundColor: '#F0F4F8', // 背景色
  },
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
