import React, {useState} from "react";

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
    Span
} from './../components/styles'

const Login = () => {
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
                <PageLogo source={require('./../assets/img/logo.png')} />
            </InnerContainer>

            <LoginContainer>
                <FormContainer>
                    <Title>Login</Title>
                    <Input placeholder="Username" value={username}
                      onChangeText={handleUsernameChange} placeholderTextColor="#ff"/>
                    <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={handlePasswordChange} placeholderTextColor="#fff" />
                    <CustomButton backgroundColor="#FFCC29" onPress={handleLoginPress}>
                      <ButtonText>Login</ButtonText>
                    </CustomButton>
                    <Span>2024 @DRIVESMART</Span>
                </FormContainer>
            </LoginContainer>
        </StyledContainer>
    );
}

export default Login