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
            tech: ['HTML/CSS', 'AngularJS', 'TweenMax', 'UI Router', 'Google Maps API', 'NodeJS', 'Express', 'Massive', 'SQL'],
            id: 1,
            next: 2,
            prev: 1,
            uilink: 'venturebound',
            images: [
                {
                    path: './images/home.png'
                },
                {
                    path: './images/login.png'
                },
                {
                    path: './images/createadv.png'
                },
                {
                    path: './images/addloc.png'
                },
                {
                    path: './images/uploadpic.png'
                },
                {
                    path: './images/adv.png'
                },
                {
                    path: './images/advpics.png'
                }
                ]
        },
        {
            name: 'Top Secret',
            stack: 'Front End',
            description: "Clone of Super Top Secret's website",
            tech: ['HTML/CSS', 'AngularJS', 'TweenMax', 'UI Router', 'FluidEffect.js', 'Custom Parallax', 'Gulp', 'SASS'],
            link: 'http://wearetopsecret.cf/#/',
            id: 2,
            next: 3,
            prev: 1,
            situation: 'A couple other developers and I wanted to see how good our front end skills were.  So we decided to clone one of the coolest sites out there: wearetopsecret.com.  The guys at Super Top Secret have put together some amazing work and we thought it would push us to really up our game to see if we could re-create it.',
            task: 'So we put our heads together and decided we\'d each take a couple of pages.  After we decided who was responsible for what, we put together a list of tasks on Trello and got to work.  I decided to take the home page and the case studies page.  I had to figure out how on earth to get that awesome fluid effect integrated and put together a custom parallax effect for the case studies page.',
            action: 'Right off the bat it was apparent that we would have our work cut out for us.  Several functional directives were made, custom CSS and TweenMax animations were carefully crafted, the parallax formula was concocted and then everything was carefully compiled and bundled by Gulp.',
            images: [
                {
                    path: './images/stsHome.png'
                },
                {
                    path: './images/homeBottom.png'
                },
                {
                    path: './images/homeBottom2.png'
                },
                {
                    path: './images/caseStudies.png'
                },
                {
                    path: './images/caseStudiesTwo.png'
                },
                {
                    path: './images/csBottomBefore.png'
                },
                {
                    path: './images/csBottom.png'
                }
            ]
        },
        {
            name: 'Portfolio Experiment',
            stack: 'Full Stack',
            description: 'First version of my portfolio site.',
            situation: 'I wanted to create an interesting, custom site for myself',
            task: 'I decided on a clean black and white look with a fluid effect in the background and some hover animations.',
            action: 'I put together a full-stack app with Angular.  And then set to work using CSS to create some interesting effects to hold and attract attention.',
            tech: ['HTML/CSS', 'AngularJS', 'NodeJS', 'Express'],
            id: 3,
            next: 3,
            prev: 2,
            link: 'https://sethds-portfolio-one.herokuapp.com/#!/',
            images: [
                {
                    path: './images/portfolio-one/home.png'
                },
                {
                    path: './images/portfolio-one/home-hover.png'
                }
            ]
        },
        {
            name: "Za'atari",
            stack: 'Data Visualization',
            description: "Display data about the population of Za'atari",
            situation: 'I wanted to take the D3 skills I had been learning and try to display data about a significant issue in the world.',
            task: 'I decided that I was going to see if I could start telling a small part of the story of millions of Syrian refugees.',
            action: "I set up a page with Angular, then I set to work creating some data structures I could use from the UNHCR site for Za'atari.",
            tech: ['HTML/CSS', 'D3', 'SVG', 'Angular', 'Node', 'Express'],
            id: 4,
            next: 4,
            prev: 3,
            link: 'https://zaatari-data.herokuapp.com/',
            images: [
                {
                    path: './images/zaatari.png'
                }
            ]
        }

    ]
});