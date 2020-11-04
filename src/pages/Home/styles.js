import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 180,
    width: '100%',
    resizeMode: 'cover',
  },
  flatlistImage: {
    width: Metrics.WIDTH / 2.1,
    height: Metrics.HEIGHT / 3,
    resizeMode: 'cover',
  },
  dot: {
    backgroundColor: Colors.GRAY,
    width: Metrics.WIDTH * 0.017,
    height: Metrics.WIDTH * 0.017,
    borderRadius: Metrics.WIDTH * 0.017,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005,
  },
  activeDot: {
    backgroundColor: Colors.TEMPLATE_COLOR,
    width: Metrics.WIDTH * 0.026,
    height: Metrics.WIDTH * 0.026,
    borderRadius: Metrics.WIDTH * 0.013,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005,
  },

  viewBody: {
    backgroundColor: 'white',
    paddingTop: Metrics.HEIGHT * 0.02,
    paddingBottom: Metrics.HEIGHT * 0.04,

  },

  textHeaderTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.moderateScale(Fonts.size.medium),
    color: Colors.BLACK,
    marginTop: 15,
  },
  containerCard: {
    flexDirection: 'row',
    flex: 1,
  alignItems:'center',
    justifyContent: 'center',
  },
  viewCard: {
alignSelf:'center',
    borderWidth: 1,
    borderRadius: 50,
  width:'95%',
    justifyContent:'center',
    marginRight: 5,
    marginLeft:5,
    marginTop: Metrics.HEIGHT * 0.015,
  },
  textCard: {
    padding: 15,
    fontSize: Fonts.size.regular,
    textAlign: 'left',

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
  fontAws:{position:'absolute',right:30,top:15}
});
export default styles;
