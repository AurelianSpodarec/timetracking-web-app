import { serverLogin } from "@/actions/loginServerAction";
import { signIn } from "@/auth";

function AuthLogin() {

  return (
    <div className="h-full">
      <form
        action={async () => {
          'use server'
          await serverLogin({
            email: "admin@example.com",
            password: "QWEasd123"
          })
        }}
      >
        <label>
          Email
          <input readOnly name="identifier" type="email" value="dmin@example.com" />
        </label>
        <label>
          Password
          <input readOnly name="pwd" type="password" value="QWEasd123" />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default AuthLogin;
