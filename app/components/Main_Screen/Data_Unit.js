import React from 'react';
import {View,Text} from 'react-native'
import Styles from './Styles';
const styles = Styles

export default class Data_Unit extends React.Component {
    render() {
        return (
              <View style={styles.layouts}>
                <View style={styles.text_container_layout}>
                  <View style={styles.item_container}>
                    <View style={styles.item_container_inner}>
                      <View style={styles.text_border}>
                        <Text style={styles.text_format}>{this.props.title}{this.props.val}</Text>
                      </View>
                    </View>
                  </View>
                </View>
            </View>
        );
      }
    }
    