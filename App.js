import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {
  AuthorizeNetEnv,
  getTokenWithRequestForCard,
} from 'react-native-authorize-net-accept';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getAccept = () => {
    getTokenWithRequestForCard({
      env: AuthorizeNetEnv.SANDBOX, //AuthorizeNetEnv.PRODUCTION
      cardValues: {
        loginID: '885cqCLFYA',
        clientKey:
          '7GyVZacR7H6jnQkzmg2XGYqG85z7UqyvxexcTPX96Y99FtzCBfT7GPS67ptp537m',
        cardNumber: '4242424242424242',
        cardCVV: '123',
        expirationYear: '24',
        expirationMonth: '12',
      },
    })
      .then(res => {
        console.log('res: ', res);
      })
      .catch(err => {
        console.error('err: ', err);
      });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        />
        <Button title="Check accept" color="#841584" onPress={getAccept} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
