import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ActionButton from 'components/atoms/ActionButton';
import "./styles.scss";
 
 
const UserForm = ({username, email, password, submit}) => {
    const schema = Yup.object().shape({
        username: Yup.string().required('Username es requerido'),
        email: Yup.string().email('Email incorrecto').required('Username es requerido'),
        password: Yup.string().required('Password es requerido'),
    });

    return <div>
        <Formik
            initialValues={{
                username: username,
                email: email,
                password: '',
            }}
            validationSchema={schema}
            onSubmit={values => {
                submit(values);
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
                    <Field name="username" disabled/>
                    {errors.username && touched.username ? (
                        <div className="input-error">{errors.username}</div>
                        ) : null}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <Field name="email" disabled/>
                    {errors.email && touched.email ? (
                        <div className="input-error">{errors.email}</div>
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

export default UserForm;