import React, { useEffect, useState } from "react";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { Alert } from "react-native";

import {
    StyledContainer,
    HomeContainer,
    ContentContainer,
    HomeLogo,
    HomeTitle,
    CustomSpan,
    UserContainer,
    UserEmail,
    UserName,
    MenuContainer,
    MenuIcon,
    RestaurantContainer,
    RestaurantName,
    Description,
    Location,
    EditIconContainer,
    RestaurantCard,
    LogoContainer,
    Logo,
    RestaurantInfoContainer,
    ButtonsContainer
} from '../components/styles'

const Home = () => {
    const navigation = useNavigation();

    const [userData, setUserData ] = useState("")
    const [restaurants, setRestaurants] = useState([]);

    async function getData() {
        const token = await AsyncStorage.getItem('token');
        axios
            .post("http://192.168.1.10:5001/user-data", {token:token})
            .then(res => {
                setUserData(res.data.data)
            });

        axios
            .get("http://192.168.1.10:5001/list-restaurants")
            .then(res => {
                setRestaurants(res.data.data);
            })
            .catch(error => {
                console.error("Erro ao buscar restaurantes:", error);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            getData();
        }, [])
    );

    const handleDeleteRestaurant = async (restaurantId) => {
        try {
            const token = await AsyncStorage.getItem('token');
            axios
            .delete(`http://192.168.1.10:5001/delete-restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            Alert.alert("Restaurante deletado!");
            getData();
        } catch (error) {
            Alert.alert(error);
        }
    };
    

    return (
        <HomeContainer>
            <MenuContainer>
                <HomeLogo source={require('../assets/img/logo.png')} />
                <UserName>Bem Vindo {userData.name}</UserName>
                <MenuIcon>
                    <Feather name="plus" size={24} color="black" onPress={()=>{
                        navigation.navigate("RegisterRestaurant")
                    }} />
                </MenuIcon>
            </MenuContainer>

            <ContentContainer>
                <HomeTitle>Nossos Restaurantes</HomeTitle>
                <CustomSpan>Explore e aproveite!</CustomSpan>
            </ContentContainer>

            <RestaurantContainer>
                {restaurants.map((restaurant, index) => (
                    <RestaurantCard key={index}>
                        <LogoContainer>
                            <Logo source={require('../assets/img/logo.png')} />
                        </LogoContainer>
                        <RestaurantInfoContainer>
                            <RestaurantName>{restaurant.name}</RestaurantName>
                            <Description>{restaurant.description}</Description>
                            <Location>{restaurant.location}</Location>
                        </RestaurantInfoContainer>
                        <ButtonsContainer>
                            <EditIconContainer>
                                <Feather name="edit" size={24} color="black" onPress={()=>{
                                    navigation.navigate("EditRestaurant",  { restaurantId: restaurant._id })
                                }} />
                            </EditIconContainer>
                            <EditIconContainer>
                                <Feather name="trash-2" size={24} color="black" onPress={()=>{
                                    handleDeleteRestaurant(restaurant._id);
                                }} />
                            </EditIconContainer>                            
                        </ButtonsContainer>
                    </RestaurantCard>
                ))}
            </RestaurantContainer>
        </HomeContainer>
    );
}

export default Home;
