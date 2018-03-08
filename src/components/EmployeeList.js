import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

class EmployeeList extends React.Component {

  render() {
    return (
      <View>
        <Text>Employee list</Text>
      </View>
    );
  }

}

export default connect(null)(EmployeeList);