import React from "react";
import * as TeamElements from "./TeamElements";
import Team from "./TeamElements";

import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.png";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.jpeg";

const TeamSection = () => {
  return (
    <>
      <TeamElements.Team id="team">
        <h1>Our Team</h1>
        <TeamElements.TeamContainer>
          {/* 
      First team member information
      */}
          <TeamElements.TeamMemberContainer className="App">
            <TeamElements.TeamMemberPhoto src={img1} />
            <TeamElements.TeamMemberDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TeamElements.TeamMemberDescription>
          </TeamElements.TeamMemberContainer>

          {/* 
      Second team member information
      */}
          <TeamElements.TeamMemberContainer className="App">
            <TeamElements.TeamMemberPhoto src={img2} />
            <TeamElements.TeamMemberDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TeamElements.TeamMemberDescription>
          </TeamElements.TeamMemberContainer>

          {/* 
      Third team member information
      */}
          <TeamElements.TeamMemberContainer className="App">
            <TeamElements.TeamMemberPhoto src={img3} />
            <TeamElements.TeamMemberDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TeamElements.TeamMemberDescription>
          </TeamElements.TeamMemberContainer>
        </TeamElements.TeamContainer>

        <TeamElements.TeamContainer>
          {/* 
      Fourth team member information
      */}
          <TeamElements.TeamMemberContainer className="App">
            <TeamElements.TeamMemberPhoto src={img4} />
            <TeamElements.TeamMemberDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TeamElements.TeamMemberDescription>
          </TeamElements.TeamMemberContainer>

          {/* 
      Fifth team member information
      */}
          <TeamElements.TeamMemberContainer className="App">
            <TeamElements.TeamMemberPhoto src={img5} />
            <TeamElements.TeamMemberDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </TeamElements.TeamMemberDescription>
          </TeamElements.TeamMemberContainer>

          {/* 
      Sixth team member information
      */}
          <TeamElements.TeamMemberContainer className="App">
            <TeamElements.TeamMemberPhoto src={img6} />
            <TeamElements.TeamMemberDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TeamElements.TeamMemberDescription>
          </TeamElements.TeamMemberContainer>
        </TeamElements.TeamContainer>
      </TeamElements.Team>
    </>
  );
};

export default TeamSection;
