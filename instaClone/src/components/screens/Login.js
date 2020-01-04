import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Login extends Component {

    login() {
        this.props.navigation.navigate("main")
    }
    render() {
        return (

            <TouchableOpacity style={{
                    width: 100 + "%",
                    height: 100 + "%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}
                onPress={() => {
                    this.login();
                }}>
                <Text>Login Page</Text>
            </TouchableOpacity>
        );
    }
}

export default Login;
