import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface HeaderProps {
    label: string;
}

const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 60,
        backgroundColor: '#9829ac',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 24,
        fontWeight: 700,
        color: '#fff',
    }
});

export default Header
