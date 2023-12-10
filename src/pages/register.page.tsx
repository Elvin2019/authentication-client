import { Player } from "@lottiefiles/react-lottie-player";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../components/input";
import { Link } from "react-router-dom";
import ActionButton from "../components/buttons";
import AuthRepository from "../repositories/auth.repository";
import { useState } from "react";
import { useAuth } from "../context/use-auth";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must have a minimum length of 8 characters")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      "Password must contain at least 1 letter, 1 number, and 1 special character"
    ),
});

const Register = () => {
  const { login, isLoggingIn } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async(values) => {
      setIsRegistering(true);
      try{
        await AuthRepository.register(values);
        alert("Registered successfully");
        await login(values.email, values.password);
      }
      catch(error:any){
        if(error.response.data.message){
          alert(error.response.data.message);
        }
      }
      setIsRegistering(false);
    },
  });

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/2 max-w-sm">
        <Player
          src="https://lottie.host/1a19785d-05b3-4199-af9c-1c859b20bda4/eXsZ5pMXEk.json"
          className="player"
          loop
          autoplay
        />
      </div>
      <div className="md:w-1/2 max-w-sm">
        <form onSubmit={formik.handleSubmit}>
          <InputField
            type="text"
            placeholder="Name"
            field={formik.getFieldProps("name")}
            formik={formik}
          />
          <InputField
            type="text"
            placeholder="Email Address"
            field={formik.getFieldProps("email")}
            formik={formik}
          />
          <InputField
            type="password"
            placeholder="Password"
            field={formik.getFieldProps("password")}
            formik={formik}
          />
          <div className="mt-4 text-center md:text-left">
            <ActionButton disabled={isRegistering || isLoggingIn}>Register</ActionButton>
            <Link
              to="/login"
              className="mt-2 text-blue-600 hover:underline text-sm "
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
