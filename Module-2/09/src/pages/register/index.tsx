import { Box, Container } from "@chakra-ui/react";
// import axios from "axios";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import instance from "../../api/api_instance";
import { FormValues, FormProps } from "./types";
import InnerForm from "./components/innerForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  age: Yup.number()
    .positive("Age must be greater than zero")
    .required("Age is required"),
});

export default function Register() {
  const navigate = useNavigate();

  const register = async (props: FormValues) => {
    const { name, email, password, age } = props;
    await instance.post("users", {
      name,
      email,
      password,
      age,
    });
  };

  const MyForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      name: props.initialName || "",
      email: props.initialEmail || "",
      password: props.initialPassword || "",
      age: props.initialAge || 0,
    }),
    validationSchema: RegisterSchema,
    enableReinitialize: true,
    handleSubmit({ name, email, password, age }: FormValues) {
      register({ name, email, password, age });
      toast.success("register success", {
        position: "top-left",
      });
      setTimeout(() => navigate("/"), 1000);
    },
  })(InnerForm);

  return (
    <Box
      sx={{
        marginTop: "5rem",
      }}
    >
      <Container>
        <MyForm />
        <ToastContainer />
      </Container>
    </Box>
  );
}
