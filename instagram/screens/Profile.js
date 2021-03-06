import React from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../styles.js'

class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Profile Screen {this.props.counter}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Profile)
