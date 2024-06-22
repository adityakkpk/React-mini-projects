import { useRef, useState } from 'react'

function App() {
  const [otp, setOtp] = useState(["", "", "", ""])
  const inputRefs = useRef([]);

  const handleChange = (index, value) =>{
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    setOtp(newOtp);
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      inputRefs.current[index - 1].focus();
      setOtp(newOtp);
    }
  }

  return (
    <div className='flex flex-col mx-auto w-full h-[100vh] justify-center items-center gap-4 bg-orange-300'>
      <h2 className='font-bold text-xl'>OTP Verification</h2>
      <p>Enter the 4-digit OTP you received</p>
      <div className='flex gap-2'>
        {otp.map((digit, index) => {
          return (
            <input
              key={index}
              type="text"
              className='border w-10 h-10 rounded text-center'
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              autoFocus={index === 0}
              ref={(ref) => (inputRefs.current[index] = ref)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
