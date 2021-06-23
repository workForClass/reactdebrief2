
// Currently, our Dog component from React Debrief 1 is doing a lot of functionality
// We want to split this component into a presentational and a container component as we learnt in Advanced React
// Your job is to use the Dog.js file from React Debrief 1 (also in this folder) to create the same app
// with seperate components

// begin by creating the boilerplate version of the app by running 'npx create-react-app dogimageapp'. This may take a while.
// move into this folder and write 'npm start' to start a live version of the app
// you can begin, if you want, by moving the Dog.js file and replacing the App.js to get it working like in debrief 1

// 1. Set up Your Components
//  a) Create a folder for presentational components and one for container components
// b) Inside, create a file for your presentational Dog component and one for your container Dog component

// 2. Split the Dog.js file into code for presentation and code for changing states, storing states, etc
// Figure out which parts need to go into the container file and which in the presentational file
// Make sure that your App.js renders your container component

//At the end, your application should work the same as the one we made in the first debrief

// Hints: 
// - Don't forget to import React at the top of both files
// - your container component should render the presentational component and pass it props
// - Instead of relying on states or its own methods, your presentation component should take in props to know which image or text to display :)


