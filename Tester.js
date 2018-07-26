import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { DBLogin, DBFetchTask, DBCreateTask, DBDeleteTask, DBUpdateTask, DBLogout } from './js/database';
import { saveSessionId, retrieveSessionId } from './localStorage';

export class Tester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
      session_id: null
    };
  }

  async componentDidMount() {
    const session_id = await retrieveSessionId();
    this.setState({
      session_id: session_id
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button title="login" onPress={this.handleLogin}/>
        <Button title="logout" onPress={this.handleLogout}/>
        <Button title="fetch task" onPress={this.handleFetchTask}/>
        <Button title="create task" onPress={this.handleCreateTask}/>
        <Button title="delete task" onPress={this.handleDeleteTask}/>
        <Button title="update task" onPress={this.handleUpdateTask}/>
      </View>
    );
  }

  handleLogin = async () => {
    const result = await DBLogin({email: "john@gmail.com", password: "1234"});
    this.setState({
      text: JSON.stringify(result),
      session_id: result.session_id
    })
    saveSessionId(result.session_id);
  }

  handleLogout = async () => {
    const result = await DBLogout({session_id: this.state.session_id});
    this.setState({
      text: JSON.stringify(result),
    })
  }

  handleFetchTask = async () => {
    const result = await DBFetchTask(this.state.session_id);
    this.setState({
      text: JSON.stringify(result)
    })
  }

  handleCreateTask = async () => {
    const result = await DBCreateTask({
      session_id: this.state.session_id,
      title: "New title",
      content: "new content", 
      pinned: 0, 
      reminders: [{date: 9999}]
    });
    this.setState({
      text: JSON.stringify(result)
    })
  }

  handleDeleteTask = async () => {
    const result = await DBDeleteTask({session_id: this.state.session_id, task_id: 2});
    this.setState({
      text: JSON.stringify(result)
    })
  }

  handleUpdateTask = async () => {
    const result = await DBUpdateTask({
      session_id: this.state.session_id, 
      task_id: 1,
      title: "updated title", 
      content: "updated content", 
      pinned: 1, 
      reminders: [{date:666}]
    });
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
