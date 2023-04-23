import { useState, createContext } from "react";
import { Default } from "./layout/Default";

export const IsbnContext = createContext();

function App() {
  const [isbn, setIsbn] = useState('');
  const [book, setBook] = useState([]);
  const [error, setError] = useState('');

  return (
    <IsbnContext.Provider value={{isbn, setIsbn, book, setBook, error, setError}}>
      <Default />
    </IsbnContext.Provider>
  );
}

export default App;