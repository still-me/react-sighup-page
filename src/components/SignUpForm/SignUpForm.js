import { useState, useEffect } from 'react';

import './SignUpForm.scss';

import RadioButtons from '../RadioButtons';
import EmailField from '../EmailField';
import PasswordField from '../PasswordField';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUpForm = () => {
  const [gender, setGender] = useState('');
  const handleGenderChange = ({ target: { value } }) => {
    setGender(value);
  };

  const [email, setEmail] = useState('');
  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const testEmail = email => {
    const check = /\S+@\S+\.\S+/;
    return !check.test(email);
  };
  const onEmailInputBlur = () => {
    if (email.length > 0) {
      setIsEmailWrong(testEmail(email));
    }
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const onPasswordInputBlur = () => {
    password.length > 0 && password.length < 6
      ? setIsWrongPassword(true)
      : setIsWrongPassword(false);
  };

  const [confirmPassword, setConfirmPassword] = useState('');
  const handlePasswordRepeatChange = ({ target: { value } }) => {
    setConfirmPassword(value);
  };

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);
  const toggleIsVisiblePassword = e => {
    const field = e.currentTarget.dataset.field;
    switch (field) {
      case 'confirm password':
        setIsVisibleConfirmPassword(prev => !prev);
        break;
      case 'password':
        setIsVisiblePassword(prev => !prev);
        break;

      default:
        break;
    }
  };

  const [isNotMatches, setIsNotMatches] = useState(false);
  useEffect(() => {
    password !== confirmPassword && confirmPassword.length > 0
      ? setIsNotMatches(true)
      : setIsNotMatches(false);
  }, [password, confirmPassword, email]);

  const handleSubmit = e => {
    e.preventDefault();

    if (isEmailWrong || isWrongPassword || isNotMatches) {
      alert('please check entered data according hints');
      return;
    }

    alert(`Gender: ${gender} Email: ${email} Password: ${password}`);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setGender('');
    setIsVisibleConfirmPassword(false);
    setIsVisiblePassword(false);
  };

  return (
    <Form onSubmit={handleSubmit} className="login__form">
      <RadioButtons handleGenderChange={handleGenderChange} gender={gender} />

      <EmailField
        controlId="formBasicEmail"
        labelText="E-mail"
        isWrong={isEmailWrong}
        ariaDescribedby="emailHelpBlock"
        name="email"
        type="email"
        placeholder="name@example.com"
        value={email}
        handleChange={handleEmailChange}
        onBlur={onEmailInputBlur}
        hint="The format should be the next name@example.com"
      />

      <PasswordField
        controlId="formBasicPassword"
        labelText="Password"
        isWrong={isWrongPassword}
        ariaDescribedby="passwordHelpBlock"
        name="password"
        type={isVisiblePassword ? 'text' : 'password'}
        placeholder="Password"
        value={password}
        handleChange={handlePasswordChange}
        onBlur={onPasswordInputBlur}
        hint="Your password must minimum 6 characters long"
        dataField="password"
        isVisible={isVisiblePassword}
        toggleIsPassword={toggleIsVisiblePassword}
      />

      <PasswordField
        controlId="formBasicPasswordConfirm"
        labelText="Password"
        isWrong={isNotMatches}
        ariaDescribedby="passwordConfirmHelpBlock"
        name="confirm password"
        type={isVisibleConfirmPassword ? 'text' : 'password'}
        placeholder="Confirm Password"
        value={confirmPassword}
        handleChange={handlePasswordRepeatChange}
        hint="Password doesn't match"
        dataField="confirm password"
        isVisible={isVisibleConfirmPassword}
        toggleIsPassword={toggleIsVisiblePassword}
      />

      <Button className="login__button" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default SignUpForm;
