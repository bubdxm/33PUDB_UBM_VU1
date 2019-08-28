let app = angular.module('viewCustom',[]);

app.component('prmSearchBarAfter', {
  bindings: { parentCtrl: '<' },
  templateUrl: 'custom/33PUDB_UBM_VU1/html/prmSearchBarAfter.html'
});

import {linkToExternalSearchSystemConfig} from './prmBriefResultContainerAfter/linkToExternalSearchSystem'

if (app){
    app.component('prmBriefResultContainerAfter', linkToExternalSearchSystemConfig);
} 