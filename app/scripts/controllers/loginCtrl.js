'use strict';

angular.module('navigatorGlassProjectApp')
.controller('LoginCtrl',function(HttpService,$scope){
	var clientId = '126018090035.apps.googleusercontent.com';
	//var apiKey = 'eYwIF0NDNspB5afx1pgYsJdowncXdrbtPO73Xoa9LfIXBD8XiU9ViO6MirlQKKSReIX8wCNOKtsfsH9gtFrbBnI7t5tVawmPl2jm5BENEewWIptW1HweDdHrTt2SpH2udHy5IA2';
	var scopes = 'https://www.googleapis.com/auth/glass.timeline';

	window.handleClientLoad = function() {
		console.log('................');
		//gapi.client.setApiKey(apiKey);
		window.setTimeout(checkAuth,1);
	}

	function checkAuth() {
		gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
	}

	function handleAuthResult(authResult) {
		var authorizeButton = document.getElementById('authorize-button');
		if (authResult && !authResult.error) {
			authorizeButton.style.visibility = 'hidden';
			makeApiCall();
		} else {
			authorizeButton.style.visibility = '';
			authorizeButton.onclick = handleAuthClick;
		}
	}

	function handleAuthClick(event) {
		gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
		return false;
	}
});