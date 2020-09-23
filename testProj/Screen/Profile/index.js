import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Thumbnail } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Bio from './Bio';
import FriendList from './FriendList';
import { FlatList } from 'react-native-gesture-handler';

var w = Dimensions.get('window').width;


import Posts from '../Home/Posts';
import UploadPosts from '../Home/UploadPosts'; 



export default class Profile extends Component {
    render() {
        return (
            <ScrollView style={StyleSheet.container}>
                <View style={{ alignItems: "center" }}>
                    <Image source={require('../Home/Images/neverback2.jpg')} style={styles.coverImage} />
                    <Thumbnail large source={require('../Home/Images/neverback.jpg')} style={styles.profileImage} />
                    <View style={styles.camera}>
                        <FontAwesome name="camera" size={20} color="#000" />
                    </View>
                </View>
                <Text style={styles.profileName} >Saturday Developer</Text>
                <FlatList
                    data={Bio}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <View style={styles.Bio}>
                            <View style={styles.bioDetails}>
                                <FontAwesome name={item.iconName} size={20} color="rgba(0,0,0,0.5)" style={{ marginRight: 5 }} />
                                <Text style={{ fontSize: 16 }}>{item.desciption}</Text>
                            </View>
                        </View>
                    }
                />
                <View style={styles.hr} />
                <Text style={styles.friendCount}>Friends</Text>
                <Text style={{marginLeft:5}}>200 friends</Text>


                <FlatList
                    style={{ flexDirection: "column" }}
                    numColumns={3}
                    data={FriendList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <View>
                            <Image source={item.friendImage} style={styles.friendImage} />
                            <Text style={styles.friendName}>{item.friendName}</Text>
                        </View>

                    }
                />

                    <Text style={styles.allFriends}>See All Friends</Text>


                <View style={styles.hr} />
                <Text style={styles.post}>Posts</Text>
                <UploadPosts/>
                <Posts />

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    coverImage: {
        height: 200,
        width: "95%",
        resizeMode: "cover",
        borderRadius: 10,
        marginTop: 5
    },
    profileImage: {
        position: "absolute",
        marginTop: 150,
    },
    camera: {
        backgroundColor: "#fff",
        alignItems: "center",
        marginLeft: 20
    },
    profileName: {
        color: "#000",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 18,
        marginTop: 5
    },
    Bio: {
        marginLeft: 5,
        marginRight: 5
    },
    bioDetails: {
        flexDirection: "row",
        alignItems: "center"
    },
    friendImage: {
        width: w / 3 - 20,
        height: 80,
        margin: 10,
        resizeMode: "cover" 
    },
    friendName: {
        color: "#000",
        alignSelf: "center"
    },
    post: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
        marginLeft: 5
    },
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    friendCount:{
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
        marginLeft: 5
    },
    allFriends:{
        alignSelf:"center",  
        color:"#000",
        fontSize:16,
        marginTop:3
    }
})  




















