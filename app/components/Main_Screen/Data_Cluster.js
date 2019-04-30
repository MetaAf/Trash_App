import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Data_Unit from './Data_Unit';
import Styles from './Styles';
const styles = Styles;

export default class Data_Cluster extends React.Component {
  render() {
    if (!this.props.visible) {
      return false;
    }

    return (
      <ScrollView style={styles.scroll_view}>
        <View style={styles.layouts} />
        <View style={styles.component}>
          <Data_Unit title={'Weight: '} val={''} />
          <Data_Unit title={'Humidity: '} val={''}  />
          <Data_Unit title={'Volume: '} val={''} />
          <Data_Unit title={'Temp: '} val={''}  />
        </View>
      </ScrollView>
    );
  }
}
