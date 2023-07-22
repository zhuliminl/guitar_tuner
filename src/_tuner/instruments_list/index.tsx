import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as R from 'ramda';
import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Nav } from '../../components/Nav';
import { useThemeStyle } from '../../hooks/useTheme';
import { RootStackParamList } from '../../tabs';
import { instruments } from '../../utils/music/instruments';
import Check from '../../components/Check';

type Props = NativeStackScreenProps<RootStackParamList, 'InstrumentsList'>;

export default ({ route, navigation }: Props) => {
  const { cateName } = route.params;
  // const cateName = '吉他';
  const sections = R.groupWith(
    (a, b) => a.subCategory === b.subCategory,
    R.filter(_ => _.category === cateName, instruments),
  ).map(_ => {
    return {
      cateTitle: _[0].subCategory,
      data: _,
    };
  });
  const Theme = useThemeStyle();
  const tagWidth = 24;
  const tagTotalWidth = (tagWidth + Theme.scale) * 6;
  return (
    <SafeAreaView style={styles.container}>
      <Nav title={cateName} />
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.label + index}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: Theme.windowWidth,
              height: 1,
              backgroundColor: Theme.colorDivide,
            }}></View>
        )}
        // SectionSeparatorComponent={() => (
        //   <View>
        //     <Text>jj</Text>
        //   </View>
        // )}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({ section: { cateTitle } }) => (
          <View
            style={{
              paddingLeft: Theme.scale * 4,
              width: Theme.windowWidth,
              backgroundColor: Theme.bgColorPrimary,
            }}>
            <View
              style={{
                height: Theme.scale * 12,
                borderBottomColor: Theme.colorDivide,
                borderBottomWidth: 1,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: Theme.fontColorPrimary,
                  fontSize: Theme.fontSizeTitle,
                }}>
                {cateTitle}
              </Text>
            </View>
          </View>
        )}
        renderItem={({ item, index }) => {
          return (
            <TouchableHighlight
              underlayColor={Theme.bgColorTertiary}
              onPress={() => {}}>
              <View
                style={{
                  alignItems: 'center',
                  paddingHorizontal: Theme.scale * 4,
                  marginTop: Theme.scale * 4,
                  marginBottom: Theme.scale * 4,
                  width: Theme.windowWidth,
                  flexDirection: 'row',
                }}>
                {/* 标题 */}
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text
                    style={{
                      fontSize: Theme.fontSizeDefault,
                      color: Theme.fontColorPrimary,
                      lineHeight: Theme.fontSizeDefault + Theme.scale * 2,
                      fontWeight: 'bold',
                    }}>
                    {item.desc}
                  </Text>
                  <Text
                    style={{
                      fontSize: Theme.fontSizeDesc,
                      color: Theme.fontColorQuaternary,
                      // lineHeight: Theme.fontSizeDesc + Theme.scale * 2,
                    }}>
                    {item.label}
                  </Text>
                </View>
                {/* 展示 */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    flexWrap: 'wrap',
                    width: tagTotalWidth,
                  }}>
                  {item.notes.map((note, i) => {
                    const isLineTwo = (i + 1) / 6 > 1;
                    return (
                      <View
                        key={i}
                        style={{
                          marginRight: Theme.scale,
                          width: tagWidth,
                          height: tagWidth,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: Theme.borderRadiusSmall,
                          backgroundColor: Theme.bgColorTertiary,
                          marginTop: isLineTwo ? Theme.scale : 0,
                        }}>
                        <Text
                          style={{
                            color: Theme.fontColorPrimary,
                            fontSize: Theme.fontSizeSmalll - 2,
                          }}>
                          {note}
                        </Text>
                      </View>
                    );
                  })}
                </View>
                {/* 选中 */}
                <View
                  style={{
                    width: 16,
                    marginLeft: Theme.scale * 3,
                  }}>
                  {index == 5 && <Check isActive={true} />}
                </View>
              </View>
            </TouchableHighlight>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#333',
    fontSize: 90,
  },
});
