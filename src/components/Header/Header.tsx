import { Box, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import style from './Header.module.css';
import user from './../../images/user.png';
import { HeaderPropsType } from '../type/type';

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

const Header: React.FC<HeaderPropsType> = ({ data, setAccessToken, accessToken }) => {

    const onClickRemoveItems = () => {
        sessionStorage.removeItem('token')
        setAccessToken("")
    }

    const email = data.email;
    const classes = useStyles();
    return (
        <Box className={style.authorisation}>
            <Box className={style.authorisation__login}>
                {accessToken ?
                    <Box className={classes.userName} display="flex" flexDirection="row" alignItems="center" p={1} m={1}>
                        <Box >
                            {email}
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
                            onClick={() => onClickRemoveItems()}
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