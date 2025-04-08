// 📁 src/components/AccordionList.jsx
import React from "react";
import Accordion from "../Accordion/Accordion";
// import styles from "./AccordionList.modules.scss"; // ✅ Import styles

const AccordionList = ({ items = [] }) => {
  return (
    <section>
      {items.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </section>
  );
};

export default AccordionList;

// Usage <AccordionList items={items} />