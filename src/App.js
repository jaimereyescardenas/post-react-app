import './vendor/bootstrap-4.5.0-dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainApp from './containers/MainApp/MainApp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainApp></MainApp>
      <Footer></Footer>
    </div>
  );
}

export default App;
