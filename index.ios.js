/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { createStore, combineReducers } from 'redux'
//import { combineReducers } from 'redux-immutablejs'
import { reducer as formReducer } from 'redux-form'
import { fromJS } from 'immutable'
import { Provider } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

const reducer = combineReducers({
  form: formReducer
})

const store = createStore(reducer, {})

export default class reduxFormTest extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{marginTop: 50}}>
          <Form />
        </View>
      </Provider>
    );
  }
}

const submit = values => {
  console.log('submitting immutable form', values)
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

let Form = props => {
  const { handleSubmit } = props

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <Field name="email" component={renderInput} />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

Form = reduxForm({
  form: 'immutable'
})(Form)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
});

AppRegistry.registerComponent('reduxFormTest', () => reduxFormTest);
