import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { DBLogin, DBFetchTask, DBCreateTask, DBDeleteTask, DBUpdateTask } from './database';
import { Tester } from './Tester';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Tester/>
      </View>
    );
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
