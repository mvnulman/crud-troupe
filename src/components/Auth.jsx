import { useState }from 'react'

const Auth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAuth = ({ isLoggedIn, setIsLoggedIn}) => {
        setIsLoggedIn(true);
    }

  return (
    <div>Auth</div>
  )
}

export default Auth
