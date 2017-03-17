import {ProgServiceName} from './service';

export const ProgStateCtrl = ['$scope', ProgServiceName, class ProgStateCtrl {
    constructor($scope, ProgService){
        this.title = ProgServiceName;
        $scope.posts = [];
        ProgService.getPosts()
        .then(res => {
            $scope.posts = res.data.data.children;
            console.log($scope.posts);

        });
    }
}];