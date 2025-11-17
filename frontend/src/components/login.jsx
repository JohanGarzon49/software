import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const Login = () => {
const [mensaje, setMensaje] = useState('');
const loginSchema = Yup.object({
email: Yup.string().email('Email inválido').required('El email es obligatorio'),
password: Yup.string().min(6,'La contraseña debe tener al menos 6 caracteres').required('La
contraseña es obligatoria'),
});
const manejarSubmit = (values) => {
if (values.email === 'usuario@ejemplo.com' && values.password === '123456') {
setMensaje('Login exitoso');
} else {
setMensaje('Credenciales incorrectas');
}
};
return (
<div>
<Formik initialValues={{ email: '', password: '' }} validationSchema={loginSchema}
onSubmit={manejarSubmit}>
<Form>
<label>Email:</label>
<Field type="email" name="email" />
<ErrorMessage name="email" />
<label>Contraseña:</label>
<Field type="password" name="password" />
<ErrorMessage name="password" />
<button type="submit">Login</button>
</Form>
</Formik>
{mensaje && <p>{mensaje}</p>}
</div>
);
};
export default Login;
