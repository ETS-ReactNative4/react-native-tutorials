import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {

    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return(
        <View>
            <Button title='Add Post' onPress={addBlogPost}/>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <MaterialCommunityIcons name='trash-can-outline' style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderColor:'gray',
    },
    title: {
        fontSize:18,
    },
    icon: {
        fontSize:24,
    }
});

export default IndexScreen;