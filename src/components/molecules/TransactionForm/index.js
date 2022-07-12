import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ActionButton from 'components/atoms/ActionButton';
import "./styles.scss";
 
 
const TransactionForm = ({submit, origins, destinations}) => {
    const schema = Yup.object().shape({
        amount: Yup.number()
                    .typeError('El monto debe ser un número')
                    .required('El monto es requerido').positive('El monto debe ser positivo mayor a 0'),
        origin_id: Yup.number().required('La cuenta origen es requerida'),
        destination_id: Yup.number().required('La cuenta destino es requerida'),
    });

    return <div>
        <Formik
        initialValues={{
            amount: '',
            origin_id: '',
            destination_id: '',
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
                    <label>Monto</label>
                    <Field name="amount" />
                    {errors.amount && touched.amount ? (
                        <div className="input-error">{errors.amount}</div>
                        ) : null}
                </div>
                <div className="form-group">
                    <label>Cuenta Origin</label>
                    <Field name="origin_id" as="select">
                        <option disabled value="">Selecciona una Cuenta Origen</option>
                        {origins && origins.map(origin => (
                            <option value={origin.id}>{origin.alias} - {origin.owner.username} - {origin.currency.name}</option>
                        ))}
                    </Field>
                    {errors.origin_id && touched.origin_id ? (
                        <div className="input-error">{errors.origin_id}</div>
                        ) : null}
                </div>
                <div className="form-group">
                    <label>Cuenta Destino</label>
                    <Field name="destination_id" as="select">
                        <option disabled value="">Selecciona una Cuenta Destino</option>
                        {destinations && destinations.map(destination => (
                            <option value={destination.id}>{destination.alias} - {destination.owner.username} - {destination.currency.name}</option>
                        ))}
                    </Field>
                    {errors.destination_id && touched.destination_id ? (
                        <div className="input-error">{errors.destination_id}</div>
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

export default TransactionForm;