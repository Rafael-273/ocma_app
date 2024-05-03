import React, { useState } from "react";
import { Feather, Error } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";

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

  const navigation = useNavigation();
  function handleSubmit() {
    const userData =  {
      name: name,
      email,
      mobile, 
      password
    }

    axios
      .post("http://192.168.1.10:5001/register-user", userData)
      .then(res => {
        console.log(res.data)
        if(res.data.status == 'ok'){
          Alert.alert('Registrado com Sucesso!')
          navigation.navigate('Login')
        } else {
          Alert.alert(JSON.stringify(res.data));
        }
      })
      .catch(e => console.log(e));
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
          <CustomButton backgroundColor="#FFCC29" onPress={()=>handleSubmit()}>
            <ButtonText>Register</ButtonText>
          </CustomButton>
          <Span>2024 @OCMA</Span>
        </FormRegisterContainer>
      </RegisterContainer>
    </StyledContainer>
  );
};

export default Register;
