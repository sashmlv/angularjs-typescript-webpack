import * as angular from 'angular';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import uiRouter from '@uirouter/angularjs';
import './app.less';

const app = angular
   .module( 'app', [
      ComponentsModule,
      uiRouter
   ])
   .component( 'app', AppComponent )
   .config(( $stateProvider, $locationProvider ) => {

      'ngInject';
      $stateProvider
         .state( 'index', {
            url: '/',
         });
      $locationProvider.html5Mode({ enabled: true });
   })
   .name;

angular.bootstrap( document, [ 'app' ])
export default app;
