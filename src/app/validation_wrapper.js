import { validation } from './validation';
import validatejs from 'validate.js';

export default function validate(fieldName, value) {
  // Validate.js validates your values as an object
  // e.g. var form = {email: 'email@example.com'}
  // Line 8-9 creates an object based on the field name and field value
  var formValues = {}
  formValues[fieldName] = value

  // Line 13-14 creates an temporary form with the validation fields
  // e.g. var formFields = {
  //                        email: {
  //                         presence: {
  //                          message: 'Email is blank'
  //                         }
  //                       }
  var formFields = {}
  formFields[fieldName] = validation[fieldName]


  // The formValues and validated against the formFields
  // the variable result hold the error messages of the field
  const result = validatejs(formValues, formFields)

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[fieldName][0]
  }

  return null
}

export function validatePassword(passwords, constraint, fieldName) {
    /*Validate Password will take an object of passwords and
    * with given constraits, evaluate and return a message.
    *
    * e.g. ({password: "test", confirmPassword: "test"}, constraints)
    * constraints = {confirmPassword:{equality:"password"}}
    */

    const result = validatejs(passwords, constraint)

    if (result) {
        return result[fieldName][0]
    }
    return null
}