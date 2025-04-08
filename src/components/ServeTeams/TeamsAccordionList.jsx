// src/pages/About.jsx
import React, { Component } from "react";
import PaperBackgroundContainer from "@components/PaperBackgroundContainer/PaperBackgroundContainer";
// import AccordionList from "@components/AccordionList/AccordionList";
import Accordion from "../Accordion/Accordion";
import * as styles from "./TeamsAccordionList.module.scss";
import { serveTeamsData } from "@data/serveTeamsData"; // ✅ Import data

const TeamsAccordionSection = () => {
  return (
    <div>
      <PaperBackgroundContainer className={styles.teamsContainer}
        headline="Our Teams"  // ✅ Displays a title      // ✅ Shows a divider
        content={
          <section>
            {serveTeamsData.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </section>
        } // ✅ Renders any JSX inside it
      />
      <div className={styles.teamsCTA}>
        <h3>Not sure which team to join? Let's chat!</h3>
        <p>Submit an interest form anyway, and we'll discern how you can contribute your God-given gifts or talents.</p>
        <Button href="/" variant="primary" className="btn-bg-white">
          Learn more about Teams
        </Button>
        <Button href="/" variant="primary" className="btn-bg-white">
          Submit Interest Form
        </Button>
      </div >
    </div >
  );
};

export default TeamsAccordionSection;