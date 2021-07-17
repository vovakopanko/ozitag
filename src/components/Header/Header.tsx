import { Box, Button } from '@material-ui/core';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import style from './Header.module.css';
import user from './../../images/user.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
        userName: {
            fontSize: 25,
        }
    }),
);

const Header: React.FC = () => {
    const [accessToken, setUserStatus] = useState(true)

    const onClickHandleSubmit = () => {
        setUserStatus(!accessToken)
    }

    const name = "12332";
    const email = "user@ozitag.com";
    const classes = useStyles();
    return (
        <Box className={style.authorisation}>
            <Box className={style.authorisation__login}>
                {accessToken ? <Box className={classes.userName} display="flex" flexDirection="row" alignItems="center" p={1} m={1}>
                    <Box >
                        {name}
                    </Box>
                    <Box>
                        <img src={user} alt='userPhoto' width="40px" height="40px" />
                    </Box>
                </Box>
                    :
                    <Box />}
            </Box>
            {accessToken ?
                <Box className={style.authorisation__block} display="flex" alignItems="center">
                    <NavLink to="/authorization">
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<ExitToAppIcon />}
                            onClick={() => { onClickHandleSubmit() }}
                        >
                            Exit
                        </Button>
                    </NavLink>
                </Box>
                :
                <Box />}
        </Box>
    );
}

export default Header;