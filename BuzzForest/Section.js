import React from 'react';
import {Text, View, Button, Alert} from 'react-native';

const SECTION_DATA = [
  {
    title: 'ANIMALS',
    description:
      'See the animal exhibits, discover the secrets about the animals we love and how they are cared for daily. Seize the opportunity to interact with some of the animal.',
  },
  {
    title: 'ACTIVITIES',
    description:
      'You, not only get to see animals, but all visitors can satisfy their curiosity, feed the animals and get up-close with the animals and have fun.',
  },
  {
    title: 'FIND US',
    description:
      'Making your way to BuzzForest is easy. No matter where you are, there are many quick and convenient ways to find us.',
  },
];
const Data = () => {
  return SECTION_DATA.map((dataInfo) => (
    <View>
      <Button
        color="#BF4216"
        title={dataInfo.title}
        onPress={() => {
          Alert.alert(dataInfo.title.toString() + ' button pressed!');
        }}
      />
      <Text style={{backgroundColor: '#557622'}}>{dataInfo.description}</Text>
      <Text></Text>
    </View>
  ));
};

export {Data};
