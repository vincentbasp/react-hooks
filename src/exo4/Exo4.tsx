import { useEffect, useState } from "react";

export const Exo4 = () => {
    const [age, setAge] = useState<string>('0')
    const [name, setName] = useState<string>('')
    const [darkMode, setDarkMode] = useState<boolean>(false)

    const person = [age, name]

    useEffect(() => {
      console.log(person)
    }, [person])

    return (
      <div style={{ backgroundColor: darkMode ? "#333" : "#FFF" }}>
        Age : {" "}
        <input 
          value={`${age}`}
          type='number'
          onChange={e => setAge(e.target.value)}
        />
        Name : {" "}
        <input 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        Dark mode : {" "}
        <input 
          value={`${darkMode}`}
          type="checkbox"
          onChange={e => setDarkMode(e.target.checked)}
        />
      </div>
    );
  }