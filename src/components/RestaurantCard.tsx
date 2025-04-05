import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface RestaurantCardProps {
    restaurantItem: {
        name: string;
        categories: string;
        image: any;
        id: number;
    }
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurantItem }) => {
    const { name, categories, image } = restaurantItem;
    const rating = 4;
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.viewContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.category}>{categories}</Text>
                    <View style={styles.ratingContainer}>
                        {Array.from({ length: rating }).map((_, index) => (
                            <FontAwesome key={index} name="star" size={16} color="gold" />
                        ))}
                    </View>
                </View>
                <FontAwesome name="dollar" size={16} color="white" />
            </View>
        </View>
    )
}

const width = Dimensions.get('window').width;
const radius = 20;

const styles = StyleSheet.create({
    container: {
        width: width - 20,
        backgroundColor: '#9829ac',
        height: 200,
        borderRadius: radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.3,
        elevation: 9,
        marginTop: 10,
    },
    image: {
        width: width - 20,
        height: 130,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        color: '#fff',
    },
    category: {
        fontSize: 14,
        fontWeight: 400,
        color: '#fff',
    },
    textContainer: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        marginTop: 2,
    },
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
    }
});

export default RestaurantCard;
