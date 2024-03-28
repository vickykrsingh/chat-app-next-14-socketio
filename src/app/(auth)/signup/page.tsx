import AuthForm from "@/components/ui/ui-component/auth-form"

function Signup() {
  return (
    <AuthForm heading={"Signup"} subheading={"Signup to start chat with new friends."} link={"/login"} linkHeading={"Login"} linkSubheading={"Already have an account ? "} />
  )
}

export default Signup