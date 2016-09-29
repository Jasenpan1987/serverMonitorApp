import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import axios from 'axios';

import StatusScene from './StatusScene';
import TabBarContainer from './TabBarContainer';

import LinearGradient from 'react-native-linear-gradient'

class MainContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            services: {
                web:{
                    status:"down",
                    lastUpTime:"2016-09-29T03:07:48.973Z"
                },
                db:{
                    status:"up",
                    lastUpTime:"2016-09-29T03:07:48.973Z"
                },
                mail:{
                    status:"down",
                    lastUpTime:"2016-09-29T03:07:48.973Z"
                }
            },
            selectedService: 'web',
        }
    }

    _onTabChange(tabName){
        this.setState({
            selectedService: tabName
        });
    }

    componentWillMount(){
        setInterval(()=>{
            axios.get('http://10.0.2.2:8080/status').then(({data})=>{
                //console.log('response', data);
                this.setState({
                    services: data
                })
            }).catch(error=>{
                //console.log('error', error);
            })
        }, 5000)
    }

    render(){
        return (
            <LinearGradient colors={['#313D43', '#4A787A']} style={styles.container}>
                <View style={styles.container}>
                    <StatusScene
                        isUp={this.state.services[this.state.selectedService].status}
                        lastUpTime={this.state.services[this.state.selectedService].lastUpTime}
                    />
                    <TabBarContainer
                        selected={this.state.selectedService}
                        onTabChange={this._onTabChange.bind(this)}
                    />
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default MainContainer;
