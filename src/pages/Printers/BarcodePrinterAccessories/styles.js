import {StyleSheet} from 'react-native';
import {Fonts} from "../../../themes";

const styles = StyleSheet.create({
    container: {flex: 1},
    imageStyle: {
        margin: 10,
        height: 200,
        width: 120,
        resizeMode: 'contain',
    },
    cardContainer: {


        flexDirection: 'row',
        marginTop:10,
        alignItems:'center'
    },
    cardLeftText: {
        flex:1,
        marginRight:5,
        textAlign: 'right',
        fontFamily: Fonts.type.bold,
        fontSize:Fonts.moderateScale(12),
    },
    cardRightText: {
        flex:1,
        fontSize:Fonts.moderateScale(12),
        flexDirection: 'row',
        textAlign:'left',
    },

});
export default styles;
