import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ActionButton from 'components/atoms/ActionButton';
import "./styles.scss";
 
 
const CurrencyForm = ({submit, origins, destinations}) => {
    const schema = Yup.object().shape({
        code: Yup.string()
                    .required('El código es requerido').max(10, 'El código es requerido no debe ser mayor a 10 carácteres'),
        name: Yup.string().required('El nombre es requerido').max(100, 'El nombre es requerido no debe ser mayor a 10 carácteres'),
        symbol: Yup.string().required('El símbolo es requerido').max(5, 'El símbolo es requerido no debe ser mayor a 10 carácteres'),
    });

    return <div>
        <Formik
        initialValues={{
            code: '',
            name: '',
            symbol: '',
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
                    <label>Código</label>
                    <Field name="code" />
                    {errors.code && touched.code ? (
                        <div className="input-error">{errors.code}</div>
                        ) : null}
                </div>
                <div className="form-group">
                    <label>Nombre</label>
                    <Field name="name" />
                    {errors.name && touched.name ? (
                        <div className="input-error">{errors.name}</div>
                        ) : null}
                </div>
                <div className="form-group">
                    <label>Símbolo</label>
                    <Field name="symbol" />
                    {errors.symbol && touched.symbol ? (
                        <div className="input-error">{errors.symbol}</div>
                        ) : null}
                </div>
                <div className="form-group">
                    <ActionButton type="submit" legend="Enviar" onClick={submitForm}></ActionButton>
                </div>
            </Form>
        )}
        </Formik>
    </div>
};

export default CurrencyForm;