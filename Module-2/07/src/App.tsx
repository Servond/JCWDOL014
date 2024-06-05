import { useState, useEffect } from "react";
import Register from "./register";
import axios from "axios";

interface ISuperheroes {
  id: string;
  name: string;
  color: string;
}

function App() {
  const [superheroes, setSuperheroes] = useState<ISuperheroes[]>([]);
  // const [superhero, setSuperhero] = useState<ISuperheroes>();

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8081/superheroes");
    console.log(res);
    setSuperheroes(res.data);

    // // fetch
    // const res = await fetch("http://localhost:8081/superheroes", {
    //   method: "POST"
    // });
    // console.log(res);
    // const jsonParse = await res.json();
    // setSuperheroes(jsonParse);
  };

  const postData = async () => {
    const checkDups = superheroes.filter((i) => i.name == "Iron Man");
    if (checkDups.length > 0) {
      alert("data sudah ada");
    } else {
      const res = await axios.post("http://localhost:8081/superheroes", {
        name: "Iron Man",
      });
      console.log(res);
    }
  };

  const updateData = async () => {
    // const res = await axios.put("http://localhost:8081/superheroes/1", {
    //   color: "Black",
    // });
    const res = await axios.patch("http://localhost:8081/superheroes/1", {
      color: "Black",
    });
    console.log(res);
  };

  const deleteData = async () => {
    const res = await axios.delete("http://localhost:8081/superheroes/bb92");
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>SuperHeroes</h1>
        {/* <div>{superhero?.name}</div> */}
        {superheroes.length > 0 &&
          superheroes.map((item) => (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.color}</div>
            </div>
          ))}
      </div>
      <button onClick={postData}>Insert Data</button>
      <button onClick={updateData}>Update Data</button>
      <button onClick={deleteData}>Delete Data</button>
      <hr />
      <Register />
    </>
  );
}

export default App;
