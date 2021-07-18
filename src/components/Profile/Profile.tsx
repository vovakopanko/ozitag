import { Box } from "@material-ui/core";
import { ProfilePropsType } from "../type/type";
import style from "./Profile.module.css"

const Profile: React.FC<ProfilePropsType> = ({data}) => {
    return (
        <Box className={style.profile__block}>
            <Box className={style.block}>
            <Box><img src="https://ozitag.com/logo.svg" alt={"photoUser"}/></Box>
            <Box><b>Name: </b> {data.name}</Box>
            <Box><b>Email: </b>{data.email}</Box>
            </Box>
        </Box>
    )
}

export default Profile;