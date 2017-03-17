import {AwwServiceName} from './service';

export const AwwStateCtrl = ['$scope', AwwServiceName, class AwwStateCtrl {
    constructor($scope, AwwService){
        this.title = "AwwwwwShittttt";
        $scope.posts = [];
        AwwService.getPosts()
        .then(res => {
            $scope.posts = res.data.data.children;
            console.log($scope.posts);

        });
    }
}];