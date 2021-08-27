import "./SignUpView.scss";
import SignUpForm from "../components/SignUpForm";
import { ReactComponent as LogoIcon } from "../images/logo.svg";

export default function SignUpView() {
  return (
    <div className="signUp__wrapper">
      <LogoIcon className="logo" />
      <h1 className="sign-up__title">Sign Up with email</h1>
      <SignUpForm />
      <p className="sign-up__info-text">
        <span className="info-text__wrapper">Already have an account?</span>
        <a href="##" className="sign-up__info-link">
          Log In
        </a>
      </p>
      <p className="sign-up__info-text">
        <span className="info-text__wrapper">
          Review privacy and disclosures
        </span>
        <a href="##" className="sign-up__info-link">
          here
        </a>
      </p>
    </div>
  );
}
