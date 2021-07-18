import { Box, Button } from '@material-ui/core';
import style from './Login.module.css';
import { useFormik } from 'formik';
import { LoginType } from '../type/type';

const Login: React.FC<LoginType> = ({ setUserData }) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(`submit ${values}`)
            setUserData(JSON.stringify(values, null, 2))
        },
    })

    return <Box className={style.login}>
        <Box className={style.login__nameBlock}>
            <b >REGISTRATION:</b>
        </Box>

        <form onSubmit={formik.handleSubmit} className={style.login__form}>
            <Box>
                <b><label htmlFor="email">Email Address</label></b>
            </Box>
            <Box>
                <input id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email} />
            </Box>
            <Box>
                <b><label htmlFor="password">Password</label></b>
            </Box>
            <Box>
                <input id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password} />
            </Box>
            <Box className={style.login__button}>
                <Button variant="outlined" type="submit" >Submit</Button>
            </Box>


        </form>

        <Box >
            <b>Test User Info:</b>
            <Box>"email": "user@ozitag.com",</Box>
            <Box>"password": "user"</Box>
        </Box>
    </Box>
}

export default Login;