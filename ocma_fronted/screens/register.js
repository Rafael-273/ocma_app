import React, { useState } from "react";
import { Feather, Error } from '@expo/vector-icons';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  RegisterContainer,
  Input,
  CustomButton,
  ButtonText,
  FormRegisterContainer,
  Title,
  Span
} from "../components/styles";

const Register = () => {
  const [name, setName] = useState("");
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState("");
  const [emailVerify, setemailVerify] = useState(false);
  const [mobile, setMobile] = useState("");
  const [mobileVerify, setmobileVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [namepassword, setNamepassword] = useState(false);

  function handleName(e) {
    const nameVar = e.nativeEvent.text
    setName(nameVar);

    if(nameVar.length > 1) {
      setNameVerify(true)
    }
  }

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar)
  }

  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
  } 

  const handleRegisterPress = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Password:", password);
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo source={require("../assets/img/logo.png")} />
      </InnerContainer>

      <RegisterContainer>
        <FormRegisterContainer>
          <Title>Register</Title>
          <Input
            placeholder="Name"
            onChange={e => handleName(e)}
          />
          {/* {name.length < 1 ? null : nameVerify ? (
                  <Feather
                    name="check-circle"
                    color="green"
                    size={20}
                    style={{ position: 'relative', top: -45, left: 285 }}
                  />
                ) : (
                  <Error
                    name="error"
                    color="red"
                    size={20}
                    style={{ position: 'absolute', top: -45, left: 285 }}
                  />
          )} */}
          <Input
            placeholder="Email"
            onChange={e => handleEmail(e)}
          />
          <Input
            placeholder="Telephone"
            onChange={e => handleMobile(e)}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChange={e => handlePassword(e)}
            secureTextEntry={true}
          />
          <CustomButton backgroundColor="#FFCC29" onPress={handleRegisterPress}>
            <ButtonText>Register</ButtonText>
          </CustomButton>
          <Span>2024 @OCMA</Span>
        </FormRegisterContainer>
      </RegisterContainer>
    </StyledContainer>
  );
};

export default Register;
