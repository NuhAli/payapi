import React, { useEffect, useState } from "react";
import {
  ImageContainer,
  InformationSection,
  InformationSectionWrapper,
} from "./styles";
import { informationData } from "./informationData";
import InformationCard from "../InformationCard";
import Image from "next/image";
import { teamData } from "../TeamInformation/data";
import TeamInformation from "../TeamInformation";

const InformationBlock = () => {
  const windowWidth = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(windowWidth);
  const [image, setImage] = useState("");

  useEffect(() => {
    renderBackground();
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    renderBackground();
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const renderBackground = () => {
    if (width >= 375) {
      setImage("/assets/about/mobile/image-team-members.jpg");
    }
    if (width >= 768) {
      setImage("/assets/about/tablet/image-team-members.jpg");
    }
    if (width >= 1024) {
      setImage("/assets/about/desktop/image-team-members.jpg");
    }
  };
  
  const renderCard = (section: number) => {
    return informationData.map((item) => {
      if (section === item.part) {
        return (
          <InformationCard
            title={item.title}
            description={item.description}
            key={item.title}
          />
        );
      }
    });
  };

  return (
    <InformationSection>
      <InformationSectionWrapper>
        {renderCard(1)}
        <ImageContainer>
          <Image src={image} alt={"team members"} fill/>
        </ImageContainer>
        <TeamInformation numberOfTeam={teamData.numberOfTeam} officeNumber={teamData.officeNumber} transactionNumber={teamData.transactionNumber} />
        {renderCard(2)}
      </InformationSectionWrapper>
    </InformationSection>
  );
};

export default InformationBlock;
