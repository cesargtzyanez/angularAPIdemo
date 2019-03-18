import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cesar demo!';
  mynumber = [{name: "Cesar"}, {name: "Karla"},{name: "Jim"}];
  myData = fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=00034b1ea16fb9bd9cb6a78d6e2c1176&format=json&limit=5')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}
