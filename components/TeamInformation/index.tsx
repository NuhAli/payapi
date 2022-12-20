import { DM_Serif_Display, Public_Sans } from "@next/font/google";
import {
  Border,
  InformationDescription,
  InformationTitle,
  TeamInformationSection,
} from "./styles";

interface TeamInformationProps {
  numberOfTeam: string;
  officeNumber: number;
  transactionNumber: string;
}

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

const TeamInformation = ({
  numberOfTeam,
  officeNumber,
  transactionNumber,
}: TeamInformationProps) => {
  return (
    <TeamInformationSection>
      <Border />
      <InformationTitle className={publicSans.className}>
        Team Members
      </InformationTitle>
      <InformationDescription className={dm.className}>
        {numberOfTeam}
      </InformationDescription>
      <InformationTitle className={publicSans.className}>
        Offices in the US
      </InformationTitle>
      <InformationDescription className={dm.className}>
        {officeNumber}
      </InformationDescription>
      <InformationTitle className={publicSans.className}>
        Transactions analyzed
      </InformationTitle>
      <InformationDescription className={dm.className}>
        {transactionNumber}
      </InformationDescription>
      <Border />
    </TeamInformationSection>
  );
};

export default TeamInformation;
