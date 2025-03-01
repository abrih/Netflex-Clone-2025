import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Banner from "./Components/Banner/Banner"
import './App.css'
import RowList from "./Components/Rows/RowList/RowList";

function App() {
  

  return (
    <div className="App">
      <Header/>
     
      <Banner/>
      <RowList/>
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default App
