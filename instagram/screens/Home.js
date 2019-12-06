import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//we import bindActionCreators and connect to almost every component
import { add, subtract } from '../actions/index.js'
import styles from '../styles.js'


class Home extends React.Component {
    // state = {
    //     count: 10
    // }

    // add = () => {
    //     console.log('adding')
    //     let num = this.state.count + 1
    //     this.setState({ count: num })
    // }

    // subtract = () => {
    //     console.log('subtracting')
    //     let num = this.state.count - 1
    //     this.setState({ count: num })
    // }

    //commented state, add, subtract above after adding dispatch

    render() {
        return (
            <View style={styles.container} >
                <Text>Home Screen{this.props.counter}</Text>
                <Text>How Many Apps   {this.props.counter}</Text>
                <Button title='ADD' onPress={() => this.props.dispatch(add())} />
                <Button title='SUBTRACT' onPress={() => this.props.dispatch(subtract())} />
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    bindActionCreators({ add, subtract }, dispatch)
}
//this one can be copied and pasted throughout the components
//what changes is what we pass in the {} inside of bindActionCreators
//the function or the action we're going to call

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Home)
//connect the state to the component


//but what is the count in     <Text>How Many Apps   {this.props.count}</Text>    <Text>How Many Apps   {this.props.count}</Text>

