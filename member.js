function skillsMember() {
    return {
        name: "skillsMember",
        restrict: "E",
        templateUrl: "app/components/member/skills-member.html",
        controller: function($scope, $element, $attrs) {
            $scope.skills = [
                { name: "HTML" },
                { name: "CSS" },
                { name: "JavaScript" },
                { name: "AngularJS" },
                { name: "NodeJS" },
                { name: "MongoDB" },
                { name: "Express" }
            ];
        }
    };
}