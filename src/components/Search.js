import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import I18n from 'react-native-i18n';
import {Colors, Metrics} from '../themes';

const Search = ({data, searchedData}) => {
  const [text, setText] = useState('');
  const searchFilterFunction = (text) => {
    setText(text);
    const newData = data.filter((item) => {
      const filterValue = item.name;
      if (typeof filterValue === 'string') {
        const itemData = `${filterValue.toUpperCase()} ${filterValue.toUpperCase()} ${filterValue.toUpperCase()}`;
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      }
    });
    searchedData(newData);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder={I18n.t('Search E-book')}
        containerStyle={styles.searchBar}
        inputContainerStyle={{backgroundColor: Colors.WHITE, height: 33}}
        lightTheme
        onChangeText={(text) => searchFilterFunction(text)}
        autoCorrect={false}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: Metrics.WIDTH * 0.01,
    paddingRight: Metrics.WIDTH * 0.01,
    paddingTop: Metrics.HEIGHT * 0.001,
    paddingBottom: Metrics.HEIGHT * 0.01,
    borderColor: '#E5E5E5',
  },
  searchBar: {
    backgroundColor: 'white',
    paddingLeft: -Metrics.WIDTH * 0.01,
    paddingRight: -Metrics.WIDTH * 0.01,
    paddingTop: -Metrics.HEIGHT * 0.01,
    paddingBottom: -Metrics.HEIGHT * 0.01,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    height: 36,
  },
});

export default Search;
