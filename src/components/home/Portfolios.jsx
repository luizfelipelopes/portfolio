import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import PortfoliosTab from "./PortfoliosTab";

const Portfolios = React.forwardRef(({ heading, mobile, web, frontend, backend }, ref) => {
  const portfoliosTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    portfoliosTabRef
  );
  return (
    <Jumbotron ref={portfoliosTabRef} fluid className="bg-white m-0" id="portfolios">
      <Container className="p-5 ">
        <h2 ref={portfoliosTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="back-end"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="back-end"
            title="Back-end"
          >
            <Row className="pt-3 px-1">
              <PortfoliosTab portfolios={backend} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="front-end"
            title="Front-end"
          >
            <Row className="pt-3 px-1">
              <PortfoliosTab portfolios={frontend} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Mobile"
          >
            <Row className="pt-3 px-1">
              <PortfoliosTab portfolios={mobile} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Web"
          >
            <Row className="pt-3 px-1">
              <PortfoliosTab portfolios={web} />
            </Row>
          </Tab>


        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Portfolios;
