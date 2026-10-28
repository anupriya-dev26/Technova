import React from "react";
import "./Home.css";
import logo3 from "../../Assets/logo6.png";

export default function Project() {
  const projects = [
    {
      title: "We Build Amazing Websites",
      description:
        "We create modern,  user-friendly websites for businesses and customers.",
      image: logo3,
    },
    {
      title: "Modern Web Applications",
      description:
        "We build fast, responsive and user-friendly web applications We build fast, responsive and user-friendly web applications.",
      image: logo3,
    },
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <div
          className="project-row"
          key={index}
          style={{
            flexDirection: index === 0 ? "row" : "row-reverse",
          }}
        >
          <div className="leftpart">
            <img src={project.image} alt={project.title} />
          </div>
       

          <div className="rightpart">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}




// export default function Project() {
//     return(
//         <section>
//             <div className="project-row">

//                <div className="leftpart">
//                 <img src={logo3} alt="logo"/>

//              </div>

//         <div className="rightpart">
//         <h1>We Build Amazing Websites</h1>
//         <p>
//           We create modern, responsive and user-friendly websites
//           for businesses and customers.
//        </p>
//       </div>

//     </div>
//      <div className="project-row">

//                <div className="leftpart">
//                 <img src={logo3} alt="logo"/>

//              </div>

//         <div className="rightpart">
//         <h1>We Build Amazing Websites</h1>
//         <p>
//           We create modern, responsive and user-friendly websites
//           for businesses and customers.
//        </p>
//       </div>

//     </div>

//     </section>
//     )
// }