import React from 'react'
import SecondaryHeroSection from './SecondaryHeroSection'
import SecondaryEventsSection from './SecondaryEventsSection'
import SecondaryFacilities from './SecondaryFacilities'
import SecondaryGallerySection from './SecondaryGallerySection'

function SecondaryHome() {
  return (
    <div>
      <SecondaryHeroSection/>
      <SecondaryEventsSection/>
      <SecondaryFacilities/>
      <SecondaryGallerySection/>
    </div>
  )
}

export default SecondaryHome