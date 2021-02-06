import Header from './components/header/header.component.jsx';
import Body from './components/body/body.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import Slider from './components/body/Slider';
import './App.css';

function App() {
  return (
    <div className="App" data-testid="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
