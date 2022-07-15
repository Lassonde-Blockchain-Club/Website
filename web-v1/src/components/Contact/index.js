import React from "react";
import {
  ContactH1,
  ContactWrap,
  Container,
  Text,
  ContactLink,
  InfoRow,
  ImgWrap,
  Img,
  Column1,
  Column2,
  TextWrapper,
} from "./ContactElements";

const Contact = ({ imgStart, img }) => {
  return (
    <>
      <Container>
        <ContactWrap>
          <InfoRow imgStart={imgStart}>
            {/* left side */}
            <Column1>
              <TextWrapper>
                <ContactH1>Contact us</ContactH1>
                <ContactH1>General Inquiries</ContactH1>

                <Text>
                  Lassonde Blockchain’s mission to create a community of
                  blockchain innovators at York University. Feel free to reach
                  out to us by email below:
                </Text>

                <ContactLink>Email: Lassondeblockchain@gmail.com</ContactLink>

                <ContactH1>For Code/Networking Geeks</ContactH1>
                <Text>
                  In addition, feel free to explore our open-source projects on
                  GitHub and see our organization’s LinkedIn page below:
                </Text>
                <ContactLink>Github </ContactLink>
                <ContactLink>LinkedIn</ContactLink>
              </TextWrapper>
            </Column1>
            {/* right side */}
            {/* find a img/drawing */}
            <Column2>
              <a>
                <ImgWrap>
                  <Img src={img} />
                </ImgWrap>
              </a>
            </Column2>
          </InfoRow>
        </ContactWrap>
      </Container>
    </>
  );
};

export default Contact;
