import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Button} from 'react-native';

const styles = StyleSheet.create({
  boxStyle: {
    width: 150,
    height: 150,
    padding: 20,
    backgroundColor: '#00629e',
  },
});

const Activity3 = () => {
  return (
    <View style={styles.boxStyle}>
      <Button
        style={styles.boxStyle}
        color="#f9769a"
        title="Press Me"
        onPress={() => {
          alert('You tapped the button!');
        }}
      />
    </View>
  );
};

export default Activity3;
