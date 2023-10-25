import React from "react";
import Container from "react-bootstrap/Container";
import { mainBody } from "../editable-stuff/config";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  const icons = mainBody.icons;

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons icon-color-footer`} />
              </a>
            ))}
          </div>
      </Container>
    </footer>
  );
};

export default Footer;
