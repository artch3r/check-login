import {
  Container, Card, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../slices/loginSlice.js';

const FormField = ({ type, formik, loginRef }) => (
  <Form.Group className="mb-2 position-relative d-flex flex-column">
    <Form.Label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Form.Label>
    <Form.Control
      name={type}
      id={type}
      type={type}
      autoComplete={type}
      value={formik[type]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      isInvalid={formik.errors[type] && formik.touched[type]}
      disabled={formik.isSubmitting}
      ref={type === 'login' ? loginRef : null}
    />
    <Form.Control.Feedback type="invalid" className="align-self-end" tooltip>{formik.errors[type]}</Form.Control.Feedback>
  </Form.Group>
);

const MainPage = () => {
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
    <Container className="vh-100 d-flex justify-content-center">
      <Card className="h-25 w-75 align-self-center bg-light">
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
      </Card>
    </Container>
  );
};

export default MainPage;
