
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {Platform} from 'react-native';

const App: () => React$Node = () => {
  return (
    <WebView
      source={{ uri: 'https://m.beauate.com' }}
      style={{ marginTop: Platform.OS === 'ios' ? 30 : 0 }}
    />
  );
};

export default App;
