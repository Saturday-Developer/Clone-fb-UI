import React,{Component} from 'react';
import {Text,View,Dimensions,Image,FlatList} from 'react-native';
import {Card, Item} from 'native-base';
import  data  from  './data';
import  PostTopView  from  './PostTopView';
import  PostBottomView  from  './PostBottomView';




export default class Posts extends Component{
    render(){
      const  AllPosts  =(item)=>{
          if(item.type=="text"){
              return(
                  <Card>
                      <PostTopView name={item.userName}  time={item.time}/>
                      <View  style={{alignItems:"center",justifyContent:"center",left:2}}>
                          <Text  style={{color:"#000",fontSize:16}}>{item.PostSource}</Text>
                      </View>
                      <PostBottomView/>
                  </Card>
              )
          }
 
          else  if(item.type=="image"){
            return(
                <Card>
                    <PostTopView name={item.userName}  time={item.time}/>
                    <View  style={{borderBottomWidth:1,borderColor:"#ccc",borderTopWidth:1}}>
                      <Image  source={item.PostSource} style={{height:Dimensions.get('screen').height/1.8,width:"100%"}}
                      resizeMethod="scale"  resizeMode="cover"/>
                    </View>
                    <PostBottomView/>
                </Card>
            )  
        }
      }
        return(
           <FlatList
           data={data}
           keyExtractor={(Item,index)=>index.toString()}
           renderItem={({item})=>
            <View>  
                {AllPosts(item)}
            </View>
        }
           />
        )
   }
}    