# Shopping Cart | The Odin Project

This is the repo for the Shopping Cart project in the JavaScript course of The Odin Project

## What I Learned

### Passing Component Methods Through Props

I'm getting a better feel for passing methods through props down to components.  I think having gone through a more thorough curriculum that explained how first-class functions worked in JavaScript really helped.  It never occurred to me that putting the parentheses after the function is what causes the function to invoke and leaving the parentheses off passes the function definition like an object.  Knowing this, I can, for example, pass the function definition of a state hook down to a component through props, and when I use the state hook inside the component it will know to modify the state in the parent component.  The flow-down pattern is a lot easier to me now that I have a better understanding of how functions are treated and how they are invoked.

### React Router

I had never heard of [React Router](https://reactrouter.com) until this project (and the lesson before where it was introduced).  I had heard how dynamic React is but never really knew how it was dynamic with routes.  It's not officially part of React, but this is a very handy library for handling dynamic routing within the React app itself.  I'm really fascinated by how it works and how it interacts with the browser.  I poked around the internet to find out more, and what I gathered from the [Learn React Router in 5 Minutes - A Beginner's Tutorial](https://www.freecodecamp.org/news/react-router-in-5-minutes/) article is that React Router takes a look at the route path from the browser and then renders the page component based on the route path.

I think it's pretty cool to be able to handle routes dynamically in React, but my performance brain is wondering if there is a hit with this design pattern.  Sure, the use of React Router makes organizing and compartmentalizing your app easier, but I speculate that means every load of a route is a load of the entire app along with any dependencies like React itself.  Seems like there's a lot of overhead, but once everything is loaded the user experience is very responsive.

At least the way React Router works provides a handy way to create a navigation menu component.