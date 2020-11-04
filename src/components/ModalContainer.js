import React from 'react';
import Modal from 'react-native-modal';
import {Metrics} from '../themes';
const ModalContainer = ({modalVisible, children, width = Metrics.WIDTH, height = Metrics.HEIGHT}) => {
    return (
        <Modal
            animationIn="slideInDown"
            style={{margin: 0}}
            deviceWidth={width}
            deviceHeight={height}
            isVisible={modalVisible}>
            {children}
        </Modal>
    );
};

export default ModalContainer;
