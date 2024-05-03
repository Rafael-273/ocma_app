import React, {useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    LoginContainer,
    Input,
    CustomButton,
    ButtonText,
    FormContainer,
    Title,
    RegisterButton, 
    Span
} from '../components/styles'

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        const userData = {
            email: email,
            password,
        }

        axios
            .post("http://192.168.1.10:5001/login-user", userData)
            .then(res => {
                if (res.data.status == "ok") {
                    Alert.alert("Logado com Sucesso!");
                    AsyncStorage.setItem("token", res.data.data);
                    navigation.navigate('Home');
                }
            });
    }

    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo source={require('../assets/img/logo.png')} />
            </InnerContainer>

            <LoginContainer>
                <FormContainer>
                    <Title>Login</Title>
                    <Input placeholder="Email" value={email} onChange={e => setEmail(e.nativeEvent.text)}/>
                    <Input placeholder="Password" secureTextEntry={true} value={password}  onChange={e => setPassword(e.nativeEvent.text)}/>
                    <CustomButton backgroundColor="#FFCC29" onPress={() => handleSubmit()}>
                      <ButtonText>Login</ButtonText>
                    </CustomButton>
                    <RegisterButton onPress={()=>{
                        navigation.navigate("Register")
                    }} backgroundColor="#FFCC29">
                      <ButtonText>Cadastre-se</ButtonText>
                    </RegisterButton>
                    <Span>@OCMA 2024</Span>
                </FormContainer>
            </LoginContainer>
        </StyledContainer>
    );
}

export default Login