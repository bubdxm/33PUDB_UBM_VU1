var app = angular.module('viewCustom', []);
app.value('counter', 1);

app.component('prmSearchBarAfter', {
  bindings: { parentCtrl: '<' },
  templateUrl: 'custom/33PUDB_UBM_VU1/html/prmSearchBarAfter.html'
});

app.component('prmBriefResultContainerAfter', {
  bindings: { parentCtrl: '<' },
  controller: ['$scope', '$rootScope', '$element', function controller($scope, $rootScope, $element) {
    if (typeof $rootScope.counter !== "undefined") {
      $rootScope.counter = $rootScope.counter + 1;
    } else {
      $rootScope.counter = 1;
    }

    var resultList = angular.element(document.getElementsByClassName('list-item-wrapper'));
    var resultCount = resultList.length;

    if ( (resultCount <= 10) && ( $rootScope.counter == resultCount) ) {
      $scope.showExternalSiteList = true;
    } else if ($rootScope.counter == 10) {
      $scope.showExternalSiteList = true;
    }

    console.log("CONTER : " + $rootScope.counter + " / " + "resultCount : " + resultCount);

    $scope.queryTerm = $scope.$parent.$ctrl.searchService.searchFieldsService._mainSearch;
  }],
  templateUrl: 'custom/33PUDB_UBM_VU1/html/linkExternalSiteResultList.html'
});
