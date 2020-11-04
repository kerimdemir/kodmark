import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../themes';

const styles = StyleSheet.create({

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: '100%',
    resizeMode: 'cover',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  viewBody: {
    backgroundColor: 'white',
    paddingTop: Metrics.HEIGHT * 0.02,
    paddingLeft: Metrics.WIDTH * 0.04,
    paddingBottom: Metrics.HEIGHT * 0.04,
    paddingRight: Metrics.WIDTH * 0.04,
  },

  textHeaderTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.moderateScale(Fonts.size.medium),
    color: Colors.BLACK,
  },
  viewCard: {
    height: Metrics.screenHeight * 0.57,
  },
  viewCardItem: {
    flex: 1,
    marginTop: 20,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    backgroundColor: Colors.TEMPLATE_COLOR,

    shadowColor: Colors.GRAY,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.WIDTH * 0.04,
  },
  textCardItem: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.moderateScale(Fonts.size.medium),
  },
});
export default styles;
