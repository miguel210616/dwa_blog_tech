import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import Drawer from "../../components/Drawer";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => console.log(inputs);

  return (
    <Drawer>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h1>Login</h1>
            <p>
              Este es nuestro Blog Tech
            </p>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="E-mail"
                  onChange={handleChange}
                  name="email"
                  type="email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Iniciar Session
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>Pondremos un mensaje o una foto</h1>
            <p>
              Aca pondremos un mensaje para nuestros queridos usuarios
            </p>
          </Grid>
        </Grid>
      </Container>
    </Drawer>
  );
};

export default Login;