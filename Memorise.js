import React from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import OptionList from './OptionList'

const Memorise = () => (
<ScrollView style={styles.memorise} showsVerticalScrollIndicator={false}>
<Image
    style={styles.memorise_pic}
    source={{uri: item.memorise_pic}}
    />
<Image
    style={styles.refresh_icon}
    source={{uri: item.refresh_icon}}
   />
<OptionList item={item.option_list}/>
</ScrollView>
)

export default Memorise;

const styles = StyleSheet.create({
    'memorise_pic': {
        'width': '100vw',
        'height': '90vw'
    },
    'refresh_icon': {
        'width': '8vw',
        'height': '8vw',
        'margin': 5
    }
});