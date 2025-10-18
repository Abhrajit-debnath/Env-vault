import AuthCard from "../components/Auth/AuthCard"
import SignUpForm from "../components/Auth/SignUpForm"


const SignupPage = () => {
  return (
    <AuthCard title="Create Account" subtitle="Get started withsecure credential management">
        <SignUpForm/>
    </AuthCard>
  )
}

export default SignupPage