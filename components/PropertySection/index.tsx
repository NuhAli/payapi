import React from 'react'
import { Section, SectionWrapper } from './styles'
import { data } from './property-data'
import PropertyCard from '../PropertyCard'
import { randomUUID } from 'crypto'

const PropertySection = () => {

    const renderCards = data.map((item,index) => {
        return <PropertyCard key={index} name={item.title} image={item.image} description={item.description} />
    })

  return (
    <Section>
        <SectionWrapper>
            {renderCards}
        </SectionWrapper>
    </Section>
  )
}

export default PropertySection