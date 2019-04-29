import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';



export default class Buttoncluster extends React.Component {


    render() {

        if (!this.props.visible) {
            return false;
        }
        

        return (

            <View 
                style={styles.component}
            >

                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>

                                <TouchableOpacity 
										style={styles.item1}
									>
										
										<Text style={styles.item1TouchableOpacity}>
											Weight
										</Text>
									
									</TouchableOpacity>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout2}>

                		<View style={styles.itemcontainer2}>

                			<View style={styles.itemcontainer2Inner}>

                                <TouchableOpacity 
										style={styles.item2}
									>
										
										<Text style={styles.item2TouchableOpacity}>
											Humidity
										</Text>
									
									</TouchableOpacity>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout3}>

                		<View style={styles.itemcontainer3}>

                			<View style={styles.itemcontainer3Inner}>

                                <TouchableOpacity 
										style={styles.item3}
									>
										
										<Text style={styles.item3TouchableOpacity}>
											Volume
										</Text>
									
									</TouchableOpacity>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout4}>

                		<View style={styles.itemcontainer4}>

                			<View style={styles.itemcontainer4Inner}>

                                <TouchableOpacity 
										style={styles.item4}
									>
										
										<Text style={styles.item4TouchableOpacity}>
											Temp
										</Text>
									
									</TouchableOpacity>

                			</View>

                		</View>

                	</View>
                	
                </View>

            </View>
            
        );

    }

}

const styles = StyleSheet.create({
    
	component: {
	    width: '100%',
	    flexDirection: 'column',
	    height: '50%',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '100%',
	    height: 82.5,
	},
	
	itemcontainer1: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer1Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item1: {
	    backgroundColor: 'rgba(45,115,85,1)',
	    borderWidth: 4,
	    borderColor: 'rgba(110,192,154,1)',
	    borderStyle: 'solid',
	    borderRadius: 100,
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    alignItems: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item1TouchableOpacity: {
	    color: 'rgba(110,192,154,1)',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
	layout2: {
	    width: '100%',
	    height: 82.5,
	},
	
	itemcontainer2: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer2Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item2: {
	    backgroundColor: 'rgba(45,115,85,1)',
	    borderWidth: 4,
	    borderColor: 'rgba(110,192,154,1)',
	    borderStyle: 'solid',
	    borderRadius: 100,
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    alignItems: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item2TouchableOpacity: {
	    color: '#fff',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
	layout3: {
	    width: '100%',
	    height: 82.5,
	},
	
	itemcontainer3: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer3Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item3: {
	    backgroundColor: 'rgba(45,115,85,1)',
	    borderWidth: 4,
	    borderColor: 'rgba(110,192,154,1)',
	    borderStyle: 'solid',
	    borderRadius: 100,
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    alignItems: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item3TouchableOpacity: {
	    color: '#fff',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
	layout4: {
	    width: '100%',
	    height: 82.5,
	},
	
	itemcontainer4: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer4Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item4: {
	    backgroundColor: 'rgba(45,115,85,1)',
	    borderWidth: 4,
	    borderColor: 'rgba(110,192,154,1)',
	    borderStyle: 'solid',
	    borderRadius: 100,
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    alignItems: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item4TouchableOpacity: {
	    color: '#fff',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
});