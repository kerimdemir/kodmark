import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, TextInput,Linking, TouchableOpacity, View,} from 'react-native';
import I18n from 'react-native-i18n';
import styles from './styles';
import {Colors, Images} from '../../themes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {Sae} from 'react-native-textinput-effects';


const ContactUs = () => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView    showsVerticalScrollIndicator={false}>

                <Text style={styles.headerTitle}>{I18n.t("Contact Us")}</Text>
                <Text style={styles.subComp}>Kodmark Label Barcode Packaging Industry. ve Tic. Ltd. Sti.</Text>

                <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
                    <FontAwesome name={'home'} size={22}/>
                    <Text style={styles.subTitle}>
                        Sanayi Neighb.
                        Ensar St. No:35/3 {"\n"}
                        Pendik / İSTANBUL
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                    <FontAwesome name={'phone'} size={22}/>
                    <TouchableOpacity onPress={()=>Linking.openURL(`tel:${"+90 (216) 390 16 31"}`)}>
                    <Text style={styles.subTitle}>
                        +90(216) 390 16 31
                    </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.subTitle}>

                </Text>
                <View style={{flexDirection: 'row', marginTop: -10, alignItems: 'center'}}>
                    <Entypo name={'mail'} size={22}/>
                    <Text style={styles.subTitle}>
                        info@kodmark.com
                    </Text>
                </View>

                <ScrollView style={{margin: 10}}>
                    <Sae inputStyle={{color: 'rgba(14,14,14,0.8)'}}
                         labelStyle={{color: 'rgba(14,14,14,0.8)'}}
                         label={I18n.t("Name")}
                         onChangeText={(name) => setName(name)}
                         iconClass={FontAwesome}
                         iconName={'pencil'}
                         iconColor={Colors.TEMPLATE_COLOR}
                         inputPadding={16}
                         labelHeight={24}
                        // active border height
                         borderHeight={2}
                        // TextInput props
                         autoCapitalize={'none'}
                         autoCorrect={false}
                    />

                    <Sae inputStyle={{color: 'rgba(14,14,14,0.8)'}}
                         labelStyle={{color: 'rgba(14,14,14,0.8)'}}
                         onChangeText={(email) => setEmail(email)}
                         label={I18n.t("E-Mail")}
                         iconClass={FontAwesome}
                         iconName={'pencil'}
                         iconColor={Colors.TEMPLATE_COLOR}
                         inputPadding={16}
                         labelHeight={24}
                        // active border height
                         borderHeight={2}
                        // TextInput props
                         autoCapitalize={'none'}
                         autoCorrect={false}
                    />

                    <TextInput multiline
                               style={{
                                   textAlignVertical: 'top',
                                   color: 'rgba(14,14,14,0.8)',
                                   padding: 10,
                                   marginTop: 20,
                                   height: 150,
                                   borderRadius: 10,
                                   borderWidth: 1,
                                   borderColor: Colors.STATUS_BORDER_COLOR,
                               }}

                               placeholder="Message"
                               onChangeText={(message) => setMessage(message)}
                               value={message}
                    />

                </ScrollView>
                <TouchableOpacity style={styles.signInContainer} onPress={() => Linking.openURL('mailto:info@kodmark.com?subject=&body='+message+'\n'+name)}>
                    <Text style={styles.signInText}>{I18n.t('SEND')}</Text>
                </TouchableOpacity>


            </ScrollView>


        </SafeAreaView>

    );


};
export default ContactUs;
