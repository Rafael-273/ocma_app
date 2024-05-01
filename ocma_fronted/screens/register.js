import React, { useState } from "react";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  RegisterContainer,
  Input,
  CustomButton,
  ButtonText,
  FormContainer,
  Title,
  Span,
} from "../components/styles";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleMobileChange = (text) => {
    setMobile(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleRegisterPress = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Password:", password);
    // Aqui você pode adicionar a lógica para enviar os dados para o backend e realizar o registro
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo source={require("../assets/img/logo.png")} />
      </InnerContainer>

      <RegisterContainer>
        <FormContainer>
          <Title>Register</Title>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={handleNameChange}
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
          />
          <Input
            placeholder="Telephone"
            value={mobile}
            onChangeText={handleMobileChange}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={handlePasswordChange}
          />
          <CustomButton backgroundColor="#FFCC29" onPress={handleRegisterPress}>
            <ButtonText>Register</ButtonText>
          </CustomButton>
          <Span>2024 @OCMA</Span>
        </FormContainer>
      </RegisterContainer>
    </StyledContainer>
  );
};

export default Register;
