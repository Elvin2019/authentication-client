import { Player } from "@lottiefiles/react-lottie-player";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../components/input";
import { Link } from "react-router-dom";
import ActionButton from "../components/buttons";
import { useAuth } from "../context/use-auth";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const { login, isLoggingIn } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/2 max-w-sm">
        <Player
          src="https://lottie.host/7488422f-6a80-44f0-8750-b4de45e4b933/x7hU80J7nz.json"
          className="player"
          loop
          autoplay
        />
      </div>
      <div className="md:w-1/2 max-w-sm">
        <form onSubmit={formik.handleSubmit}>
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
            <ActionButton disabled={isLoggingIn}>Login </ActionButton>
            <Link
              to="/register"
              className="mt-2 text-blue-600 hover:underline text-sm "
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
