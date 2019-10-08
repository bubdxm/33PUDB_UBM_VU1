import linkToExternalSearchSystem from '../../html/linkExternalSiteResultList.html'

class linkToExternalSearchSystemController {
    constructor($scope, $window, favSession){
        if (this.parentCtrl.jwtUtilService.storageUtil.localStorage.getItem('viewExternalSearchMessage') != 'false'){
           this.showExternalSiteList = true;
           this.parentCtrl.jwtUtilService.storageUtil.localStorage.setItem('viewExternalSearchMessage','true');
        }
       
        $scope.queryTerm = encodeURIComponent(this.parentCtrl.searchService.searchFieldsService._mainSearch);
    }

    externalSearchMsgOnClick (){
      this.showExternalSiteList = false;
      this.parentCtrl.jwtUtilService.storageUtil.localStorage.setItem('viewExternalSearchMessage','false');
    };
  }

  linkToExternalSearchSystemController.$inject = ['$scope', '$rootScope', '$element']
  export let linkToExternalSearchSystemConfig = {
    bindings: {parentCtrl:'<'},
    controller: linkToExternalSearchSystemController,
    template:  linkToExternalSearchSystem,
  }