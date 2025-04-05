import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants } from '../data/utils';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header label={'Local Bites'} />
            <SearchBar />
            <FlatList
                data={restaurants}
                renderItem={({ item }) => <RestaurantCard restaurantItem={item} />}
                keyExtractor={(restauRant) => restauRant.id.toString()}
                showsVerticalScrollIndicator={false} />

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
