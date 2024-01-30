//fomrik
import { Formik, Form } from "formik";
import FormikInput from "../../components/forms/formikInput";
import FormikButton from "../../components/forms/formikButton";
import { signUpSchema } from "./schemas/validationSchemas";
//custom components
import CustomLink from "../../components/utils/link";
//MUI
import { Container } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

const Signup = () => {
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ mb: 1, bgcolor: "primary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Registro
      </Typography>
      <Container sx={{ width: 400, mt: 2 }}>
        <Formik
          enableReinitialize
          initialValues={{ email: "", userName: "", password: "" }}
          validationSchema={signUpSchema}
          onSubmit={(x) => console.log(x)}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormikInput
                name={"email"}
                label={"Email"}
                disabled={isSubmitting}
              />
              <FormikInput
                name={"userName"}
                label={"Nombre de usuario"}
                disabled={isSubmitting}
              />
              <FormikInput
                name={"password"}
                label={"Contraseña"}
                disabled={isSubmitting}
                type="password"
              />
              <FormikButton
                text={"Registrarse"}
                disabled={isSubmitting}
                loading={isSubmitting}
              />
            </Form>
          )}
        </Formik>
        <CustomLink
          text="¿Ya tienes una cuenta? Inicia sesión"
          path="/signin"
          display="flex"
          flexDirection="row-reverse"
        />
      </Container>
    </Box>
  );
};

export default Signup;
