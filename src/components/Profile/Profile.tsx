import { Box } from "@material-ui/core";
import { ProfilePropsType } from "../type/type";

const Profile: React.FC<ProfilePropsType> = ({data}) => {
    return (
        <Box>
            <Box>Name: {data.name}</Box>
            <Box>Email: {data.email}</Box>
            <Box> <img src="https://ozitag.com/logo.svg" alt={"photoUser"}/></Box>
        </Box>
    )
}

export default Profile;