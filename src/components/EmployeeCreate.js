import React from 'react';
import {Picker, Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button} from "./common";
import {employeeUpdate} from "../actions";

class EmployeeCreate extends React.Component {

  updateEmployee(name, value) {
    this.props.employeeUpdate({prop: name, value: value})
  }

  renderPickerItems() {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      .map((item) => <Picker.Item key={item} label={item} value={item}/>);
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label="Name"
            placeholder="Your Name"
            value={this.props.name}
            onChangeText={this.updateEmployee.bind(this, 'name')}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            keyboardType="phone-pad"
            value={this.props.phone}
            onChangeText={this.updateEmployee.bind(this, 'phone')}
          />
        </CardSection>

        <CardSection style={{flex: 1}}>
          <View style={styles.shiftContainerStyle}>
            <Text style={styles.pickerTextStyle}>Shift</Text>
            <Picker
              style={styles.pickerStyle}
              selectedValue={this.props.shift}
              onValueChange={this.updateEmployee.bind(this, 'shift')}
            >
              {this.renderPickerItems()}
            </Picker>
          </View>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }

}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },
  pickerStyle: {
    flex: 2,
  },
  shiftContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;

  return {
    name,
    phone,
    shift,
  };
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);