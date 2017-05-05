/**
 * Created by Seth on 4/29/2017.
 */
angular.module('myApp').service('mainService', function(){

    this.getProject = function(id){
        return this.projects[id -1];
    };

    this.projects = [
        {
            name: 'VentureBound',
            stack: 'Full Stack',
            description: 'full stack project allowing users to create, save and view hikes and adventures',
            situation: 'As a personal project I wanted to create a website that would allow me to create a journal of adventures and hikes that I had both already and yet wanted to complete.  I needed to be able to save locations and markers on google maps and also upload pictures.  I needed a secure login and a way to keep track of users and which adventures and pictures they had uploaded.',
            task: 'I decided to use AngularJS on the front end and I wanted to get a clean, minimalist look using TweenMax and CSS.  Google Maps was also going to be a big part of the application and I wanted it to be an easy experience for the user.  On my back end it was clear that I would have to set up a fairly in-depth system of RESTful API points with NodeJS.  Users would also need to be authenticated with a local authorization strategy and then have a session id.  Pictures, adventure info and latitude and longitude points would all need to be stored in a PostgreSQL database that I would connect to with Massive.',
            action: 'Throughout the development process there were many obstacles to overcome.  There was the challenge of wanting to have all my pictures in my database rather than linking to them.  I used a functional directive to allow the user to upload an image file from their own computer, then turn it into base64 and send it through a HTTP POST request to the NodeJS server and from there store it as a string in an SQL table with a unique id and a foreign key id pointing to the adventure it was associated with.  Another challenge was setting up the Google Maps API and allowing users to drop a pin on the location of their adventure and then retrieve the lat and long as the dragged the pin to adjust it.  Those coordinates were also sent to the back end and stored in the SQL database.  Retrieving all the information needed to display saved adventures required in-depth SQL queries with multiple joins.',
            result:'VentureBound was the result of all of this',
            id: 1,
            images: [
                {path: './images/Screenshot(8).png'},
                {path: './images/Screenshot(10).png'},
                {path: './images/Screenshot(12).png'},
                {path: './images/Screenshot(13).png'},
                {path: './images/Screenshot(14).png'},
                {path: './images/Screenshot(18).png'},
                {path: './images/Screenshot(19).png'}
                ]
        },
        {
            name: 'Top Secret',
            stack: 'Front End',
            id: 2
        },
        {
            name: 'VentureBound',
            stack: 'Front End',
            id: 3
        },
        {
            name: 'VentureBound',
            stack: 'Front End',
            id: 4
        },
        {
            name: 'VentureBound',
            stack: 'Front End',
            id: 5
        },
        {
            name: 'VentureBound',
            stack: 'Front End',
            id: 6
        }
    ]
});