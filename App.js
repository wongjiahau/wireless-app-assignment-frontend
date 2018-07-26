import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { Tester } from './Tester';
import { saveSessionId, retrieveSessionId } from './localStorage';
import { hello } from './js/interface';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Store data" onPress={async ()=> {
          await saveSessionId("123")
        }}/>
        <Button title="fetch data" onPress={async ()=> {
          const result = await retrieveSessionId();
          alert(result)
        }}/>
        <Tester/>
        <Text>
        {hello()}
        </Text>
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
