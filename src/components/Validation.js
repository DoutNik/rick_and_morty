
const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
const passwordRegEx = /^(?=.*\d).{6,10}$/;

export default function validation(input) {
const errors = {}

  if (!emailRegex.test(input.email)) {
    errors.email = "access denied: That's not a valid email";
  }

  if (!passwordRegEx.test(input.password)) {
    errors.password = 'access denied: Incorrect password'
  }
  return errors
}
