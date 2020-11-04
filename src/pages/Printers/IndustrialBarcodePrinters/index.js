import React, {useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {TableView} from '../../../components/react-native-responsive-table';
import {industrialBarcodePrintersialTOSHIBABSERIES, industrialBarcodePrintersialZEBRAZTSERIES} from "../../data/data";
import I18n from "react-native-i18n";
import styles from "./styles";

const IndustrialBarcodePrinters = ({navigation}) => {
    useEffect(() => {
    }, []);

    return (
        <ScrollView    showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{margin: 10, marginBottom: 20}}>

                <Text style={{margin:5}}>{I18n.t("ZEBRA ZT SERIES")}</Text>
                <Image style={styles.imageStyle}  source={require("../../../assets/kodmark/endustriyelyazicilar/endustriyel.jpg")} />

                <TableView
                    horizontalScroll
                    columnWidth={140}
                    headers={[

                        {
                            name: 'ZEBRA ZT SERIES',
                            reference_key: 'header1',
                        },
                        {
                            name: 'ZT-220',
                            reference_key: 'header2',
                        },
                        {
                            name: 'ZT-230',
                            reference_key: 'header3',
                        },
                        {
                            name: 'ZT-410',
                            reference_key: 'header4',
                        },
                        {
                            name: 'ZT-420',
                            reference_key: 'header5',
                        },
                    ]}
                    rows={industrialBarcodePrintersialZEBRAZTSERIES}
                />
            </View>
            <View style={{margin: 10, marginBottom: 20}}>
                <Text style={{margin:5}}>{I18n.t("TOSHIBA B SERIES")}</Text>
                <Image style={styles.imageStyle}  source={require("../../../assets/kodmark/endustriyelyazicilar/toshiba.jpg")} />

                <TableView
                    horizontalScroll
                    columnWidth={140}
                    headers={[

                        {
                            name: 'TOSHIBA B SERIES',
                            reference_key: 'header1',
                        },
                        {
                            name: 'B-EX4T1',
                            reference_key: 'header2',
                        },
                        {
                            name: 'B-EX4T2',
                            reference_key: 'header3',
                        },
                        {
                            name: 'B-SX4T',
                            reference_key: 'header4',
                        },
                        {
                            name: 'B-SX5T',
                            reference_key: 'header5',
                        },
                    ]}
                    rows={industrialBarcodePrintersialTOSHIBABSERIES}
                />
            </View>
        </ScrollView>
    );
};

export default IndustrialBarcodePrinters;
