import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from '../screens/HomeScreen'
import MoviesScreen from '../screens/MoviesScreen'
import ArtistDirectoryScreen from '../screens/ArtistDirectoryScreen'
import ProfileScreen from '../screens/ProfileScreen'
import BottomTabs from './bottomTabs/BottomTabs'

export default function Navigation() {
    const [activeTab, setActiveTab] = useState('home')

    const handleTabPress = (tabId) => {
        setActiveTab(tabId)
    }

    const renderScreen = () => {
        switch (activeTab) {
            case 'home':
                return <HomeScreen />
            case 'movies':
                return <MoviesScreen />
            case 'artist':
                return <ArtistDirectoryScreen />
            case 'menu':
                return <ProfileScreen />
            default:
                return <HomeScreen />
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.screenContainer}>
                {renderScreen()}
            </View>
            <BottomTabs activeTab={activeTab} onTabPress={handleTabPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    screenContainer: {
        flex: 1,
        paddingBottom: 80,
    }
})