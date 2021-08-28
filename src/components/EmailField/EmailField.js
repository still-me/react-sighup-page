import PropTypes from 'prop-types';

import './EmailField.scss';
import Form from 'react-bootstrap/Form';

export default function EmailField({
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
}) {
  return (
    <Form.Group controlId={controlId} className="label__wrapper">
      <Form.Label className="form__label">{labelText}</Form.Label>
      <Form.Control
        className={`email__input ${isWrong ? 'email__input--error' : null}`}
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

EmailField.defaultProps = {
  labelText: '',
  placeholder: '',
  hint: '',
};

EmailField.propTypes = {
  controlId: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  isWrong: PropTypes.bool.isRequired,
  ariaDescribedby: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  hint: PropTypes.string,
};
