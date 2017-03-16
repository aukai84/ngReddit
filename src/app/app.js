import angular from 'angular';
import {DefaultState, DefaultCtrl} from './default';
import * as uiRouter from 'angular-ui-router';

console.log(DefaultState.controller)
console.log(DefaultCtrl)

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
  };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
    .config(($stateProvider) => {
        $stateProvider
            .state(DefaultState.name, DefaultState);
    })
    .directive('app', app)

    .run(($state) => {
        $state.go('default');
    })
    .controller(DefaultState.controller, DefaultCtrl);


export default MODULE_NAME;