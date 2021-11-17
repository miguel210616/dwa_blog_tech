import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleSumCount = (e) => {
    console.log("evento", e);
    setCount(count + 1);
  };

  const handleLessCount = () => setCount(count - 1);

  useEffect(() => {
    console.log("useEffect");
    document.title = `Click en la pagina ${count}`;
  }, [count]);

  return (
    <div>
      <Navbar />
      <h1>Mi primera pagina con React - by Miguel Inga</h1>
      <h2>Numero de click {count}</h2>
      <button onClick={handleSumCount}>Sumar</button>
      <button onClick={(e) => handleSumCount(e)}>Sumar v2</button>
      <button onClick={handleLessCount}>Restar</button>
    </div>
  );
};

export default Home;