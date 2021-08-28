import PropTypes from 'prop-types';

import './PasswordField.scss';

import Form from 'react-bootstrap/Form';
import { ReactComponent as EyeIcon } from '../../images/icon-eye.svg';

export default function PasswordField({
  controlId,
  labelText,
  isWrong,
  ariaDescribedby,
  name,
  type,
  placeholder,
  value,
  handleChange,
  onBlur,
  hint,
  dataField,
  isVisible,
  toggleIsPassword,
}) {
  return (
    <Form.Group controlId={controlId} className="label__wrapper">
      <Form.Label className="form__label">{labelText}</Form.Label>
      <div className="input__wrapper">
        <Form.Control
          className={`password__input ${
            isWrong ? 'password__input--error' : null
          }`}
          style={{
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          aria-describedby={ariaDescribedby}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <div
          className={isVisible ? 'eye-icon--visible' : 'eye-icon'}
          data-field={dataField}
          onClick={toggleIsPassword}
        >
          <EyeIcon />
        </div>
      </div>
      {isWrong && (
        <div className="error">
          <Form.Text id={ariaDescribedby} muted>
            <strong className="error__message">{hint}</strong>
          </Form.Text>
        </div>
      )}
    </Form.Group>
  );
}

PasswordField.defaultProps = {
  labelText: '',
  placeholder: '',
  hint: '',
  onBlur: () => {},
};

PasswordField.propTypes = {
  controlId: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  isWrong: PropTypes.bool.isRequired,
  ariaDescribedby: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  hint: PropTypes.string,
  dataField: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleIsPassword: PropTypes.func.isRequired,
};
