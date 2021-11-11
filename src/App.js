import './App.css';
import Code from "./Code/Code";

function App() {
  return (
    <div className="app">
      <div className="flex">
        <div className="block">
          <Code isReflow={false}/>
        </div>
        <div className="block">
          <Code isReflow={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
