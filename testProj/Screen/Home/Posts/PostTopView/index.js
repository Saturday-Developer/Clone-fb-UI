import React ,  {Component} from 'react';
import  {Text,View}  from  'react-native';
import  {Thumbnail,CardItem}  from  'native-base';
import  Ionicons from  'react-native-vector-icons/Ionicons';

export  default  class  PostTopView  extends  Component{
    render(){
        return(
            <CardItem  style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View  style={{flexDirection:"row"}}>
                    <Thumbnail  source={require('../../Images/Mickey.jpg')}  resizeMethod="scale"/>
                    <View  style={{left:3}}>
                        <Text  style={{fontWeight:"700",color:"#000"}}>{this.props.name}</Text>
                        <Text>{this.props.time}</Text>
                    </View>
                </View>
                <Ionicons name= "ios-more"  size={24}/>
            </CardItem>
        )
    }
}


