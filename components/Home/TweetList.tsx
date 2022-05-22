import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ListSeparator } from '../utils/ListSeparator';
import ListHeader from './ListHeader';
import { Tweet } from './Tweet';




export default function TweetList() {
    const { tweets } = useSelector((state: RootState) => state.tweet)
    return (
        <FlatList
            ListHeaderComponent={ListHeader}
            ItemSeparatorComponent={() => <ListSeparator />}
            data={tweets} renderItem={({ item }) => <Tweet {...item} />} keyExtractor={(item) => item.id.toString()} />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        // marginHorizontal: 10
    }
})