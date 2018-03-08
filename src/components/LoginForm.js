import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChange, passwordChange, loginUser} from '../actions';

class LoginForm extends React.Component {

  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  onPasswordChange(text) {
    this.props.passwordChange(text);
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='small'/>
    } else {
      return (<Button
        onPress={this.onButtonPress.bind(this)}
      >
        Log in
      </Button>);
    }
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            keyboardType="email-address"
            label="Email"
            autoCapitalize="none"
            placeholder="user@service.com"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            placeholder="password"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }

}


const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading,
  }
};

export default connect(mapStateToProps, {emailChange, passwordChange, loginUser})(LoginForm);