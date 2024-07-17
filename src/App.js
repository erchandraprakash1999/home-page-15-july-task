import About from './About';
import About1 from './About1';
import './App.css';
import Contact from './Contact';
import Contact1 from './Contact1';

function App() {
  return (
    <div className="App">
      {/* <Contact />
      <About /> */}
      <section>
        <Contact1 />
      </section>
      <section>
        <About1></About1>
      </section>

    </div>
  );
}

export default App;
