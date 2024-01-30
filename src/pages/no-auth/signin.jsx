//auth contxt
import { useAuthContext } from "../../context/authContext";
//fomrik
import { Formik, Form } from "formik";
import FormikInput from "../../components/forms/formikInput";
import FormikButton from "../../components/forms/formikButton";
import { signInSchema } from "./schemas/validationSchemas";
//custom components
import CustomLink from "../../components/utils/link";
//MUI
import { Container } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

const Signin = () => {
  const { login } = useAuthContext();
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
        Iniciar Sesión
      </Typography>
      <Container sx={{ width: 400, mt: 2 }}>
        <Formik
          enableReinitialize
          initialValues={{ email: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={() => login()}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormikInput
                name={"email"}
                label={"Email"}
                disabled={isSubmitting}
              />
              <FormikInput
                name={"password"}
                label={"Contraseña"}
                disabled={isSubmitting}
                type="password"
              />
              <CustomLink text="¿Olvidaste tu contraseña?" />
              <FormikButton
                text={"Iniciar sesión"}
                disabled={isSubmitting}
                loading={isSubmitting}
              />
            </Form>
          )}
        </Formik>
        <CustomLink
          text="¿No tienes una cuenta? Registrate"
          path="/signup"
          display="flex"
          flexDirection="row-reverse"
        />
      </Container>
    </Box>
  );
};

export default Signin;
