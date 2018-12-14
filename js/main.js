var app = angular.module('viewCustom', []);
app.value('counter', 1);

app.component('prmBriefResultContainerAfter', {
  bindings: { parentCtrl: '<' },
  controller: ['$scope', '$rootScope', '$element', function controller($scope, $rootScope, $element) {
    if (typeof $rootScope.counter !== "undefined") {
      $rootScope.counter = $rootScope.counter + 1;
    } else {
      $rootScope.counter = 1;
    }

    if ($rootScope.counter == 6) {
      $scope.showExternalSiteList = true;
    }

    $scope.queryTerm = $scope.$parent.$ctrl.searchService.searchFieldsService._mainSearch;
  }],
  templateUrl: 'custom/33PUDB_UBM_VU1/html/linkExternalSiteResultList.html'
});
