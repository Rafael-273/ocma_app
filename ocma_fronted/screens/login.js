import React, {useState} from "react";
import { useNavigation } from '@react-navigation/native';

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

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleLoginPress = () => {
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo source={require('../assets/img/logo.png')} />
            </InnerContainer>

            <LoginContainer>
                <FormContainer>
                    <Title>Login</Title>
                    <Input placeholder="Username" value={username}
                      onChangeText={handleUsernameChange}/>
                    <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={handlePasswordChange} />
                    <CustomButton backgroundColor="#FFCC29" onPress={handleLoginPress}>
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