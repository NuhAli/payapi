import Image from 'next/image'
import React from 'react'
import { LogoImage } from './styles'

interface BrandLogoProps {
    src: string
    alt:string
}

const BrandLogo = ({src,alt}:BrandLogoProps) => {
  return (
    <LogoImage>
        <Image src={src} alt={alt} fill/>
    </LogoImage>
  )
}

export default BrandLogo