import React from 'react';
import {View, Text} from 'react-native';

import Styles from './Styles';
const styles = Styles

export default class Trash_App_Header extends React.Component {
  render() {
    if (!this.props.visible) {
      return false;
    }
    return (
      <View style={styles.header_comp}>
        <View style={styles.layouts}>
          <View style={styles.header_inner_layout}>
            <View style={styles.container}>
              <View style={styles.item_container_inner}>
                <View style={styles.text_border}>
                  <Text style={styles.text_format}>Smart Trash</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

