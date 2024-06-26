import { useState } from "react";

const Home = ({ para, setPara }) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const letters_uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [letterCase, setCase] = useState(true);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const special_keys = [
    "Shift",
    "Tab",
    "Ctrl",
    "Alt",
    "AltGr",
    "Esc",
    "Enter",
    "Backspace",
    "CapsLock",
    "Space",
    "Insert",
    "Delete",
    "Home",
    "End",
    "PageUp",
    "PageDown",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "NumLock",
    "ScrollLock",
    "PrintScreen",
    "Pause",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "Windows",
    "Menu",
  ];
 const [ShiftKey, setShiftKey] = useState()
  const checkKeys = (item) => {
    item === "CapsLock" ? (letterCase ? setCase(false) : setCase(true)) : null;

    // item === "Backspace"
    //   ? setPara(para.slice(0, 1))
    //   : null;
    item === 'Shift' ?setCase(false) :null
  };
  
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-10 gap-2">
        {letterCase
          ? letters.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg bg-green-300 hover:bg-green-600 "
                onClick={() => {
                  setPara((para) => [...para, item]);
                }}
              >
                <p>{item}</p>
              </div>
            ))
          : letters_uppercase.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg bg-green-300 hover:bg-green-600 "
                onClick={() => {
                  setPara((para) => [...para, item]);
                }}
              >
                <p>{item}</p>
              </div>
            ))}
      </div>
      <div className="grid grid-cols-10 gap-2">
        {numbers.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg bg-red-300 hover:bg-red-600 "
            onClick={() => {
              setPara((para) => [...para, item]);
            }}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-10 gap-2">
        {special_keys.map((item, index) => (
          <div
            onClick={() => checkKeys(item)}
            key={index}
            className="border rounded-lg bg-blue-300 hover:bg-blue-600 "
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
