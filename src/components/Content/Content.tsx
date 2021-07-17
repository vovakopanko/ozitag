import { Box } from "@material-ui/core";
import { Route, Switch  } from "react-router-dom";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import style from "./Content.module.css";

const Content:React.FC = () => {
    let name = "Vova"
    let email = "vovakopanko"
    return (
        <Box className={style.blockmodelt}>
            <Switch>
                <Route path="/authorization" render={() => <Login name={name} email={email}/>}/>
                <Route path="/profile" render={() => <Profile />} />
            </Switch>
        </Box>
    );
}

export default Content;