import { Form } from 'react-bootstrap';

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

export default FormField;
