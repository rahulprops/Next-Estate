"use client";
import { useAuthModal } from "@/store/useAuthModal";
import Modal from "./Modal";
import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FcGoogle } from "react-icons/fc";

interface LoginValues {
  email: string;
  password: string;
}

type LoginErrors = Partial<Record<keyof LoginValues, string>>;

export default function LoginModal() {
  const { openRegister, isLoginOpen, closeLogin } = useAuthModal();

  const [values, setValues] = useState<LoginValues>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setValues((prv) => ({
      ...prv,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validate = () => {
    const newErrros: LoginErrors = {};

    // validate the email
    if (!values.email.trim()) {
      newErrros.email = "Email is required";
    } else if (!/^\S+\.\S+$/.test(values.email)) {
      newErrros.email = "Enter a valid email address";
    }
    //validate the password field
    if (!values.password.trim()) {
      newErrros.password = "Password is required ";
    } else if (values.password.length < 6) {
      newErrros.password = "password must be at least 6 characters ";
    }

    setErrors(newErrros);
    return Object.keys(newErrros).length === 0;
  };

  return (
    <Modal title="Login" onClose={closeLogin} isOpen={isLoginOpen}>
      {/* header */}
      <div className=" mb-6 space-y-1">
        <h2 className=" text-2xl font-semibold text-gray-900 ">
          {" "}
          Welcome back
        </h2>
        <p className=" text-sm text-gray-500">Login to your account</p>
      </div>
      <form className=" space-y-8">
        <Input
          id="login-email"
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          disabled={loading}
        />
        <Input
          id="login-password"
          name="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          disabled={loading}
        />
        <Button fullWidth type="submit" loading={loading}>
          Continue
        </Button>

       
      </form>

       {/* divider */}

        <div className=" relative my-6">
          <div className=" absolute inset-0 flex items-center">
            <div className=" w-full border-t border-gray-300" />
          </div>
          <div  className=" relative flex justify-center text-xs uppercase">
            <span className=" bg-white px-4 text-gray-500">Or</span>
          </div>
        </div>
        
        <Button variant="outline" fullWidth disabled={loading} icon={<FcGoogle size={22} />}>Continue with Google </Button>

        <p className=" text-gray-400 text-center text-sm mt-6">
            Don&apos;t have an account?{" "}
            <span className=" text-primary font-semibold cursor-pointer hover:underline" onClick={openRegister}>Register</span>
        </p>
    </Modal>
  );
}
