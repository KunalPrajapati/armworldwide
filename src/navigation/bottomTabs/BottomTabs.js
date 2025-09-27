/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function BottomTabs({ activeTab, onTabPress }) {

    const homeIcon = require('../../assets/Icons/homeIcon.png')
    const moviesIcon = require('../../assets/Icons/movieIcon.png')
    const artistIcon = require('../../assets/Icons/adIcon.png')
    const menuIcon = require('../../assets/Icons/profileIcon.png')

    const tabs = [
        { id: 'home', icon: homeIcon, label: null },
        { id: 'movies', icon: moviesIcon, label: 'Movies' },
        { id: 'artist', icon: artistIcon, label: 'Artist Directory' },
        { id: 'menu', icon: menuIcon, label: null }
    ]

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.id}
                    style={styles.tabButton}
                    onPress={() => onTabPress(tab.id)}
                >
                    <Image
                        source={tab.icon}
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: activeTab === tab.id ? '#FDC33B' : '#FFFFFF'
                        }}
                        resizeMode="contain"
                    />
                    {tab.label && activeTab === tab.id && (
                        <Text style={styles.tabLabel}>{tab.label}</Text>
                    )}
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#1E1E1E',
        paddingVertical: 18,
        paddingHorizontal: 16,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    tabButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: 'transparent',
        minWidth: 50,
        justifyContent: 'center',
    },
    tabLabel: {
        color: '#FDC33B',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 8,
    }
})