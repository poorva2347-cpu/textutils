import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Textutils" about="About us" />
      {/* <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" label="Convert to Uppercase" />
      </div> */}
      <About></About>
    </>
  );
}

export default App;
