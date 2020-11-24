import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {Data} from './Section';

const App2 = () => {
  return (
    <View>
      <Text
        style={{
          color: '#3F300E',
          backgroundColor: '#E1DDAA',
          height: 50,
          fontSize: 20,
          padding: 10,
        }}>
        BuzzForest
      </Text>
      <View style={{paddingRight: 20, paddingLeft: 20, paddingTop: 30}}>
        <Image
          source={require('./img/orangutan.jpg')}
          style={{width: '100%', height: 200, padding: 20}}
        />
        <Text />
        <Data />
      </View>
      <Text style={{fontSize: 12, backgroundColor: 'white'}}>Copyright</Text>
    </View>
  );
};

export default App2;
