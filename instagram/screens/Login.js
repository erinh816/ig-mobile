import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword } from '../actions/user.js';

class Login extends React.Component {
    login = () => {
        if (this.props.user.email) {
            this.props.navigation.navigate('Home')
        }
    }
    //if the user email exists, log in to home page
    render() {
        return (
            <View style={styles.container} >
                <Text>Login</Text>
                <TextInput
                    style={styles.border}
                    value={this.props.user.email}
                    onChangeText={input => this.props.dispatch(updateEmail(input))}
                    placeholder='Email'
                />
                <TextInput
                    style={styles.border}
                    value={this.props.user.password}
                    onChangeText={input => this.props.dispatch(updatePassword(input))}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                {/* navigate between signup and login page */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} >
                    <Text>Signup</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.login()}>
                    <Text>Login</Text>
                </TouchableOpacity>
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