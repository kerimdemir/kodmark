import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Header';
import AboutUs from './AboutUs';
import VisionMission from './VisionMission';
import Catalog from './Catalog';

const Corporate = ({navigation}) => {
    const [page, setPage] = useState('0');
    useEffect(() => {
    }, []);


    if (page == '2') {
        return <Catalog call={(a) => setPage(a)}/>;
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled
            style={{flex: 1, backgroundColor: 'white'}}>
            <Header callback={(a) => setPage(a)} navigation={navigation}/>
            {page == '0' && <AboutUs/>}
            {page == '1' && <VisionMission/>}


        </ScrollView>
    );
};

export default Corporate;
