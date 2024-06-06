import { Box, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { FormikProps, Form, Field } from "formik";
import { FormValues } from "../types";

export default function InnerForm(props: FormikProps<FormValues>) {
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    props;

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="name">Name :</FormLabel>
        <Field
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
        {touched.name && errors.name && <Box as="span">{errors.name}</Box>}
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email :</FormLabel>
        <Field
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <Box as="span">{errors.email}</Box>}
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password :</FormLabel>
        <Field
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
        />
        {touched.password && errors.password && (
          <Box as="span">{errors.password}</Box>
        )}
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="age">Age :</FormLabel>
        <Field
          name="age"
          type="text"
          onChange={handleChange}
          value={values.age}
        />
        {touched.age && errors.age && <Box as="span">{errors.age}</Box>}
      </FormControl>
      <Button
        sx={{
          marginTop: "15px",
        }}
        type="submit"
        disabled={isSubmitting}
      >
        Register
      </Button>
    </Form>
  );
}
