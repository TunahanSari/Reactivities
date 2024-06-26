import { ErrorMessage, Form, Formik } from "formik";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button, Header } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import * as Yup from 'yup';
import ValidationErrors from "../errors/ValidationErrors";

const RegisterForm = () => {
    const { userStore } = useStore();
    return (
        <Formik
            initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
            onSubmit={
                (values, { setErrors, setSubmitting }) => {
                    userStore.register(values)
                        .catch(error => setErrors({error}))
                        .finally(() => setSubmitting(false))
                }
            }
            validationSchema={Yup.object({
                displayName: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required(),
                password: Yup.string().required(),
            })}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as="h2" content="Login to Reactivities" color="teal" textAlign="center" />
                    <MyTextInput placeholder="Display Name" name="displayName" />
                    <MyTextInput placeholder="Username" name="username" />
                    <MyTextInput placeholder="Email" name="email" />
                    <MyTextInput placeholder="Password" name="password" type="password" />
                    <ErrorMessage
                        name="error"
                        render={() => (
                            <ValidationErrors errors={errors.error}/>
                        )}
                    />
                    <Button 
                        disabled={!isValid || !dirty || isSubmitting }
                        loading={isSubmitting} 
                        positive 
                        content="register" 
                        type="submit" 
                        fluid />
                </Form>
            )}
        </Formik>
    );
}

export default observer(RegisterForm);