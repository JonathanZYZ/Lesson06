import React from 'react';
import {View, Alert, Button} from 'react-native';

const Activity4 = () => {
  return (
    <View>
      <Button title="CONFIRM" onPress={() => Alert.alert('Hi there!')} />
    </View>
  );
};

export default Activity4;
