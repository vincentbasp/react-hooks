import React, { useMemo, useState} from 'react'

interface Props {
  onClick: () => void
}
const Button = React.memo(({onClick}: Props) => {
    console.log('render')
    return <button onClick={onClick}>Click</button>
})

export const Exo8 = () => {
    const [count, setCount] = useState(0)
    const handleClick = useMemo(() => {
        return () => alert('bonjour')
    },[])
    return (
        <>
            <Button onClick={handleClick}/>
            <button onClick={() => setCount(c => c+1)}>Incrémenter {count}</button>
        </>
    )
}