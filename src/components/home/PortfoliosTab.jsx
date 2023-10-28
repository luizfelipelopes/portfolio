import React from "react";
import Col from "react-bootstrap/Col";
import { PortfolioItem } from "./PortfolioItem";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function PortfoliosTab({ portfolios }) {
  return (
    <>
      <Col className="portfolios" xs={12} md={12}>

        {portfolios.map((item, index) => (
            <PortfolioItem item={item} />
        ))}
      
      </Col>
  
    </>
  );
}

export default PortfoliosTab;
