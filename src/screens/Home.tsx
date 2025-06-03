import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RestaurantCard, { RestaurantCardProps } from '../components/RestaurantCard';
import { restaurants as mockRestaurants } from '../data/utils';
import { addDoc, collection, onSnapshot, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const Home = () => {
    const [restaurants, setRestaurants] = useState<RestaurantCardProps[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    // useEffect(() => {
    //     addRestaurants();
    // }, [])

    // useEffect(() => {
    //     deleteAllRestaurants();
    // }, []);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'restaurants'),
            (snapshot) => {
                const data = snapshot.docs.map(doc => ({
                    id: doc.id as string,
                    ...doc.data(),
                }));
                setRestaurants(data as any);
            },
            (error) => {
                console.error('Error fetching restaurants:', error);
            }
        );
        return () => unsubscribe();
    }, []);

    const addRestaurants = async () => {
        try {
            for (const restaurant of mockRestaurants) {
                await addDoc(collection(db, 'restaurants'), restaurant);
            }
            console.log('All restaurants added successfully!');
        } catch (error) {
            console.error('Error adding restaurants: ', error);
        }
    }

    const deleteAllRestaurants = async () => {
        try {
            const quesrySnapshot = await getDocs(collection(db, 'restaurants'));
            const batchDeletes = quesrySnapshot.docs.map((docSnap) =>
                deleteDoc(doc(db, 'restaurants', docSnap.id)));

            await Promise.all(batchDeletes);
            console.log('All restaurants deleted successfully!');
        } catch (error) {
            console.error('Error deleting restaurants: ', error);
        }
    }

    const filteredRestaurants = restaurants.filter((restaurant: any) => {
        const query = searchQuery.toLowerCase();
        return (
            restaurant.name.toLowerCase().includes(query) ||
            restaurant.categories.toLowerCase().includes(query)
        );
    });

    return (
        <SafeAreaView style={styles.container}>
            <Header label={'Local Bites'} />
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {filteredRestaurants.length === 0 ? (
                <Text>No restaurants found matching your search.</Text>
            ) : (
                <FlatList
                    data={filteredRestaurants}
                    renderItem={({ item }) => <RestaurantCard restaurantItem={item as any} />}
                    keyExtractor={(restaurant: any) => restaurant.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            )}
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6b2f3',
        alignItems: 'center',

    },
});

export default Home;
