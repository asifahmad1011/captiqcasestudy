import React, {useEffect} from 'react';
import charactersController  from "./controllers/charactersController";
import Card from "./components/cards";

function App() {

  useEffect(() => {
    (async () => {
      await charactersController.fetchDataFromURL();
    })();
  }, []);

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
