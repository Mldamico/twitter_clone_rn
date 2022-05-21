import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { EvilIcons, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { ITweet } from './TweetList';
import TweetTextFooterItem from './TweetTextFooterItem';


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
                    <Text style={styles.tweetText}>{message}</Text>
                    <Image style={styles.tweetImg} source={{ uri: messageImg }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TweetTextFooterItem IconName='comment' value={1} />
                    <TweetTextFooterItem IconName='retweet' value={2} />
                    <TweetTextFooterItem IconName='heart' value={3} />
                    <TweetTextFooterItem IconName='share-google' />

                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    tweetContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 10
    },
    profileImg: {
        height: 30,
        width: 30,
        borderRadius: 50,
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
    tweetText: {},
    tweetImg: {
        borderRadius: 10,
        marginTop: 10,
        aspectRatio: 1 / 1,
        width: '100%',
    }

})