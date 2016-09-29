import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import moment from 'moment';

import StatusIndicator from './StatusIndicator';

class StatusScene extends Component {
    constructor(props){
        super(props);
    }

    _renderLastUpDate(){

        if(this.props.isUp!=='up'){
            return (
                <Text style={styles.lastUpText}>
                    {moment().to(this.props.lastUpTime)}
                </Text>
            )
        }else{
            return (
                <Text style={styles.lastUpText}>
                    {' '}
                </Text>
            )
        }
    }

    render(){
        //console.log(this.props.isUp)
        return (
            <View style={styles.container}>
                <StatusIndicator
                    isUp={this.props.isUp=="up"?true:false}
                />
                {this._renderLastUpDate()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 60,
        textAlign: 'center',
        color: '#E6E8EF',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    lastUpText: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        color: '#b1b3b6',
        backgroundColor: 'rgba(0,0,0,0)',
    },
});

export default StatusScene;