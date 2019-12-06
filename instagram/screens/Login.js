import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../styles.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword } from '../actions/user.js';

class Login extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Login</Text>
                <TextInput
                    value={this.props.user}
                    onChangeText={input => this.props.dispatch(updateEmail(input))}
                    placeholder='Email'
                />
                <TextInput
                    value={this.props.user}
                    onChangeText={input => this.props.dispatch(updatePassword(input))}
                    placeholder='Password'
                />
            </View>
        );


    }
}

const mapDispatchToProps = (dispatch) => {
    bindActionCreators({ updateEmail, updatePassword }, dispatch)
}
//this one can be copied and pasted throughout the components
//what changes is what we pass in the {} inside of bindActionCreators
//the function or the action we're going to call

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login)