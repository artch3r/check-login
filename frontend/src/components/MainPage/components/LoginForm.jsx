import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../slices/loginSlice.js';
import FormField from './FormField.jsx';

const LoginForm = () => {
  const loginRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      login: yup.string().required('required field').matches(/^developer21$/, 'incorrect login').trim(),
      password: yup.string().required('required field').matches(/^123456$/, 'incorrect password').trim(),
    }),
    onSubmit: ({ login }) => {
      dispatch(setLogin(login));
    },
    validateOnMount: true,
  });

  const fields = ['login', 'password'];

  return (
    <Form className="w-75 mx-auto my-auto" onSubmit={formik.handleSubmit}>
      {fields.map((field) => (
        <FormField
          type={field}
          formik={formik}
          loginRef={loginRef}
          key={field}
        />
      ))}
      <Button className="mt-1" type="submit" disabled={Object.values(formik.errors).length > 0}>Confirm</Button>
    </Form>
  );
};

export default LoginForm;
