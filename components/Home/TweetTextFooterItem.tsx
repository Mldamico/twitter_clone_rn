import { EvilIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    IconName: keyof typeof EvilIcons.glyphMap
    value?: number
}

const TweetTextFooterItem = ({ IconName, value }: Props) => {
    return (
        <View style={styles.container}>
            <EvilIcons name={IconName} size={24} color="black" />
            <Text>{value}</Text>
        </View>
    )
}

export default TweetTextFooterItem

const styles = StyleSheet.create({
    container: { flexDirection: 'row', flexGrow: 1 }
})