import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ActionButton from 'components/atoms/ActionButton';
import "./styles.scss";
 
const LoginForm = ({submit}) => {
    const schema = Yup.object().shape({
        username: Yup.string().required('El username es requerido'),
        password: Yup.string().required('La password es requerida'),
    });

    return <div>
        <Formik
        initialValues={{
            username: '',
            password: '',
        }}
        validationSchema={schema}
        onSubmit={values => {
            submit(values.username, values.password);
        }}
        >
        {({
          values,
          handleReset,
          handleSubmit,
          handleBlur,
          errors,
          touched,
          handleChange,
          submitForm,
          isValid,
        }) => (
            <Form className="basic-form">
                <div className="form-group">
                    <label>Username</label>
                    <Field name="username" />
                    {errors.username && touched.username ? (
                        <div className="input-error">{errors.username}</div>
                        ) : null}
                    </div>
                <div className="form-group">
                    <label>Password</label>
                    <Field name="password" type="password"/>
                    {errors.password && touched.password ? (
                        <div className="input-error">{errors.password}</div>
                        ) : null}
                </div>
                <div className="form-group">
                    <ActionButton type="submit" legend="Enviar" onClick={submitForm} />
                </div>
            </Form>
        )}
        </Formik>
    </div>
};

export default LoginForm;