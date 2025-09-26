import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

export default function ProfileScreen({ onClose }) {

    const profileIcon = require('../assets/Icons/profile/profileIcon.png')
    const watchlistIcon = require('../assets/Icons/profile/watchListIcon.png')
    const downloadsIcon = require('../assets/Icons/profile/downloadIcon.png')
    const subscriptionIcon = require('../assets/Icons/profile/buyIcon.png')
    const contactIcon = require('../assets/Icons/profile/contactIcon.png')
    const logoutIcon = require('../assets/Icons/profile/logoutIcon.png')

    const crossIcon = require('../assets/Icons/crossIcon.png')

    const menuItems = [
        { id: 'profile', icon: profileIcon, title: 'Name of the Profile' },
        { id: 'watchlist', icon: watchlistIcon, title: 'Watchlist / Favourites' },
        { id: 'downloads', icon: downloadsIcon, title: 'Downloads' },
        { id: 'subscription', icon: subscriptionIcon, title: 'Buy Subscription / Plan' },
        { id: 'contact', icon: contactIcon, title: 'Contact Us' },
        { id: 'logout', icon: logoutIcon, title: 'Logout', isLogout: true },
    ]

    const handleMenuPress = (itemId) => {
        console.log(`Pressed: ${itemId}`)
        // Add your navigation logic here
        switch (itemId) {
            case 'profile':
                // Navigate to profile edit
                break
            case 'watchlist':
                // Navigate to watchlist
                break
            case 'downloads':
                // Navigate to downloads
                break
            case 'subscription':
                // Navigate to subscription
                break
            case 'contact':
                // Navigate to contact
                break
            case 'logout':
                // Handle logout
                break
            default:
                break
        }
    }

    return (
        <View style={styles.overlay}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Image style={styles.closeIcon} source={crossIcon}/>
                </TouchableOpacity>

                <View style={styles.authContainer}>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logInButton}>
                        <Text style={styles.logInText}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuContainer}>
                    {menuItems.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.menuItem}
                            onPress={() => handleMenuPress(item.id)}
                        >
                            <Image style={styles.emoji} source={item.icon}/>
                            <Text style={[
                                styles.menuText,
                                item.isLogout && styles.logoutText
                            ]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 15,
    },
    closeIcon: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    authContainer: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 40,
    },
    signUpButton: {
        flex: 1,
        backgroundColor: '#FDC33B',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    signUpText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
    },
    logInButton: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#FDC33B',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    logInText: {
        color: '#FDC33B',
        fontSize: 16,
        fontWeight: '600',
    },
    menuContainer: {
        paddingHorizontal: 20,
        backgroundColor: '#1A1A1A',
        borderRadius: 15,
        borderColor: '#404040',
        borderWidth: 1,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#404040',
    },
    emoji: {
        fontSize: 22,
        marginRight: 20,
        width: 30,
    },
    menuText: {
        color: '#FFFFFF',
        fontSize: 16,
        flex: 1,
    },
    logoutText: {
        color: '#FF4444',
    },
})
