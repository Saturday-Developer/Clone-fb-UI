import React,{Component} from 'react';
import {Text,View,FlatList,Image} from 'react-native';
import {Card, Thumbnail} from 'native-base';
import data from './data';
import styles from './styles';

export default class Story extends Component{
    render(){
        return(
            <View>
            <Text  style={styles.storiesText}>Stories</Text>
           <FlatList
           horizontal
           data={data}
           keyExtractor={(item,index)=>index.toString()}
           renderItem={({item})=>
          <Card style={{borderRadius:3}}>
              <Image source={item.storySource} style={styles.storyImage} resizeMode="cover"/>

              <View  style={styles.userDetail}>
                  <Thumbnail  small  source={item.profileImage}/>
                  <Text style={styles.userName}>{item.name+"\n"+item.lastName}</Text>
              </View>
          </Card>
        }
           />

           </View>
        )
   }
}