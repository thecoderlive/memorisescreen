import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'



const optionListItem = ({ item }) => (
<View style={styles.option_list_item}>
<Text style={styles.option}>{item.option}</Text>
</View>
  );

const OptionList = ({ item }) => (
<FlatList
    style={styles.option_list}
    data={item}
    renderItem={optionListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default OptionList;

const styles = StyleSheet.create({
    'option': {
        'color': '#030202',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 20
    }
});