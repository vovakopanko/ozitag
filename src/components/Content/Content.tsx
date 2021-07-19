import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import { ContentPropsType } from "../type/type";
import style from "./Content.module.css";

const Content: React.FC<ContentPropsType> = ({ data, setUserData }) => {
    return (
        <Box className={style.blockmodelt}>
            <Switch>
                {/* <Route path="/authorization" render={() => <Login setUserData={setUserData} />} /> */}
                <Route path="/profile" render={() => <Profile data={data} />} />
                <Route exact path="/" render={data.email ? () => <Profile data={data} /> : () => <Login setUserData={setUserData} />} />
            </Switch>
        </Box>
    );
}

export default Content;