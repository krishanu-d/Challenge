import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigator from './source/navigation/navigation';
import {isReadyRef, navigate, navigationRef} from './RootNavigation';

function App() {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer
        ref={navigationRef}
        onReady={()  => {
          isReadyRef.current = true;
        }}>
        <Navigator navigate={navigate} />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
