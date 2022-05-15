import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tweet } from './Tweet';
import ListHeader from './ListHeader';


export interface ITweet {
    id: number
    user: string;
    name: string;
    profileImg: string;
    message: string;
    messageImg: string
}

const tweets: ITweet[] = [{
    id: 1,
    user: 'HBOMaxLa',
    name: 'HBO Max Latinoamerica',
    profileImg: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore delectus sunt doloremque aliquam! Ipsam cumque quos perspiciatis voluptate culpa maxime nostrum at praesentium ullam ad, voluptas incidunt assumenda dicta minima.',
    messageImg: 'https://d500.epimg.net/cincodias/imagenes/2021/10/05/lifestyle/1633443991_639304_1633444188_noticia_normal.jpg'
},
{
    id: 2,
    user: 'HBOMaxLa',
    name: 'HBO Max Latinoamerica',
    profileImg: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore delectus sunt doloremque aliquam! Ipsam cumque quos perspiciatis voluptate culpa maxime nostrum at praesentium ullam ad, voluptas incidunt assumenda dicta minima.',
    messageImg: 'https://d500.epimg.net/cincodias/imagenes/2021/10/05/lifestyle/1633443991_639304_1633444188_noticia_normal.jpg'
},
{
    id: 3,
    user: 'HBOMaxLa',
    name: 'HBO Max Latinoamerica',
    profileImg: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore delectus sunt doloremque aliquam! Ipsam cumque quos perspiciatis voluptate culpa maxime nostrum at praesentium ullam ad, voluptas incidunt assumenda dicta minima.',
    messageImg: 'https://d500.epimg.net/cincodias/imagenes/2021/10/05/lifestyle/1633443991_639304_1633444188_noticia_normal.jpg'
},
{
    id: 4,
    user: 'HBOMaxLa',
    name: 'HBO Max Latinoamerica',
    profileImg: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore delectus sunt doloremque aliquam! Ipsam cumque quos perspiciatis voluptate culpa maxime nostrum at praesentium ullam ad, voluptas incidunt assumenda dicta minima.',
    messageImg: 'https://d500.epimg.net/cincodias/imagenes/2021/10/05/lifestyle/1633443991_639304_1633444188_noticia_normal.jpg'
}]


export default function TweetList() {
    return (
        <FlatList
            ListHeaderComponent={ListHeader}
            style={styles.listContainer}
            data={tweets} renderItem={({ item }) => <Tweet {...item} />} keyExtractor={(item) => item.id.toString()} />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        marginHorizontal: 10
    }
})