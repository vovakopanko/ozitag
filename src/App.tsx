import { Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import style from './App.module.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { getAPIAuthentification, getProfileAuthUser } from './components/services/api';
import { accessTokenType, dataType } from './components/type/type';

const App = () => {
  const [data, setData] = useState<dataType>({
    email: null,
    name: null,
    id: null
  })
  const [accessToken, setAccessToken] = useState<accessTokenType>(null)
  const [userData, setUserData] = useState("")
  const [userInfo, setUserInfo] = useState("")

  useEffect(() => {
    const loadAuthUserAsync = async () => {
      
      try {
        const dataUser = JSON.parse(userData)
        const userDataInfo = await getAPIAuthentification(1, dataUser.email, dataUser.password);
        if (userDataInfo) {
          sessionStorage.setItem('token', JSON.stringify(userDataInfo.data));
          setUserInfo(JSON.stringify(userDataInfo.data));
        }
      }
      catch (e) {
        console.log(e);
      }
    }

    if (userData)
      loadAuthUserAsync();

  }, [userData])

  useEffect(() => {
    if (userInfo) {
      const dataAuthUser = JSON.parse(userInfo);
      setAccessToken((dataAuthUser as any).accessToken);
    }

  }, [userInfo])

  useEffect(() => {
    if (accessToken) {
      const loadInfo = async () => {
        const datas = await getProfileAuthUser(accessToken);
        setData(datas)
      }
      loadInfo()
    }
  }, [accessToken])

  return (
    <Box className={style.app}>
      <Header data={data} setAccessToken={setAccessToken} accessToken={accessToken} setUserData={setUserData} setData={setData} />
      <Content data={data} setUserData={setUserData} />
      <Footer />
    </Box>
  );
}

export default App;
