import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../../../../themes';

export default StyleSheet.create({
  header_text_container: {
    height: Metrics.HEIGHT * 0.1,
    width: Metrics.WIDTH * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column_style: {
    backgroundColor: Colors.LITEGRAY,
    alignItems: 'center',
    paddingBottom: 10,
  },
  header_text: {
    marginTop: Metrics.HEIGHT * 0.01,
    marginBottom: Metrics.HEIGHT * 0.01,
    fontSize: Fonts.moderateScale(9),
    color: 'black',
    fontFamily: Fonts.type.semiBold,
  },
  row_container: {
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.HEIGHT * 0.07,

    borderBottomWidth: 0,
    marginBottom: Metrics.HEIGHT * 0.002,
    marginLeft: Metrics.HEIGHT * 0.005,
    borderBottomColor: Colors.LITEGRAY,
  },
  row_text: {
    color: Colors.BLACK,
    fontSize: 11,
    textAlign:'center'
  },
  disable_horizontal_scroll: {},
});
