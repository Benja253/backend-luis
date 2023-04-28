import { useForm } from "react-hook-form";
import './login.css'

const Login = () => {

  const { handleSubmit, reset, register } = useForm()

  const submit = data => {
    console.log(data)
    reset({
      email: '',
      password: ''
    })
  }

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <div className="login__section">
          <label className="login__label" htmlFor="email">Email</label>
          <input className="login__input" {...register('email')} type="email" id="email" />
        </div>
        <div className="login__section">
          <label className="login__label" htmlFor="password">Password</label>
          <input className="login__input" {...register('password')} type="password" id="password" />
        </div>
        <button className="login__btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
