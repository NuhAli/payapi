/* eslint-disable @next/next/no-img-element */
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
        <img src={src} alt={alt} />
    </LogoImage>
  )
}

export default BrandLogo