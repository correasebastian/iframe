var vmD, ele, cele;
(function() {
    'use strict';

    angular
        .module('starter.directives', [])
        .directive('iframeContainer', iframeContainer);

    iframeContainer.$inject = [];

    /* @ngInject */
    function iframeContainer() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {},
            // template: '<span>{{vm.state}}</span>'
            templateUrl: 'templates/iframe-container.html'
        };
        return directive;

        function link(scope, element, attrs, Ctrl) {
            console.log(scope, element, attrs, Ctrl);
            ele = element;
            // ele.addClass('after');
            ele.addClass('esportudo-iframe');
            Ctrl.hideSpinner();
            Ctrl.calculateHeight()
            console.log()

        }
    }

    Controller.$inject = ['$window', '$element']

    /* @ngInject */
    function Controller($window, $element) {
        var vm = this;
        //var tabs in px
        var tabsHeight = 50;

        //var headers in px
        var headersHeight = 45;
        vm.name = "iframe-container controller";
        vmD = vm;
        vm.hideSpinner = hideSpinner;
        vm.calculateHeight = calculateHeight;

        function hideSpinner() {
            console.log('hidding spinner')
        }

        function calculateHeight() {
            var iframeHeight = $window.screen.height - tabsHeight - headersHeight;
            var iframeHeightPx = iframeHeight + 'px';
            console.log(iframeHeightPx);
            cele = $element;
            $element.css({ "min-height": iframeHeightPx })
            // return iframeHeightPx;
        }



    }
})();
