var WebRtcDemo = WebRtcDemo || {};

/************************************************
ViewModel.js

Implements the KnockoutJS ViewModel for our page
************************************************/
WebRtcDemo.ViewModel = (function () {
    var viewModel = {
        Users: ko.mapping.fromJS([]), // List of users that are logged in and ready for connections
        Username: ko.observable('not logged in.'), // My username, to be reflected in UI
        MyConnectionId: ko.observable(''), // My connection Id, so I can tell who I am
        Mode: ko.observable('idle'), // UI mode ['idle', 'calling', 'incall']
        Loading: ko.observable(false) // Loading indicator control
    };

    // The user that represents me
    viewModel.Me = ko.computed(function () {
        return ko.utils.arrayFirst(this.Users(), function (user) {
            return user.ConnectionId() == viewModel.MyConnectionId();
        });
    }, viewModel);
    
    // The readable status of the UI
    viewModel.CallStatus = ko.computed(function () {
        var callStatus;
        
        if (this.Mode() == 'idle') {
            callStatus = 'Idle';
        } else if (this.Mode() == 'calling') {
            callStatus = 'Calling...';
        } else {
            callStatus = 'In Call';
        }

        return callStatus;
    }, viewModel);

    // Set a new array of users.  We could simply do viewModel.Users([array]),
    // but the mapping plugin converts all the user props to observables for us.
    viewModel.setUsers = function (userArray) {
        ko.mapping.fromJS(userArray, viewModel.Users);
    };

    // Retreives the css class that should be used to represent the user status.
    // I can't get this to work as just a dynamic class property for some reason.
    viewModel.getUserStatus = function (user) {
        var css;

        if (user == viewModel.Me()) {
            css = 'icon-user';
        } else if (user.InCall()) {
            css = 'icon-phone-3';
        } else {
            css = 'icon-phone-4';
        }

        return css;
    };

    // Bind to the UI
    ko.applyBindings(viewModel);

    // Return the viewmodel so that we can change props later
    return viewModel;
})();