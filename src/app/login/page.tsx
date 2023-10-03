export default function Login() {
  return (
    <div className="flex flex-col gap-2">
      <form className="flex flex-col" action="/auth/login" method="post">
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button>Sign In</button>
        <button formAction="/auth/sign-up">Sign Up</button>
      </form>
    </div>
  );
}
