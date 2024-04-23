import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'
function App() {
  const [length, setLength] = useState(6)
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const passRef = useRef();

  // useCallback()
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += '1234567890';
    if (charAllow) str += '!@#$%^&*()_{}[]-/\';';

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [length, numAllowed, charAllow, setPassword]);

  const copyPassword = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  // useEffect()
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input 
            type="text" 
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            value={password}
            ref={passRef}
          />
          <button 
            onClick={copyPassword}
            className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input 
              type="range" 
              min={0}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value) }
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked = {numAllowed} 
              id='numIn'
              onChange={()=> setNumAllowed(prev => !prev)}
            />
            <label htmlFor="numIn">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked = {charAllow} 
              id='charIn'
              onChange={()=> setCharAllow(prev => !prev)}
            />
            <label htmlFor="charIn">Charecters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
