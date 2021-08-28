import PropTypes from 'prop-types';
import './RadioButtons.scss';

import Form from 'react-bootstrap/Form';
import { ReactComponent as MaleIcon } from '../../images/icon-male.svg';
import { ReactComponent as FemaleIcon } from '../../images/icon-female.svg';
import { ReactComponent as OtherIcon } from '../../images/icon-other.svg';

export default function RadioButtons({ handleGenderChange, gender }) {
  return (
    <>
      <Form.Label className="form__label">Gender</Form.Label>

      <div className="radio-btn__group" onChange={handleGenderChange}>
        <div className="radio-btn__item">
          <input id="male" type="radio" name="gender" value="male" />
          <label
            tabIndex="1"
            className={
              gender === 'male'
                ? 'radio-btn__label--active'
                : 'radio-btn__label'
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
        <div className="radio-btn__item">
          <input id="female" type="radio" name="gender" value="female" />
          <label
            tabIndex="2"
            className={
              gender === 'female'
                ? 'radio-btn__label--active'
                : 'radio-btn__label'
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
        <div className="radio-btn__item">
          <input id="other" type="radio" name="gender" value="other" />
          <label
            tabIndex="3"
            className={
              gender === 'other'
                ? 'radio-btn__label--active'
                : 'radio-btn__label'
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
    </>
  );
}

RadioButtons.propYypes = {
  handleGenderChange: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
};
