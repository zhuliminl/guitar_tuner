import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Tools Sub'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#333',
    fontSize: 90,
  },
});
