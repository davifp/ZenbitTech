import * as Yup from "yup";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import {
  Button,
  Container,
  Input,
  Label,
  StyledErrorMessage,
  Success,
} from "./styles";
import { api } from "../../services/api";
import { useState } from "react";
import { changeValue } from "../../Redux/name";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

interface Data {
  name: string;
  email: string;
  message: string;
}

export const Form: React.FC = () => {
  const [dataError, setDataError] = useState();
  const [isSuccess, setIsSuccess] = useState(false);

  const name = useAppSelector((state) => state.name.value);
  const dispatch = useAppDispatch();

  const handleSubmit = async (data: Data, resetForm: any) => {
    console.log(data);
    try {
      const response = await api.post("message", data);
      resetForm();
      setIsSuccess(true);
      dispatch(changeValue(data.name));
    } catch (err: any) {
      setDataError(err);
    }
  };

  const formSchema = Yup.object({
    name: Yup.string().min(3, "Must have at least 3 characteres").required(),
    email: Yup.string().email().required("E-mail is required"),
    message: Yup.string()
      .min(10)
      .max(500, `Can't exceed 500 characters`)
      .required(),
  });

  return (
    <Container>
      {!isSuccess ? (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={formSchema}
          onSubmit={(data, { resetForm }) => {
            handleSubmit(data, resetForm);
          }}
        >
          {({ errors, touched, isSubmitting, handleSubmit, isValid }) => (
            <FormikForm name="contact" method="post" onSubmit={handleSubmit}>
              <Label htmlFor="reachout">Reach out to us!</Label>
              <Input
                type="text"
                name="name"
                autoCorrect="off"
                autoComplete="name"
                placeholder="Your name*"
                valid={touched.name && !errors.name}
                error={touched.name && errors.name}
              />
              {errors.name && touched.name && (
                <StyledErrorMessage>{errors.name}</StyledErrorMessage>
              )}
              <Input
                type="email"
                name="email"
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="email"
                placeholder="Your email*"
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
              />
              <ErrorMessage name="email">
                {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
              </ErrorMessage>
              <Input
                component="textarea"
                name="message"
                autoCapitalize="on"
                autoCorrect="off"
                autoComplete="off"
                placeholder="Your message*"
                valid={touched.message && !errors.message}
                error={touched.message && errors.message}
              />
              <ErrorMessage name="message">
                {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
              </ErrorMessage>
              <Button type="submit" disabled={!isValid}>
                Send message
              </Button>
            </FormikForm>
          )}
        </Formik>
      ) : (
        <Success>
          <p>{name}! Your message was successfully sent!</p>
        </Success>
      )}
    </Container>
  );
};
