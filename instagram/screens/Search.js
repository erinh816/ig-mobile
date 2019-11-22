import React from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../styles.js'

export default class Search extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Search Screen</Text>
            </View>
        );
    }
}
