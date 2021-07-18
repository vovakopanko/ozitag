import axios from "axios";

const baseURL = "https://tager.dev.ozitag.com";

type LoginData = {
    clientId: number | null;
    email: string | null;
    password: string | null;
    
}

type LoginResponseType = {
    data: LoginData
};

const instance= axios.create({
    baseURL:baseURL
})

export const getAPIAuthentification = async (clientId:number, email:string, password:string) => {
    const response = await instance.post<LoginResponseType>(
        `/api/auth/user`, {
        clientId,
        email,
        password,
      })
      return response.data;
};

export const getProfileAuthUser = async (accessToken:string) => {

    instance.defaults.headers.common['Authorization'] = "Bearer " + accessToken;

    const response = await instance.get(
        `/api/tager/user/profile`)
      return response.data.data;
};
