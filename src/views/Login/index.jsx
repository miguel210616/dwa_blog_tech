import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
//  * imporatar nuestra funcion login desde service
import { login } from "../../services/auth";

const Login = () => {
  const history = useNavigate();
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

  const handleSubmit = async () => {
    const response = await login(inputs);
    console.log(response);
    if (response.ok === true){
      history("/");
    }else{
      alert("pon bien tus credenciales manito");
    }
  };

  return (
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

  );
};

export default Login;