import angular from 'angular';
import {DefaultState, DefaultCtrl} from './default';
import {AwwState, AwwStateCtrl, AwwServiceName, AwwService} from './aww';
import * as uiRouter from 'angular-ui-router';


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
            .state(DefaultState.name, DefaultState)
            .state(AwwState.name, AwwState)
    })
    .directive('app', app)
    .run(($state) => {
        $state.go('default');
    })
    .controller(DefaultState.controller, DefaultCtrl)
    .controller(AwwState.controller, AwwStateCtrl)
    .service(AwwServiceName, AwwService)



export default MODULE_NAME;