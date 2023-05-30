import { useState } from "react";
import "./App.css";

const codeOfDuty = [
  { name: "Asem", from: "Syria" },
  { name: "Pelayo", from: "ESSPAIN" },
  { name: "Tony", from: "SwagVille" },
  { name: "Maxime", from: "Lies About Her Age DAM" },
  { name: "Vincent", from: "Berlin" },
  { name: "Kira", from: "Mountains" },
  { name: "Guichermo", from: "ESSPAIN" },
  { name: "Daiane", from: "Braziu" },
  { name: "Tiffany", from: "Taiwan" },
  { name: "Nuno", from: "Puerto" },
  { name: "Nico", from: "Parijs" },
  { name: "Diana", from: "Parijs" },
  { name: "Joao", from: "Need For Speed Peniche" },
  { name: "Palash", from: "UAE" },
  { name: "Elvan", from: "Gluten Tag" },
  { name: "Abhijeet", from: "Parijs" },
  { name: "Soumia", from: "Morocco" },
  { name: "Aderemi", from: "Berlin" },
  { name: "Nana", from: "7 languages spokenville" },
  {
    name: "Jackson",
    from: "Drawing smilies instead of answering FilipeStrasse",
  },
  {
    name: "Dani",
    from: "ESSPAIN",
  },
  {
    name: "Filipe",
    from: "I bless the rains down in AAAAFRICAAAA",
  },
];

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <input
        onChange={(event) => {
          setInput(event.target.value); // setInput state that is updating the default value, we're targetting the event.target.value because we want to have the value of what is typed into the input
        }}
      />

      {/* {codeOfDuty
        .filter((student) => {
          return student.name.toLowerCase().includes(input.toLowerCase());
        })
        .map((student) => {
          return (
            <div key={student.name}>
              {student.name}, {student.from}
            </div>
          );
        })} */}

      {codeOfDuty
        .filter((student) => {
          return student.from.toLowerCase().includes(input.toLowerCase()); // we're using the input state to use the words that are typed into the search input
        })
        .map((student) => {
          return (
            <div key={student.name}>
              {student.name} - {student.from}
            </div>
          );
        })}
    </div>
  );
}

export default App;
