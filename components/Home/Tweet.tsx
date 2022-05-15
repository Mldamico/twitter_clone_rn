import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { ITweet } from './TweetList';


export const Tweet = ({ name, profileImg, message, messageImg, user }: ITweet) => {



    return (

        <View style={styles.tweetContainer}>
            <View>
                <Image source={{ uri: profileImg }} style={styles.profileImg} />
            </View>
            <View style={styles.tweetMessageContainer}>
                <View style={styles.tweetHeader}>
                    <View style={{ flexDirection: 'row', flexGrow: 1 }}>
                        <Text style={styles.profileName}>{name}</Text>

                        <Text style={styles.profileUser}>@{user}</Text>
                    </View>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="lightgrey" />
                </View>
                <View>
                    <Text>{message}</Text>
                    <Image style={styles.tweetImg} source={{ uri: messageImg }} />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    profileImg: {
        height: 30,
        width: 30,
        borderRadius: 50,
    },
    tweetContainer: {
        flexDirection: 'row',
    },
    tweetMessageContainer: {
        marginLeft: 15,
        flex: 1,
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    profileUser: {
        fontWeight: '300',
        paddingLeft: 5
    },
    tweetHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tweetImg: {
        borderRadius: 10,
        aspectRatio: 1 / 1,
        width: '100%',
    }

})