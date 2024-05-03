import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    StyledContainer,
    ContentContainer,
    PageLogo,
    Title,
    Input,
    CustomButton,
    ButtonText,
    FormRegisterContainer,
    Span
} from '../components/styles';

const EditRestaurant = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { restaurantId } = route.params;

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        async function getRestaurantDetails() {
            try {
                const token = await AsyncStorage.getItem('token');
                console.log('teste')
                console.log(restaurantId)
                const response = await axios.get(`http://192.168.1.10:5001/restaurant/${restaurantId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const { name, location, description } = response.data.data;
                setName(name);
                setLocation(location);
                setDescription(description);
            } catch (error) {
                console.error("Erro ao obter detalhes do restaurante:", error);
            }
        }
    
        getRestaurantDetails();
    }, [restaurantId]);

    const handleUpdateRestaurant = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const restaurantData = {
                name: name,
                location: location,
                description: description,
            };
            await axios.put(`http://192.168.1.10:5001/edit-restaurant/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Restaurante atualizado com sucesso!");
            navigation.goBack();
        } catch (error) {
            console.error("Erro ao atualizar restaurante:", error);
        }
    };

    return (
        <StyledContainer>
            <ContentContainer>
                <PageLogo source={require("../assets/img/logo.png")} />
            </ContentContainer>

            <FormRegisterContainer>
                <Title>Editar Restaurante</Title>
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
                <CustomButton backgroundColor="#FFCC29" onPress={handleUpdateRestaurant}>
                    <ButtonText>Atualizar Restaurante</ButtonText>
                </CustomButton>
                <Span>2024 @OCMA</Span>
            </FormRegisterContainer>
        </StyledContainer>
    );
};

export default EditRestaurant;
