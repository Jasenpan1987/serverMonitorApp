import React, { PropTypes } from 'react'
import {
    StyleSheet,
    Dimensions
} from 'react-native'

import TabBarItem from './TabBarItem';
let Tabs = require('react-native-tabs')

const TabBarContainer = (props) => (
    <Tabs
        style={styles.tabContainer}
        selected={props.selected}
        onSelect={comp => {
			props.onTabChange(comp.props.name);
		}}

    >
        <TabBarItem name="web" label="Web Server" icon="server" />
        <TabBarItem name="db" label="DB Server" icon="database" />
        <TabBarItem name="mail" label="Mail Server" icon="envelope-o" />
    </Tabs>
)

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#343434',
        borderTopWidth: 1,
        borderTopColor: '#262626',
        alignSelf: 'center',
        height: 96,
    },
})

export default TabBarContainer