import React, { Component } from 'react';
import { StyleSheet, Text, View ,FlatList,Platform} from 'react-native';

export default class App extends Component {
 state ={data:[]}
fetchData=async()=>{
const response =await fetch('http://192.168.0.101/mysitio/wp-json/wp/v2/posts');

const posts= await response.json();

this.setState({data:post});
}
componentDidMount(){
this.fetchData();

}

 render(){ return(
  <View style={styles.container}>
    <Text>Word pres api data  hh</Text>
  <FlatList
  data={this.state.data}
  keyExtractor=  {(x,i)=>i}
  renderItem={({item})=>
<View>
  <Text>{item.title.rendered}</Text>
</View>
}
  />
  
  
  </View>
); 
   
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
