import React from 'react';
import { 
	StyleSheet,
	View,
	ScrollView,
} from 'react-native';



export default class Dataset extends React.Component {


    render() {

        if (!this.props.visible) {
            return false;
        }
        

        return (

            <ScrollView 
                style={styles.component}
            >

                <View style={styles.layouts}>

                	
                </View>

            </ScrollView>
            
        );

    }

}

const styles = StyleSheet.create({
    
	component: {
	    width: '100%',
	    flexDirection: 'column',
	    backgroundColor: 'rgba(38,66,74,1)',
	    height: '40%',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
});