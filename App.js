import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Main_Screen from './app/components/Main_Screen/Main_Screen';
const StackNavigator = createStackNavigator(
  {
    Main_Screen: {
      screen: Main_Screen,
      navigationOptions: {
        title: 'Main_Screen',
        header: null,
      },
    },
  },
  {headerMode: 'screen'}
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StackNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
