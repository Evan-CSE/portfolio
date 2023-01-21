import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import MenuBar from './Components/MenuBar/MenuBar'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <MenuBar></MenuBar>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
