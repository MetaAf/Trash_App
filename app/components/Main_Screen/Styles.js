import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
      },
    
      screencontainer: {
        backgroundColor: 'rgba(38,66,74,1)',
        flex: 1,
    },
  
    component: {
    width: '100%',
    flexDirection: 'column',
    height: '50%',
    paddingLeft: 7.5,
    paddingRight: 7.5,
    paddingTop: 7.5,
    paddingBottom: 7.5,
  },

  header_comp: {
    width: '100%',
    flexDirection: 'row',
    borderColor: 'rgba(110,192,154,1)',
    marginTop: 40,
    paddingLeft: 7.5,
    paddingRight: 7.5,
    paddingTop: 7.5,
    paddingBottom: 7.5,
  },

  header: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 10,
    backgroundColor: 'rgba(45,115,85,1)',
    borderStyle: 'solid',
    borderWidth: 4,
    borderRadius: 100,
  },

  header_inner_layout: {
    width: '100%',
    height: 73.5,
  },
  icon: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgba(45,115,85,1)',
    borderRadius: 50,
    borderColor: 'rgba(110,192,154,1)',
    borderStyle: 'solid',
    borderWidth: 4,
    paddingTop: 20,
  },
  item_container: {
    width: '100%',
    height: '100%',
    paddingTop: 7.5,
    paddingBottom: 7.5,
    paddingLeft: 7.5,
    paddingRight: 7.5,
  },

  item_container_inner: {
    width: '100%',
    height: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  layouts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  refresh_button: {
    paddingTop: 7.5,
  },

  ref_btn_layout: {
    width: '100%',
    height: 220,
  },
  scroll_view: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'rgba(38,66,74,1)',
    height: '40%',
    paddingLeft: 7.5,
    paddingRight: 7.5,
    paddingTop: 7.5,
    paddingBottom: 7.5,
  },

  text_container_layout: {
    width: '100%',
    height: 75,
  },

  text_border: {
    backgroundColor: 'rgba(45,115,85,1)',
    borderWidth: 1,
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

  text_format: {
    color: 'rgba(110,192,154,1)',
    fontSize: 24,
    textAlign: 'center',
    width: '100%',
  },

  update_btn_comp: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
    paddingLeft: 7.5,
    paddingRight: 7.5,
    paddingTop: 7.5,
    paddingBottom: 7.5,
  },

  refresh_text_view: {
    paddingTop: 20,
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: '25.788534841229836%',
    width: '49.8155%',
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
  },
  refresh_text: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 10,
  },
});
