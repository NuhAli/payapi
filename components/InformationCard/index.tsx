import React from 'react'
import { Card, CardDescription, CardTitle } from './styles';
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

interface IInformationCardProps {
    title: string;
    description: string;
}

const InformationCard = ({title,description}:IInformationCardProps) => {
  return (
    <Card>
        <CardTitle className={dm.className}>{title}</CardTitle>
        <CardDescription className={publicSans.className}>{description}</CardDescription>
    </Card>
  )
}

export default InformationCard