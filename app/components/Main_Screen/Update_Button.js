import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {FontAwesome} from '@expo/vector-icons';

import Styles from './Styles';
const styles = Styles

export default class Update_Button extends React.Component {
  render() {
    if (!this.props.visible) {
      return false;
    }
    return (
      <View style={styles.update_btn_comp}>
        <TouchableOpacity style={styles.refresh_button}>
          <View style={styles.layouts}>
            <View style={styles.ref_btn_layout}>
              <View style={styles.item_container}>
                <View style={styles.item_container_inner}>
                  <View style={styles.trash_icon}>
                    <FontAwesome
                      name={'trash-o'}
                      size={124}
                      color={'rgba(110,192,154,1)'}
                    />
                  </View>
                  <View style={styles.refresh_text_view}>
                    <View style={styles.refresh_text}>
                      <Text style={styles.text_format}>Refresh</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

