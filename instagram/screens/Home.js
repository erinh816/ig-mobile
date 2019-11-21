import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../styles.js'

export default class Home extends React.Component {
    state = {
        count: 10
    }

    add = () => {
        console.log('adding')
        let num = this.state.count + 1
        this.setState({ count: num })
    }

    subtract = () => {
        console.log('subtracting')
        let num = this.state.count - 1
        this.setState({ count: num })
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>Home Screen</Text>
                <Text>How Many Apps   {this.state.count}</Text>
                <Button title='ADD' onPress={() => this.add()} />
                <Button title='SUBTRACT' onPress={() => this.subtract()} />
            </View>
        );
    }
}

