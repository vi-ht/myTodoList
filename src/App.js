import logo from './logo.svg';
import './App.css';
import MainTabPanel from './main-compoment/MainTabPanel';
import { Container } from '@chakra-ui/react'
// document.getElementsByTagName('body').style.backgroundColor='black'
function App() {
  return (
    <Container w='100%' h='100vh' maxW='100%'>
      <MainTabPanel/>
    </Container>
  );
}

export default App;
