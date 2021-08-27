import { useState, useEffect } from 'react';

import './SignUpForm.scss';

import { ReactComponent as MaleIcon } from '../../images/icon-male.svg';
import { ReactComponent as FemaleIcon } from '../../images/icon-female.svg';
import { ReactComponent as OtherIcon } from '../../images/icon-other.svg';
import { ReactComponent as EyeIcon } from '../../images/icon-eye.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUpForm = () => {
  const [gender, setGender] = useState('');

  const handleGenderChange = ({ target: { value } }) => {
    setGender(value);
  };

  const [email, setEmail] = useState('');
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
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
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };
  const onPasswordInputBlur = () => {
    password.length > 0 && password.length < 6
      ? setIsWrongPassword(true)
      : setIsWrongPassword(false);
  };

  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNotMatches, setIsNotMatches] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);
  const handlePasswordRepeatChange = ({ target: { value } }) => {
    setConfirmPassword(value);
  };

  const toggleIsVisibleConfirmPassword = e => {
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
      <Form.Label className="form__label">Gender</Form.Label>
      <div className="form__radio-btn-group" onChange={handleGenderChange}>
        <div className="form__radio-btn">
          <input id="male" type="radio" name="gender" value="male" />
          <label
            className={
              gender === 'male'
                ? 'form__gender-label--active'
                : 'form__gender-label'
            }
            htmlFor="male"
            style={{
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <MaleIcon className="icon-gender" />
            <p className="label__description">Male</p>
          </label>
        </div>
        <div className="form__radio-btn">
          <input id="female" type="radio" name="gender" value="female" />
          <label
            className={
              gender === 'female'
                ? 'form__gender-label--active'
                : 'form__gender-label'
            }
            style={{
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            htmlFor="female"
          >
            <FemaleIcon className="icon-gender" />
            <p className="label__description">Female</p>
          </label>
        </div>
        <div className="form__radio-btn">
          <input id="other" type="radio" name="gender" value="other" />
          <label
            className={
              gender === 'other'
                ? 'form__gender-label--active'
                : 'form__gender-label'
            }
            style={{
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            htmlFor="other"
          >
            <OtherIcon className="icon-gender" />
            <p className="label__description">Other</p>
          </label>
        </div>
      </div>

      <Form.Group
        controlId="formBasicEmail"
        label="Email address"
        className="label__wrapper"
      >
        <Form.Label className="form__label">E-mail</Form.Label>
        <Form.Control
          className={`form__input ${
            isEmailWrong ? 'form__input--error' : null
          }`}
          style={{
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          aria-describedby="emailHelpBlock"
          name="email"
          type="email"
          required
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
          onBlur={onEmailInputBlur}
        />
        {isEmailWrong && (
          <div className="error">
            <Form.Text id="emailHelpBlock" muted>
              <strong className="error__message">
                The format should be the next name@example.com
              </strong>
            </Form.Text>
          </div>
        )}
      </Form.Group>

      <Form.Group
        controlId="formBasicPassword"
        label="Password"
        className="label__wrapper"
      >
        <Form.Label className="form__label">Create Password</Form.Label>
        <div className="input__wrapper">
          <Form.Control
            className={`form__input ${
              isWrongPassword ? 'form__input--error' : null
            }`}
            style={{
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            aria-describedby="passwordHelpBlock"
            name="password"
            type={isVisiblePassword ? 'text' : 'password'}
            required
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={onPasswordInputBlur}
          />

          <div
            className={isVisiblePassword ? 'eye-icon--visible' : 'eye-icon'}
            data-field="password"
            onClick={toggleIsVisibleConfirmPassword}
          >
            <EyeIcon />
          </div>
        </div>

        {isWrongPassword && (
          <div className="error">
            <Form.Text id="passwordHelpBlock" muted>
              <strong className="error__message">
                Your password must minimum 6 characters long
              </strong>
            </Form.Text>
          </div>
        )}
      </Form.Group>

      <Form.Group
        controlId="formBasicPasswordRepeat"
        label="Repeat Password"
        className="label__wrapper"
      >
        <Form.Label className="form__label">Confirm Password</Form.Label>
        <div className="input__wrapper">
          <Form.Control
            className={`form__input ${
              isNotMatches ? 'form__input--error' : null
            }`}
            style={{
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            aria-describedby="passwordConfirmHelpBlock"
            name="confirm password"
            type={isVisibleConfirmPassword ? 'text' : 'password'}
            required
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handlePasswordRepeatChange}
          />
          <div
            className={
              isVisibleConfirmPassword ? 'eye-icon--visible' : 'eye-icon'
            }
            data-field="confirm password"
            onClick={toggleIsVisibleConfirmPassword}
          >
            <EyeIcon />
          </div>
        </div>
        {isNotMatches && (
          <div className="error">
            <Form.Text id="passwordConfirmHelpBlock" muted>
              <strong className="error__message">Password doesn't match</strong>
            </Form.Text>
          </div>
        )}
      </Form.Group>
      <Button className="login__button" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default SignUpForm;
