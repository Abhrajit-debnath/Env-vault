import AuthCard from "../components/Auth/AuthCard"
import LoginForm from "../components/Auth/LoginForm"


const LoginPage = () => {
  return (
<AuthCard title="Welcome back" subtitle= "Login to access your secure vault">
    <LoginForm/>
</AuthCard>
  )
}

export default LoginPage