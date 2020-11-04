import React, {useEffect} from 'react';
import {FlatList, Image, ScrollView, Text, View,} from 'react-native';
import I18n from 'react-native-i18n';
import {Colors} from '../../themes';
import Header from '../../components/Header';
import styles from './styles';
import {barcodeReaders, homeScreenData} from "../data/data";

const BarcodeReaders = ({navigation}) => {
    useEffect(() => {
    }, []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled
            style={{flex: 1, backgroundColor: Colors.TEMPLATE_COLOR}}>

            <View style={styles.viewBody}>
                <Text numberOfLines={1} style={styles.textHeaderTitle}>

                    {I18n.t('BARCODE READERS')}
                </Text>
                <FlatList
                    data={barcodeReaders}
                    renderItem={({item}) => (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                margin: 5,
                                marginBottom: 10,
                            }}>
                            <Image style={styles.imageThumbnail} source={item.image}/>
                            <Text style={{textAlign: 'center'}}>{item.name}</Text>
                        </View>
                    )}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </ScrollView>
    );
};

export default BarcodeReaders;
