import React from 'react';
import {TouchableOpacity, View,Alert} from 'react-native';

import Trash_App_Header from './Trash_App_Header';
import Update_Button from './Update_Button';
import Data_Cluster from './Data_Cluster';
import Styles from './Styles';
const styles = Styles

export default class Main_Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Trash_App_HeaderVisible: true,
      Update_ButtonVisible: true,
      Data_ClusterVisible: true,
    };
  }

  request_data = () => {
    //Requst Data
    //Send Data To Data Cluster
  
    Alert.alert(
      'Alert Title!',
      'Alert Message....',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screencontainer}>
          <View style={styles.container}>
            <Trash_App_Header visible={this.state.Trash_App_HeaderVisible} />
            <TouchableOpacity style={styles.refresh_button} onPress={this.request_data}>
            <Update_Button visible={this.state.Update_ButtonVisible} />
            </TouchableOpacity>
            <Data_Cluster visible={this.state.Data_ClusterVisible} />
          </View>
        </View>
      </View>
    );
  }
}

