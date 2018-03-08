import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import { Actions } from 'react-native-router-flux';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="Auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main" initial>
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => {Actions.employeeCreate()}}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;