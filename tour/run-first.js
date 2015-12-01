


//Security
	authTokenKey = 'bearertoken';
	
	function ouiErrHandler(xhr, textStatus, err) {
		var x, y, z;
	
		if (xhr) { x = '\nReturnCode: ' + xhr.status; } else { x = ''; }
		if (textStatus) { y = '\nStatus: ' + textStatus; } else { y = ''; }
		if (err && err!='') { z = err; } else { z = ''; }
		alert('OUI ERROR:' + x + y + z);
	}
	
	function getOuiHostUri() {
		//production
		return "https://ouidevapi.azurewebsites.net";
		//dev
		// return "http://localhost:63545";
	}
	
	function getOuiUri(subUri) {
		return (getOuiHostUri() + '/api/' + subUri);
	}
	
	function getOuiRequiredHeaders(){
	
		var token = sessionStorage.getItem(authTokenKey);
		var headers = {};
		if (token) {
			headers.Authorization = 'Bearer ' + token;
		}
		return headers;
	}
	
	function getOuiApiObject(subUri, callback, errCallback) {
	
	   // jQuery.support.cors = true;
		$.ajax({
			url: getOuiUri(subUri),
			headers: getOuiRequiredHeaders(),
			type: "GET",
			dataType: "json",        
			success: function (response) {
				callback(response);
			},
			error: function (xhr, textStatus, err) {
				errCallback(xhr, textStatus, err);
			}
		});
	}
	
	
	
	function putOuiObject(subUri, dataAdd, callback, errCallback) {
		jQuery.support.cors = true;
		$.ajax({
			url: getOuiUri(subUri),
			type: 'PUT',
			headers: getOuiRequiredHeaders(),
			contentType: 'application/json;charset=utf-8',       
			data: JSON.stringify(dataAdd),
			success: function (data) {
				callback(data);
			},
			error: function (xhr, textStatus, err) {
				errCallback(xhr, textStatus, err);
			}
		});
	
	}
	
	function patchOuiObject(subUri, dataUpd, callback, errCallback) {
		jQuery.support.cors = true;
		$.ajax({
			url: getOuiUri(subUri),
			type: 'PATCH',
			headers: getOuiRequiredHeaders(),
			data: JSON.stringify(dataUpd),
			contentType: 'application/json;charset=utf-8',
			success: function (data) {
				callback(data);
			},
			error: function (xhr, textStatus, err) {
				errCallback(xhr, textStatus, err);
			}
	
		});
	}
	
	function LogClientOut(){
		sessionStorage.removeItem(authTokenKey);
	}