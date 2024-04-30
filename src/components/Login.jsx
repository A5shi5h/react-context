import React ,{useState , useContext} from 'react'
import UserContext from '../context/UserContext' 

const Login = () => {

  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e)=> {
     e.preventDefault()
     setUser({userName,password})
  }
    
  return (
    <>
      <h1>Login</h1>
      <input type='text' 
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder='enter username'/>
      <input type='text' 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='enter password'/>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login
