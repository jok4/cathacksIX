// Load the Google API client library
gapi.load('client', function() {
    // Initialize the client with your API key and authorization scope
    gapi.client.init({
      apiKey: 'AIzaSyA3bdBUvnFn8_fg-G_72hjd-cF94pjh1d4',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      clientId: '967000194058-5pk1ng42csi3gj60lpcgh224qa0feq3c.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/calendar'
    }).then(function() {
      // Authorize the client with user consent
      return gapi.auth2.getAuthInstance().signIn();
    }).then(function() {
      // Set the event details
      var event = {
        'summary': 'Meeting with John',
        'location': '123 Main St, San Francisco, CA 94123',
        'description': 'Discuss project status',
        'start': {
          'dateTime': '2023-04-20T10:00:00-07:00',
          'timeZone': 'America/Los_Angeles'
        },
        'end': {
          'dateTime': '2023-04-20T11:00:00-07:00',
          'timeZone': 'America/Los_Angeles'
        },
        'reminders': {
          'useDefault': true
        }
      };
  
      // Add the event to the primary calendar
      var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
      });
  
      // Execute the request and log the event link
      request.execute(function(event) {
        console.log('Event created: ' + event.htmlLink);
      });
    });
  });
  