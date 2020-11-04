import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';
import styles from './TableView.style';
import {Fonts, Metrics} from '../../../../../themes';
import NoDataFound from '../../../../NoDataFound';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class TableView extends Component {
    state = {
        column_width: 0,
        width: screenWidth,
        height: (screenHeight * 50) / 100,
    };

    componentDidMount() {
        let width;
        let height;
        if (!this.props.width) {
            width = screenWidth;
        } else if (/^\d+(\.\d+)?%$/.test(this.props.width)) {
            width = (screenWidth * parseInt(this.props.width)) / 100;
        } else {
            width = parseInt(this.props.width);
        }

        if (!this.props.height) {
            height = (screenHeight * 50) / 100;
        } else if (this.props.height && /^\d+(\.\d+)?%$/.test(this.props.height)) {
            height = (screenHeight * parseInt(this.props.height)) / 100;
        } else {
            height = parseInt(this.props.height);
        }

        this.setState({
            width,
            height,
        });

        if (this.props.horizontalScroll) {
            this.setState({column_width: this.props.columnWidth || 150});
        } else {
            this.setState({
                column_width:
                    this.props.width ||
                    (screenWidth * (100 / this.props.headers.length)) / 100,
            });
        }
    }

    render() {
        return (
            <>
                {this.props.rows.length === 0 ? (
                    <NoDataFound/>
                ) : (
                    <SafeAreaView
                        style={{
                            marginTop: 15,
                            width: this.state.width,
                            height: Metrics.HEIGHT*0.3,
                            borderColor:
                                this.props.borderColor == 'none'
                                    ? 'transparent'
                                    : this.props.borderColor || 'grey',
                            borderWidth: 1,
                        }}>
                        <ScrollView bounces>
                            <ScrollView
                                bounces
                                horizontal
                                style={
                                    this.props.horizontalScroll
                                        ? {height: '100%'}
                                        : styles.disable_horizontal_scroll
                                }>
                                {this.props.headers.map((data, headerIndex) => (
                                    <View
                                        key={headerIndex}
                                        style={{
                                            ...styles.column_style,
                                            width: this.state.column_width,
                                        }}>
                                        <View
                                            style={{
                                                ...styles.header_text_container,
                                                height: this.props.headerHeight || 50,
                                            }}>
                                            <Text style={styles.header_text}>{data.name}</Text>
                                        </View>
                                        {this.props.rows.map((obj, rowIndex) => {
                                            const x = obj[data.reference_key || data.name];

                                            return (
                                                <View key={rowIndex} style={styles.row_container}>
                                                    <TouchableOpacity
                                                        disabled={!data.touch}
                                                        onPress={() => this.props.callbackValue(obj)}>
                                                        {data.object_key ? (
                                                            <Text>
                                                                {
                                                                    obj[data.reference_key || data.name][
                                                                        data.object_key
                                                                        ]
                                                                }
                                                            </Text>
                                                        ) : !data.touch ? (
                                                            <Text style={styles.row_text}>
                                                                {`${obj[data.reference_key || data.name]}`}
                                                            </Text>
                                                        ) : (
                                                            <View>{data.icon}</View>
                                                        )}
                                                    </TouchableOpacity>
                                                </View>
                                            );
                                        })}
                                    </View>
                                ))}
                            </ScrollView>
                        </ScrollView>
                    </SafeAreaView>
                )}
            </>
        );
    }
}
