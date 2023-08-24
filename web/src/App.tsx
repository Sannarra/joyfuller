import { useState } from "react";

function App() {
  const [id, setId] = useState(0);
  const [namesList, setNamesList] = useState<number[]>([]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          setId(value);
        }}
      />
      <button
        onClick={async () => {
          const response = await fetch(`http://localhost:5000/users/${id}`);
          const data = await response.json();
          setNamesList([...namesList, data.user_id]);
        }}
      >
        Test
      </button>
      {namesList.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </>
  );
}

export default App;
