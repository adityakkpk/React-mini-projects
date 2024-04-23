# Password Generator

Create a password generator using React + Vite.

## Steps I followed to Build this Project:

**Step 1 :** Create some States as per requirement using useState() for the values like length, Number, Characters etc.

**Step 2 :** Create a password generator function. And wrap it into useCallback() for the cashing/optimization of the function definition between re-renders.
   - 1. take a variable 'pass'
   - 2. take another variable 'str' and store all the alphabets capital and small as string.
   - 3. if numbers and characters are allowed then add some numbers and characters to 'str'.
   - 4. Generate the password string using a for loop and add it to the variable 'pass'.

**Step 3 :** Create the structure of your password generator:
   - Input field with value=password and with readOnly property.
   - Copy button
   - Range input for the length of password
   - chaeckbox for numbers allowed or not
   - chaeckbox for charecters allowed or not

**Step 4 :** call passwordGenerator method inside useEffect hook and give dependency as per the need.

**Step 5:** make copy button interactive and use the useRef hook to refer the copy button and generated password.