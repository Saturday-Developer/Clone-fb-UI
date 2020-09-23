import React ,  {Component} from 'react';
import  {Text,TouchableOpacity,StyleSheet}  from  'react-native';
import  {CardItem}  from  'native-base';
import  AntDesign from  'react-native-vector-icons/AntDesign';
import  MaterialCommunityIcons from  'react-native-vector-icons/MaterialCommunityIcons';


export  default  class  PostBottomView  extends  Component{
    render(){
        return(
          <CardItem  style={styles.reactionSection}>

              <TouchableOpacity  style={styles.reactionContent}>
                  <AntDesign  name="like2"  size={24}  color="gray"/>
                  <Text>Like</Text>
              </TouchableOpacity>
              
              <TouchableOpacity  style={styles.reactionContent}>
                  <MaterialCommunityIcons  name="comment-outline"  size={22}  color="gray"/>
                  <Text>Comment</Text>
              </TouchableOpacity>
              
              <TouchableOpacity  style={styles.reactionContent}>
                  <MaterialCommunityIcons  name="share"  size={30}  color="gray"/>
                  <Text>Share</Text>
              </TouchableOpacity>

          </CardItem>
        )
    }
} 


 const styles  =  StyleSheet.create({
     reactionSection:{
         flexDirection:"row",
         justifyContent:"space-around"
     },
     reactionContent:{
         flexDirection:"row",alignItems:"center",justifyContent:"center"
     }
 })


