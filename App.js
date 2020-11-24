/**
 * @format
 * @flow
 */

import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Activity1 from './exercises/activity1';
import Activity2 from './exercises/activity2';
import Activity3 from './exercises/activity3';
import Activity4 from './exercises/activity4';
import App2 from './BuzzForest/App';

const App = () => {
  return (
    <View>
      <ImageBackground
        source={require('./exercises/images/rainforest_bg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <App2 />
      </ImageBackground>
    </View>
  );
};

export default App;
