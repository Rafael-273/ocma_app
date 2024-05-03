import styled from 'styled-components'
import {View, Text, Image} from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#FFCC29",
    secondary: "#0A0A0A",
    tertiary: "#FFFDF9",
}

const {primary, secondary, tertiary} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${primary};
`

export const HomeContainer = styled.View`
    flex: 1;
    width: 100%;
    background-color: white;
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const ContentContainer = styled.View`
    padding: 30px 10px 0px 10px;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const PageLogo = styled.Image`
    width: 50%;
    height: 50%;
    resizeMode: contain;
`

export const HomeLogo = styled.Image`
    width: 20%;
    height: 100%;
    resizeMode: contain;
`

export const Title = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${secondary};
    padding: 10px;
`

export const HomeTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${secondary};
    padding: 10px;
`

export const Span = styled.Text`
    font-size: 12px;
    text-align: center;
    font-weight: 400;
    margin-top: 45px;
    padding: 10px;
`

export const CustomSpan = styled.Text`
    font-size: 12px;
    text-align: center;
    font-weight: 400;
    margin-top: -20px;
    padding: 10px;
`

export const LoginContainer = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const RegisterContainer = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.View`
    width: 100%;
    height: 100%;
    padding: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #ffffff;
`;

export const FormRegisterContainer = styled.View`
    width: 100%;
    height: 125%;
    padding: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #ffffff;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    padding: 15px 25px;
    border: 1px solid #ccc;
    border-radius: 15px;
`;

export const CustomButton = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: ${primary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const RegisterButton = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: #1F1F1F;
    margin-top: 5px;
    margin-bottom: -15px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 17px;
    color: white;
    font-weight: bold;        
`;

export const ScrollView = styled.Text`
  flex-grow: 1;
`;

export const UserContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: white;
    background-color: ${primary};
`;

export const UserName = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const UserEmail = styled.Text`
    font-size: 14px;
`;

export const MenuContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 50px 20px 20px 20px;
    background-color: #FFFFFF;
    elevation: 7;
`;

export const MenuIcon = styled.View`
    background-color: ${primary};
    padding: 5px;
    border-radius: 5px;
`;

export const RestaurantContainer = styled.View`
    flex: 1;
    background-color: white;
    padding: 20px;
`;

export const RestaurantCard = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 15px 20px 15px 15px;
    border-radius: 10px;
    border-width: 1px;
    border-color: #ccc;
    margin-bottom: 15px;
`;

export const LogoContainer = styled.View`
    width: 25%;
`;

export const Logo = styled.Image`
    width: 40%;
    height: 40%;
    aspect-ratio: 1;
    border-radius: 10px;
`;

export const RestaurantInfoContainer = styled.View`
    width: 63%;
    padding: 10px 10px;
`;

export const RestaurantName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Description = styled.Text`
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
`;

export const Location = styled.Text`
    font-size: 14px;
    color: #666;
`;

export const ButtonsContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const EditIconContainer = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #FFCC29;
`;

export const EditIcon = styled.Image`
    width: 20px;
    height: 20px;
`;