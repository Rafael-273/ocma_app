import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const RestaurantDetails = ({ route }) => {
    const { restaurantId } = route.params;
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            const token = await AsyncStorage.getItem('token');
            axios
                .get(`http://192.168.1.10:5001/restaurant/${restaurantId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(res => {
                    setRestaurant(res.data.data);
                })
                .catch(error => {
                    console.error("Erro ao buscar detalhes do restaurante:", error);
                });
        };

        fetchRestaurantDetails();
    }, [restaurantId]);

    if (!restaurant) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: restaurant.logo }} style={styles.logo} />
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.description}>{restaurant.description}</Text>
            <Text style={styles.location}>{restaurant.location}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
    },
    location: {
        fontSize: 16,
    },
});

export default RestaurantDetails;
