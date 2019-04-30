import React from 'react';
import {StyleSheet, View} from 'react-native';

import Trash_App_Header from './Trash_App_Header';
import Update_Button from './Update_Button';
import Data_Cluster from './Data_Cluster';

export default class Main_Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Trash_App_HeaderVisible: true,
      Update_ButtonVisible: true,
      Data_ClusterVisible: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screencontainer}>
          <View style={styles.container}>
            <Trash_App_Header visible={this.state.Trash_App_HeaderVisible} />
            <Update_Button visible={this.state.Update_ButtonVisible} />
            <Data_Cluster visible={this.state.Data_ClusterVisible} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  screencontainer: {
    backgroundColor: 'rgba(38,66,74,1)',
    flex: 1,
  },
});
