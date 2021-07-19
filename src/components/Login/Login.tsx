import { Box, Button } from '@material-ui/core';
import style from './Login.module.css';
import { useFormik } from 'formik';
import { LoginType } from '../type/type';

// type ErrorFormType = {
//     email: string | null;
//     password: string | null
// }

const Login: React.FC<LoginType> = ({ setUserData }) => {

    const formik = useFormik({
        initialValues: { 
            email: '',
            password: '',
        },
        onSubmit: values => {
            // console.log(`submit ${values}`)
            setUserData(JSON.stringify(values, null, 2))
        },
        // validate: values => {
        //     const errors: ErrorFormType = {
        //         email: null,
        //         password: null
        //     }

        //     if (!values.email) {
        //         errors.email = 'Required field'
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address';
        //     }

        //     if (!values.password) {
        //         errors.password = 'Required field'
        //     }

        //     return errors
        // }
    })

    return <Box className={style.login}>
        <Box className={style.login__nameBlock}>
            <b >LOGIN:</b>
        </Box>

        <form onSubmit={formik.handleSubmit} className={style.login__form}>
            <Box>
                <b><label htmlFor="email">Email Address</label></b>
            </Box>
            <Box>
                <input id="email"
                    name="email"
                    type="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email} />
            </Box>
            {/* {formik.touched.email && formik.errors.email ? <Box color="red">{formik.errors.email}</Box> : null} */}
            <Box>
                <b><label htmlFor="password">Password</label></b>
            </Box>
            <Box>
                <input id="password"
                    name="password"
                    type="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password} />
            </Box>
            {/* {formik.touched.password && formik.errors.password ? <Box color="red">{formik.errors.password}</Box> : null} */}
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