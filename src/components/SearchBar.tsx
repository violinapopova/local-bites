import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <Searchbar
            placeholder='Search'
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{ width: '95%', margin: 10, borderRightColor: '#f2f2f2', borderRadius: 20 }}
        />
    )
}

export default SearchBar
