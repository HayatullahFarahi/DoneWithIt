import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparatorComponent from '../components/ListItemSeparatorComponent'
import Screen from '../components/Screen'
import colors from '../config/colors'
const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/couch.jpg'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D3',
        image: require('../assets/couch.jpg'),
    },
]

function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = (message) => {
        // delete the message from the message
        // call the server to delete the item
        setMessages(messages.filter((m) => m.id !== message.id))
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        image={item.image}
                        title={item.title}
                        subTitle={item.description}
                        onPress={() =>
                            console.log('Message select: ', item.title)
                        }
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparatorComponent}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D3',
                            image: require('../assets/couch.jpg'),
                        },
                    ])
                }}
            />
        </Screen>
    )
}
const styles = StyleSheet.create({})
export default MessagesScreen
