import React from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../styles.js'

export default class Activity extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Activity Screen</Text>
            </View>
        );
    }
}

