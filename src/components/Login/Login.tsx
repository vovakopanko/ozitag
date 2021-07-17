import { Box, Button } from '@material-ui/core';
import style from './Login.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

type LoginType = {
    name: string;
    email: string;
}

const Login: React.FC<LoginType> = () => {
    const [userData, setUserData] = useState([])
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")


    const onHandleClickUserLogin = (login: string) => {
        setLogin(login)
    }

    const onHandleClickUserPassword = (password: string) => {
        setPassword(password)
    }

    return <Box className={style.login}>
        <Box>
            <h1>REGISTRATION:</h1>
        </Box>
        <Box>
            <input type="text" placeholder="write your login" onChange={(e) => onHandleClickUserLogin(e.target.value)}></input>
        </Box>
        <Box>
            <input type="password" onChange={(e) => onHandleClickUserPassword(e.target.value)}></input>
        </Box>
        <Box>
            <Button variant="outlined">Login</Button>
            <NavLink to="/profile">
                <Button variant="outlined" color="primary">
                    Registration
                </Button>
            </NavLink>
            <Box>
                <b>Test User Info:</b>
                <Box>"email": "user@ozitag.com",</Box>
                <Box>"password": "user"</Box>
            </Box>

        </Box>
    </Box>
}

export default Login;