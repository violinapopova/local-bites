import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <Searchbar
            placeholder='Search'
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{ width: '95%', margin: 10, borderRightColor: '#f2f2f2', borderRadius: 20}} 
        />
    )
}

export default SearchBar
