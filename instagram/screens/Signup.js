import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, updateUsername, updateBio } from '../actions/user.js';

class Signup extends React.Component {
    render() {
        return (
            <View style={styles.container} >
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

                {/* bio of that person */}
                <TextInput
                    style={styles.border}
                    value={this.props.user.username}
                    onChangeText={input => this.props.dispatch(updateUsername(input))}
                    placeholder='Username'
                />
                <TextInput
                    style={styles.border}
                    value={this.props.user.bio}
                    onChangeText={input => this.props.dispatch(updateBio(input))}
                    placeholder='Bio'
                />


                <TouchableOpacity style={styles.button} onPress={() => console.log(this.props.user)}>
                    <Text>Signup</Text>
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

export default connect(mapStateToProps)(Signup)