import { Box } from '@material-ui/core';
import style from './App.module.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Box className={style.app}>
      <Header />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
