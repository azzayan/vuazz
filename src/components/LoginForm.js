import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="name@email.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="becauseParksAreCool!" />
        </CardSection>
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect(null, { emailChanged })(LoginForm);
