window.onload  = function() {
    var StravaApiV3 = require('strava_api_v3');
    var defaultClient = StravaApiV3.ApiClient.instance;

    // Configure OAuth2 access token for authorization: strava_oauth
    var strava_oauth = defaultClient.authentications['strava_oauth'];
    strava_oauth.accessToken = "f45ad5f83412bbedfe8d69014579eac82a8c1557"

    var api = new StravaApiV3.ActivitiesApi()

    var opts = { 
    'before': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place before a certain time.
    'after': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place after a certain time.
    'page': 56, // {Integer} Page number. Defaults to 1.
    'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
    };
    document.write('hy')
    var callback = function(error, data, response) {
    if (error) {
        document.write("error");
    } else {
        document.write('API called successfully. Returned data: ' + data);
    }
    };
    api.getLoggedInAthleteActivities(opts, callback);

}