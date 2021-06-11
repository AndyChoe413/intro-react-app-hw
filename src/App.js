
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"
import Body from "./components/Body/Body"
import Square from "./components/Square/Square"
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: "flex"}}>
          <Sidebar />
          <Body />
      </div>

      <Footer/>
    </div>
  );
}

export default App;
