import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

  render() {
    return (<div>
      <h2>Develpment Team</h2>
      <User/>
      {/* <UserClass /> */}
    </div>
  )}
}

// const About = () => {
//   return (
//     <div>
//       <h2>Develpment Team</h2>
//       <User name="Dipti Yelve" location="Navi Mumbai" />
//       <UserClass name="Akshay Sainey" location="Banglore" />
//       <UserClass name="Akshay Sainey" location="Banglore" />
//       <hr />
//       <h2>Overview Of App</h2>
//       <p>
//         This is a Swiggy App Clone built using React and Parcel. It is a food
//         delivery app that mimics the core functionalities of Swiggy, enabling
//         users to browse restaurants, view menus, place orders, and track their
//         deliveries—all in one seamless interface. The project showcases
//         front-end development skills and React's powerful capabilities.
//       </p>
//       <h2>Features</h2>
//       <ul>
//         <li>
//           <b>Restaurant Listing:</b> View a list of restaurants available for food
//           delivery, with images and ratings.
//         </li>
//         <li>
//           <b>Search Functionality:</b> Search for restaurants, dishes, or cuisines.
//         </li>
//         <li>
//           <b>Menu Display:</b> View detailed menus for each restaurant, including food
//           items, prices, and options.
//         </li>
//         <li>
//             <b>Cart System:</b> Add items to the cart and update quantities.
//         </li>
//         <li>
//           <b>Responsive Design:</b> Fully responsive interface designed for both
//           desktop and mobile devices.
//         </li>
//       </ul>
//       <h2>Tech Stack</h2>
//         <ul>
//             <li>
//             <b>React:</b> A JavaScript library for building user interfaces.
//             </li>
//             <li>
//             <b>Parcel:</b> A web application bundler that supports zero configuration.
//             </li>
//             <li>
//             <b>HTML/CSS:</b> Front-end technologies for building web interfaces.
//             </li>
//             <li>
//             <b>JavaScript:</b> The programming language that enables interactivity.
//             </li>
//         </ul>
//     </div>
//   );
// };

export default About;
