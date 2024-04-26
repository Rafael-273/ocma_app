import styled from 'styled-components'
import {View, Text, Image} from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#1F2339",
    secondary: "#0A0A0A",
    tertiary: "#FFFDF9",
}

const {primary, secondary, tertiary} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const PageLogo = styled.Image`
    width: 50%;
    height: 50%;
    resizeMode: contain;
`

export const Title = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff;
    padding: 10px;
`

export const Span = styled.Text`
    font-size: 10px;
    text-align: center;
    font-weight: 400;
    margin-top: 45px;
    padding: 10px;
    color: #fff;
`

export const LoginContainer = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.View`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    padding: 15px 25px;
    border: 1px solid #ccc;
    color: #ffffff;
    background-color: transparent;
    border-radius: 10px;
`;

export const CustomButton = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    background-color: #149BA0;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 17px;
    color: white;
    font-weight: bold;        
`;