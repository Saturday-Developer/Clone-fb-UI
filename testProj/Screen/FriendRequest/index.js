import React,{Component} from 'react';
import {Text,View,ScrollView} from 'react-native';

import  Requests  from  './Requests';
import  Suggestions  from  './Suggestions';


export default class FriendRequest extends Component{
    render(){
        return(
           
                <ScrollView>
                <Requests/>
                <Suggestions/>
                </ScrollView>
          
            )
   }
}