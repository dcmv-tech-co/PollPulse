import { useState } from "react";

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

interface Fields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const useValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = (fields: Fields): boolean => {
    const tempErrors: ValidationErrors = {};

    if (!fields.firstName)
      tempErrors.firstName = "* Firstname should not be blank.";
    if (!fields.lastName)
      tempErrors.lastName = "* Lastname should not be blank.";
    if (!fields.email) tempErrors.email = "* Email should not be blank.";
    else if (!validateEmail(fields.email))
      tempErrors.email = "* Invalid email address.";
    if (!fields.password)
      tempErrors.password = "* Password should not be blank.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return { errors, validate };
};

export default useValidation;
