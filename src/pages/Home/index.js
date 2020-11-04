import React, {useEffect} from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import I18n from 'react-native-i18n';
import {Colors, Fonts} from '../../themes';
import styles from './styles';
import {
    barcodeAccessories,
    barcodeReaders,
    blankLabels, desktopBarcodePrinters,
    homeScreenData,
    printedLabels, riboncesitleri,
    slideImages
} from '../data/data';
import Divider from "../../components/Divider";
import FontAwesome from "react-native-vector-icons/AntDesign";

const Home = ({navigation}) => {
    useEffect(() => {
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEnabled
                style={{flex: 1, backgroundColor: Colors.WHITE}}>
                <View style={styles.viewBody}>
                    {/*<Swiper
                        style={{
                            height: 195,
                            marginBottom: 10,
                            marginTop: 10,
                            backgroundColor: 'white',
                        }}
                        autoplay={true}
                        key={slideImages.length}
                        autoplayTimeout={2}
                        paginationStyle={{
                            bottom: 10,
                            width: '100%',
                            height: 10,
                            backgroundColor: 'transparent',
                        }}
                        activeDot={<View style={styles.activeDot}/>}
                        dot={<View style={styles.dot}/>}>
                        {slideImages.map((item, index) => {
                            return (
                                <Image style={styles.imageStyle} key={index} source={item.image}/>
                            );
                        })}
                    </Swiper>*/}
                    <Text numberOfLines={1} style={styles.textHeaderTitle}>
                        {' '}
                        {I18n.t('PRODUCTS')}{' '}

                    </Text>
                    <Divider/>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PrintedLabels')}
                        activeOpacity={0.5} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 5,
                        justifyContent: 'space-between'
                    }}>
                        <Text numberOfLines={1} style={styles.textHeaderTitle}>
                            {' '}
                            {I18n.t('PRINTED LABELS')}{' '}
                        </Text>
                        <Text numberOfLines={1} style={{...styles.textHeaderTitle, fontFamily: Fonts.type.medium}}>
                            {' '}
                            {I18n.t('SEE ALL')}{' '}

                        </Text>
                    </TouchableOpacity>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                              showsVerticalScrollIndicator={false}
                              data={printedLabels}
                              renderItem={({item}) => (
                                  <View style={{
                                      flex: 1,
                                      flexDirection: 'column',
                                      padding: 5,
                                      marginBottom: 10,
                                  }}>
                                      <Image style={styles.imageThumbnail} source={item.image}/>
                                      <Text style={{textAlign: 'center', width: 200}}></Text>
                                  </View>
                              )}
                              numColumns={1}
                              keyExtractor={(item, index) => index.toString()}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BlankLabels')}
                        activeOpacity={0.5} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 5,
                        justifyContent: 'space-between'
                    }}>
                        <Text numberOfLines={1} style={styles.textHeaderTitle}>
                            {' '}
                            {I18n.t('BLANK LABELS')}{' '}
                        </Text>
                        <Text numberOfLines={1} style={{...styles.textHeaderTitle, fontFamily: Fonts.type.medium}}>
                            {' '}
                            {I18n.t('SEE ALL')}{' '}

                        </Text>
                    </TouchableOpacity>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                              showsVerticalScrollIndicator={false}
                              data={blankLabels}
                              renderItem={({item}) => (
                                  <View style={{
                                      flex: 1,
                                      flexDirection: 'column',
                                      padding: 5,
                                      marginBottom: 10,
                                  }}>
                                      <Image style={styles.imageThumbnail} source={item.image}/>
                                      <Text style={{textAlign: 'center', width: 200}}></Text>
                                  </View>
                              )}
                              numColumns={1}
                              keyExtractor={(item, index) => index.toString()}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Ribbons')}
                        activeOpacity={0.5} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 5,
                        justifyContent: 'space-between'
                    }}>
                        <Text numberOfLines={1} style={styles.textHeaderTitle}>
                            {' '}
                            {I18n.t('RIBBONS')}{' '}
                        </Text>
                        <Text numberOfLines={1} style={{...styles.textHeaderTitle, fontFamily: Fonts.type.medium}}>
                            {' '}
                            {I18n.t('SEE ALL')}{' '}

                        </Text>
                    </TouchableOpacity>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                              showsVerticalScrollIndicator={false}
                              data={riboncesitleri}
                              renderItem={({item}) => (
                                  <View style={{
                                      flex: 1,
                                      flexDirection: 'column',
                                      padding: 5,
                                      marginBottom: 10,
                                  }}>
                                      <Image style={styles.imageThumbnail} source={item.image}/>
                                      <Text style={{textAlign: 'center', width: 200}}></Text>
                                  </View>
                              )}
                              numColumns={1}
                              keyExtractor={(item, index) => index.toString()}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BarcodePrinterAccessories')}
                        activeOpacity={0.5} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 5,
                        justifyContent: 'space-between'
                    }}>
                        <Text numberOfLines={1} style={styles.textHeaderTitle}>
                            {' '}
                            {I18n.t('BARCODE PRINTER ACCESSORIES')}{' '}
                        </Text>
                        <Text numberOfLines={1} style={{...styles.textHeaderTitle, fontFamily: Fonts.type.medium}}>
                            {' '}
                            {I18n.t('SEE ALL')}{' '}

                        </Text>
                    </TouchableOpacity>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                              showsVerticalScrollIndicator={false}
                              data={barcodeAccessories}
                              renderItem={({item}) => (
                                  <View style={{
                                      flex: 1,
                                      flexDirection: 'column',
                                      padding: 5,
                                      marginBottom: 10,
                                  }}>
                                      <Image style={styles.imageThumbnail} source={item.image}/>
                                      <Text style={{textAlign: 'center', width: 200}}></Text>
                                  </View>
                              )}
                              numColumns={1}
                              keyExtractor={(item, index) => index.toString()}
                    />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('BarcodeReaders')}
                        activeOpacity={0.5} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 5,
                        justifyContent: 'space-between'
                    }}>
                        <Text numberOfLines={1} style={styles.textHeaderTitle}>
                            {' '}
                            {I18n.t('BARCODE READERS')}{' '}
                        </Text>
                        <Text numberOfLines={1} style={{...styles.textHeaderTitle, fontFamily: Fonts.type.medium}}>
                            {' '}
                            {I18n.t('SEE ALL')}{' '}

                        </Text>
                    </TouchableOpacity>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                              showsVerticalScrollIndicator={false}
                              data={barcodeReaders}
                              renderItem={({item}) => (
                                  <View style={{
                                      flex: 1,
                                      flexDirection: 'column',
                                      margin: 5,
                                      marginBottom: 10,
                                  }}>
                                      <Image style={styles.imageThumbnail} source={item.image}/>
                                      <Text style={{textAlign: 'center', width: 200}}></Text>
                                  </View>
                              )}
                              numColumns={1}
                              keyExtractor={(item, index) => index.toString()}
                    />


                    <TouchableOpacity
                        onPress={() => navigation.navigate('DesktopBarcodePrinters')}
                        activeOpacity={0.5} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 5,
                        justifyContent: 'space-between'
                    }}>
                        <Text numberOfLines={1} style={styles.textHeaderTitle}>
                            {' '}
                            {I18n.t('DESKTOP BARCODE PRINTERS')}{' '}
                        </Text>
                        <Text numberOfLines={1} style={{...styles.textHeaderTitle, fontFamily: Fonts.type.medium}}>
                            {' '}
                            {I18n.t('SEE ALL')}{' '}

                        </Text>
                    </TouchableOpacity>

                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                              showsVerticalScrollIndicator={false}
                              data={desktopBarcodePrinters}
                              renderItem={({item}) => (
                                  <View style={{
                                      flex: 1,
                                      flexDirection: 'column',
                                      margin: 5,
                                      marginBottom: 10,
                                  }}>
                                      <Image style={{...styles.imageThumbnail, padding: 10, resizeMode: 'contain'}}
                                             source={item.image}/>
                                      <Text style={{textAlign: 'center', width: 200}}></Text>
                                  </View>
                              )}
                              numColumns={1}
                              keyExtractor={(item, index) => index.toString()}
                    />

                    <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={() => navigation.navigate('PrintedLabels')}
                        style={styles.viewCard}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textCard}>{I18n.t('Printed Labels')} </Text>
                            <FontAwesome style={styles.fontAws} color={'gray'} size={17} name={'arrowright'}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BlankLabels')}
                        activeOpacity={0.3} style={styles.viewCard}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textCard}>{I18n.t('Blank Labels')} </Text>
                            <FontAwesome style={styles.fontAws} color={'gray'} size={17} name={'arrowright'}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Ribbons')}
                        activeOpacity={0.3} style={styles.viewCard}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textCard}>{I18n.t('Ribbons')} </Text>
                            <FontAwesome style={styles.fontAws} color={'gray'} size={17} name={'arrowright'}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('IndustrialBarcodePrinters')}
                        activeOpacity={0.3} style={styles.viewCard}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textCard}>{I18n.t('Industrial Barcode Printers')} </Text>
                            <FontAwesome style={styles.fontAws} color={'gray'} size={17} name={'arrowright'}/>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BarcodeReaders')}
                        activeOpacity={0.3} style={styles.viewCard}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textCard}>{I18n.t('Barcode Readers')} </Text>
                            <FontAwesome style={styles.fontAws} color={'gray'} size={17} name={'arrowright'}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('DesktopBarcodePrinters')}
                        activeOpacity={0.3} style={styles.viewCard}>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textCard}>{I18n.t('Desktop Barcode Printers')} </Text>
                            <FontAwesome style={styles.fontAws} color={'gray'} size={17} name={'arrowright'}/>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MobileBarcodePrinters')}
                        activeOpacity={0.3} style={styles.viewCard}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textCard}>{I18n.t('Mobile Barcode Printers')} </Text>
                            <FontAwesome style={styles.fontAws} color={'gray'} size={17} name={'arrowright'}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('BarcodePrinterAccessories')}
                        activeOpacity={0.3} style={styles.viewCard}>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textCard}>{I18n.t('Barcode Printer Accessories')} </Text>
                            <FontAwesome style={styles.fontAws} color={'gray'} size={17} name={'arrowright'}/>
                        </View>
                    </TouchableOpacity>

                </View>
                {/*
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={homeScreenData}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate(item.navigate)}
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
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
                */}

            </ScrollView>
        </View>
    );
};
export default Home;
