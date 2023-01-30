import { useEffect, useState } from "react";

export const Exo3 = () => {
    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [fullname, setFullname] = useState<string>('')

    useEffect(() => {
      setFullname(`${firstname} ${lastname}`)
    }, [firstname, lastname])

    return (
      <>
        <input 
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
        />
        <input 
          value={lastname}
          onChange={e => setLastname(e.target.value)}
        />
        {fullname}
      </>
    );
  }