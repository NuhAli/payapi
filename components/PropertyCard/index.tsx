import React from "react";
import {
  Card,
  CardBody,
  CardIamgeContainer,
  CardTextContainer,
  CardTitle,
} from "./styles";
import Image from "next/image";

interface IPropertyCard {
  name: string;
  image: string;
  description: string;
}

const PropertyCard = ({ name, image, description }: IPropertyCard) => {
  return (
    <Card>
      <CardIamgeContainer>
        <Image src={image} alt={name} width={106} height={106} />
      </CardIamgeContainer>
      <CardTextContainer>
        <CardTitle>{name}</CardTitle>
        <CardBody>{description}</CardBody>
      </CardTextContainer>
    </Card>
  );
};

export default PropertyCard;
