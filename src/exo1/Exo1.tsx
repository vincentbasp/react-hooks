import { FormEvent, useState } from "react";

export const Exo1 = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log({ email, password })
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          id="email"
        />
        <label htmlFor="email">Password</label>
        <input 
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          id="password"
        />
        <button type="submit">Submit</button>
      </form>
  );
}