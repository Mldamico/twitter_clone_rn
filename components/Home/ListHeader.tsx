import { StyleSheet, Text, Image, Pressable, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

const ListHeader = () => {
    return (
        <SafeAreaView style={styles.headerContainer}>


            <Pressable onPress={() => { }}>
                <Image source={{ uri: 'https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png' }} style={{ width: 30, height: 30, borderRadius: 500, marginLeft: 10 }} />
            </Pressable>
            <FontAwesome name="twitter" size={30} color="#1D9BF0" />
            <Pressable
                onPress={() => { }}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                    marginRight: 10
                })}>
                <MaterialCommunityIcons name="chart-timeline-variant-shimmer" size={24} color="black" />
            </Pressable>


        </SafeAreaView>
    )
}

export default ListHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    }
})