import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  CardItem,
  Button,
  Spinner
} from 'native-base';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner style={styles.spinnerStyle} color='#6AC700' />;
    }

    return (
      <Button block style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.buttonTextStyle}>Log In</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Email</Label>
              <Input
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </Item>

            <Item inlineLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </Item>
          </Form>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardItem>
            {this.renderButton()}
          </CardItem>
        </Content>
      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#6E1100',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6AC700',
    marginLeft: 5,
    marginRight: 5
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
