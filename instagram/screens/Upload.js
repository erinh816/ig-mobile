import React from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../styles.js'

export default class Upload extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Upload Screen</Text>
            </View>
        );
    }
}
