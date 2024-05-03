import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyledContainer, ContentContainer, PageLogo, Title, Input, CustomButton, ButtonText, FormRegisterContainer, Span } from '../components/styles';

const RegisterRestaurant = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleRegisterPress = async () => {
        const token = await AsyncStorage.getItem('token');
        const restaurantData = {
            name: name,
            location: location,
            description: description,
        };

        axios.post("http://192.168.1.10:5001/register-restaurant", restaurantData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log("Restaurante registrado com sucesso!");
            navigation.goBack();
        })
        .catch(error => {
            console.error("Erro ao registrar restaurante:", error);
        });
    };

    return (
        <StyledContainer>
            <ContentContainer>
                <PageLogo source={require("../assets/img/logo.png")} />
            </ContentContainer>

            <FormRegisterContainer>
                <Title>Registrar Restaurante</Title>
                <Input
                    placeholder="Nome do Restaurante"
                    value={name}
                    onChangeText={setName}
                />
                <Input
                    placeholder="Localização"
                    value={location}
                    onChangeText={setLocation}
                />
                <Input
                    placeholder="Descrição"
                    value={description}
                    onChangeText={setDescription}
                />
                <CustomButton backgroundColor="#FFCC29" onPress={handleRegisterPress}>
                    <ButtonText>Registrar Restaurante</ButtonText>
                </CustomButton>
                <Span>2024 @OCMA</Span>
            </FormRegisterContainer>
        </StyledContainer>
    );
};

export default RegisterRestaurant;
