import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { DBLogin } from './database';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button title="Press me" onPress={this.handleButtonPress}/>
      </View>
    );
  }

  handleButtonPress = async () => {
    alert("hi");
    const result = await DBLogin("john@gmail.com", "1234");
    this.setState({
      text: JSON.stringify(result)
    })
    // alert(result.json().matching_user_id);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
