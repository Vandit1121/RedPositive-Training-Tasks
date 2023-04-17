import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFName,
    valueIsValid: enteredFNameIsValid,
    hasError: FNameInputHasError,
    valueChangeHandler: FNameChangeHandler,
    inputBlurHandler: FNameBlurHandler,
    reset: FNameResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLName,
    valueIsValid: enteredLNameIsValid,
    hasError: LNameInputHasError,
    valueChangeHandler: LNameChangeHandler,
    inputBlurHandler: LNameBlurHandler,
    reset: LNameResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailResetHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredFName);
    console.log(enteredLName);
    console.log(enteredEmail);
    FNameResetHandler();
    LNameResetHandler();
    emailResetHandler();
  };

  const FNameClass = FNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const LNameClass = LNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const EmailClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={FNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={FNameChangeHandler}
            onBlur={FNameBlurHandler}
            value={enteredFName}
          />
          {FNameInputHasError && (
            <p className="error-text">First Name cannot be empty.</p>
          )}
        </div>
        <div className={LNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={LNameChangeHandler}
            onBlur={LNameBlurHandler}
            value={enteredLName}
          />
          {LNameInputHasError && (
            <p className="error-text">Last Name cannot be empty.</p>
          )}
        </div>
      </div>
      <div className={EmailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
            <p className="error-text">Email cannot be without @ and cannot be empty.</p>
          )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
