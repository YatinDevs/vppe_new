import React from 'react'
import PrimaryHeroSection from './PrimaryHeroSection'
import PrimaryEventsSection from './PrimaryEventsSection'
import PrimaryFacilities from './PrimaryFacilities'
import PrimaryGallerySection from './PrimaryGallerySection'




function PrimaryHome() {
  return (
    <div>
      <PrimaryHeroSection/>
      <PrimaryEventsSection/>
      <PrimaryFacilities/>
      <PrimaryGallerySection/>
    </div>
  )
}

export default PrimaryHome