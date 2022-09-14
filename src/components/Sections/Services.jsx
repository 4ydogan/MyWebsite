import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Development",
    content: "We develop your dream website.",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Design",
    content: "We design all the designs you need.",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Advertising",
    content: "We can help with advertising and marketing.",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "SEO",
    content: "We provide services in all SEO operations.",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Copy Write",
    content: "We do your trademark registration and copyright.",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "Support",
    content: "We provide all kinds of consultancy services.",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
