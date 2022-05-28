import logo from './logo.svg';
import './App.css';
import Footer from './Components/FooterFolder/Footer'
import Header from './Components/HeaderFolder/Header'

function App() {
  return (
    <div>

        {/* Hearder */}
        <div className="header">
          <Header />
        </div>

        {/* Footer */}
        <div className="footer pt-5">
          <Footer />
        </div>
    </div>
  );
}

export default App;
