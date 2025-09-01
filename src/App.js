import React, { useState } from "react";

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const data = [ONE, TWO, THREE, FOUR, FIVE, SIX];
function App() {
  return <Captcha />;
}

const Captcha = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const handleOpen = () => {
    setRandomNumber(Math.floor(Math.random() * 6) + 1)
    setIsOpen(isOpen => !isOpen);
  }

  const handleSelect = (index) => {
    if(index + 1 === randomNumber){
      alert("Doğru seçim");
      setIsOpen(false);
      setRandomNumber(null);
    }else{
      alert("Yanlış seçim yaptınız");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10">
      <button onClick={handleOpen } className="border-2 border-blue-500 shadow-xl py-2 px-8 bg-indigo-300 text-white font-bold hover:scale-105 transition duration-300">{isOpen ? "Kapat" : "Aç"}</button>
      {isOpen ? (
        <>
          <h2>{randomNumber} resim seçiniz</h2>
          <div className="flex justify-center items-center flex-wrap">
            {data.map((src, index) => (
              <img
                onClick={() => handleSelect(index)}
                key={index}
                src={src}
                width={200}
                height={150}
                className="border-2 hover:border-blue-500 trassition duration-300 "
              />
            ))}
          </div>
        </>
      ) : null}
    
    </div>
  );
};

export default App;
