import React, { PropTypes } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

let Icon = require('react-native-vector-icons/FontAwesome');

const TabBarItem = (props) => {
    console.log(props.selected)
    return (
        <View style={styles.container}>
            <Icon name={props.icon} style={[styles.icon, props.selected && styles.selectedLabel]} size={30}/>
            <Text style={[styles.label, props.selected && styles.selectedLabel]}>{props.label}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: '#ffffff',

        paddingVertical: 4,
    },
    label: {
        color: '#ffffff',

    },
    selectedLabel: {
        color: '#CC9766',
    },
})

export default TabBarItem;