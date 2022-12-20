import React from "react";
import {
  Button,
  Checkbox,
  CheckboxRow,
  CheckboxText,
  FormArea,
  FormAreaWrapper,
  FormTitle,
  Input,
  TextArea,
} from "./styles";
import { DM_Serif_Display, Public_Sans } from "@next/font/google";

const dm = DM_Serif_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});
const publicSans = Public_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700", "800"],
});

const ContactForm = () => {
  return (
    <FormArea>
      <FormAreaWrapper>
        <FormTitle className={dm.className}>
          Submit a help request and we’ll get in touch shortly.
        </FormTitle>
        <Input placeholder="Name" className={publicSans.className} />
        <Input placeholder="Email Address" className={publicSans.className} />
        <Input placeholder="Company Name" className={publicSans.className} />
        <Input placeholder="Title" className={publicSans.className} />
        <TextArea placeholder="Message" className={publicSans.className} />
        <CheckboxRow>
          <Checkbox />
          <CheckboxText>
            Stay up-to-date with company announcements and updates to our API
          </CheckboxText>
        </CheckboxRow>
        <Button className={publicSans.className}>Submit</Button>
      </FormAreaWrapper>
    </FormArea>
  );
};

export default ContactForm;
