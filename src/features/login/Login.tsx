import { useState, type MouseEvent } from "react";
import { useForm } from "react-hook-form";
import apiCreateUser from "./api/useCreateUser";
import apiLogin from "./api/useLogin";
import { LoginButton } from "./components/LoginButton";
import { LoginLinks } from "./components/LoginLinks";
import { UserInput } from "./components/UserInput";
import { useNavigate } from "react-router-dom";

type FormValuesType = {
  email: string;
  password: string;
  verifyPassword: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState<boolean>(false);
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValuesType>();

  async function submitForm() {
    const { email, password } = getValues();
    const apiError = newUser
      ? await apiCreateUser(email, password)
      : await apiLogin(email, password);
    if (apiError) {
      setError(...apiError);
      return;
    } else {
      navigate("/");
    }
  }

  function toggleUser(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    reset();
    setNewUser((cur) => !cur);
  }

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col mx-auto my-auto items-center border-4 p-12 rounded-md bg-blue-600 text-white"
    >
      <div className="text-5xl font-[700] p-3">Welcome</div>
      <div className="p-6 flex flex-col gap-6">
        <UserInput
          dataName="email"
          labelName="Email"
          inputType="text"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <UserInput
          dataName="password"
          labelName="Password"
          inputType="password"
          error={errors.password?.message}
          {...register("password", {
            minLength: {
              value: 6,
              message: "Password should be atleast 6 characters",
            },
            maxLength: { value: 16, message: "Max password length is 16" },
          })}
        />
        {newUser && (
          <UserInput
            dataName="verifyPassword"
            labelName="Verify Password"
            inputType="password"
            error={errors.verifyPassword?.message}
            {...register("verifyPassword", {
              validate: () => {
                const { password, verifyPassword } = getValues();
                if (password !== verifyPassword) return "Password must match";
              },
            })}
          />
        )}
      </div>
      <LoginButton newUser={newUser} />
      <LoginLinks newUser={newUser} toggleUser={toggleUser} />
    </form>
  );
}
