import * as Yup from "yup";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import { Button, Container, Input, Label, StyledErrorMessage } from "./styles";

export const Form: React.FC = () => {
  const formSchema = Yup.object({
    name: Yup.string().min(3, "Must have at least 3 characteres").required(),
    email: Yup.string().email().required("E-mail is required"),
    message: Yup.string()
      .min(10)
      .max(500, `Can't exceed 500 characters`)
      .required(),
  });

  return (
    <>
      <Container>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            console.log(values);
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
      </Container>
    </>
  );
};
