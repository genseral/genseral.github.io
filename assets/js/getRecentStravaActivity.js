function getRecentActivity() {
    const API_KEY = "YOUR_API_KEY_HERE";
    const ATHLETE_ID = "YOUR_ATHLETE_ID_HERE";

    fetch(`https://www.strava.com/api/v3/athlete/${ATHLETE_ID}/activities`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`
    }
    })
    .then(response => response.json())
    .then(data => {
        // The data variable will contain an array of the most recent activities for the authenticated athlete
        // You can access the latest activity by using data[0]
        const latestActivity = data[0];
        console.log(latestActivity);
    })
    .catch(error => {
        // Handle any errors that may have occurred
        console.error(error);
    });


}
