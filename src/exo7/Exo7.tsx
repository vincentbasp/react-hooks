import { useState } from 'react'

export const Exo7 = () => {
    const [name, setName] = useState('John')
    const [number, setNumber] = useState(0)
    console.log('render')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.getAttribute('name') === 'name') {
            setName(e.target.value)
        }
        if(e.target.getAttribute('number') === 'number') {
            setNumber(parseInt(e.target.value))
        }
    }

    const encodedName = number.toString(2)

    return (
        <>
            <label htmlFor="name">Name: </label>
            <input name='name' type='text' id='name' onChange={onChange} />
            <label htmlFor="number">Number: </label>
            <input name='number' type='number' id='number' onChange={onChange} />
            <span>{encodedName}</span>
        </>
    )
}