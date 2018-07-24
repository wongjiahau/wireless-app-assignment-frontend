import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { DBLogin, DBFetchTask, DBCreateTask, DBDeleteTask, DBUpdateTask } from './database';

export class Tester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
      session_id: null
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button title="login" onPress={this.handleLogin}/>
        <Button title="fetch task" onPress={this.handleFetchTask}/>
        <Button title="create task" onPress={this.handleCreateTask}/>
        <Button title="delete task" onPress={this.handleDeleteTask}/>
        <Button title="update task" onPress={this.handleUpdateTask}/>
      </View>
    );
  }

  handleLogin = async () => {
    const result = await DBLogin("john@gmail.com", "1234");
    this.setState({
      text: JSON.stringify(result),
      session_id: result.session_id
    })
  }

  handleFetchTask = async () => {
    const result = await DBFetchTask(this.state.session_id);
    this.setState({
      text: JSON.stringify(result)
    })
  }

  handleCreateTask = async () => {
    const result = await DBCreateTask(this.state.session_id,"New title","new content", 0, [{date: 9999}]);
    this.setState({
      text: JSON.stringify(result)
    })
  }

  handleDeleteTask = async () => {
    const result = await DBDeleteTask(2)
    this.setState({
      text: JSON.stringify(result)
    })
  }

  handleUpdateTask = async () => {
    const result = await DBUpdateTask(1, "updated title", "updated content", 1, [{date:666}]);
    this.setState({
      text: JSON.stringify(result)
    })
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
