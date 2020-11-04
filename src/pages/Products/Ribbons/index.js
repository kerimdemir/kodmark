import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text, TouchableOpacity,
    View,
} from 'react-native';

import I18n from 'react-native-i18n';
import {Colors, Fonts} from '../../../themes';
import {blankLabels, riboncesitleri} from "../../data/data";
import Success from "../../../components/Success";

const Ribbons = ({navigation}) => {
    const [data, setData] = useState(false)
    useEffect(() => {}, []);

    return (
        <>
            {data && <Success data={data} successClose={() => setData(false)}/>}
            <ScrollView    showsVerticalScrollIndicator={false} style={{flex: 1}}>
                <Text numberOfLines={1} style={styles.textHeaderTitle}>
                    {I18n.t('BLANK LABELS')}
                </Text>

                <FlatList    showsVerticalScrollIndicator={false}
                    data={riboncesitleri}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={(a) => setData(item)}
                                          style={{
                                              flex: 1,
                                              flexDirection: 'column',
                                              margin: 5,
                                              marginBottom: 10,
                                          }}>
                            <Image style={styles.imageThumbnail} source={item.image}/>
                            <Text style={{textAlign: 'center'}}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        </>
    );
};

export default Ribbons;

const styles = StyleSheet.create({
    textHeaderTitle: {
        margin: 10,
        marginBottom: 0,
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.moderateScale(Fonts.size.medium),
        color: Colors.BLACK,
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
});
