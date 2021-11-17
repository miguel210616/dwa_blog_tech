import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import Drawer from "../../components/Drawer";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    sexo: ""
  });
  /*const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", inputs.name);
    console.log("email", inputs.email);
    console.log("email", inputs.sexo);
  };*/

  return (
    <>
      <Drawer>
        <Container maxWidth="xl">
          <div>
            <h1>Hola bebecitooo </h1>
          </div>
        </Container>
      </Drawer>
    </>
  );
};

export default Contact;