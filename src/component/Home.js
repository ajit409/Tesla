import React from 'react'
import Car from './Car/Car'

function Home() {
  return (
    <>
      <Car id="model-s" bgImg="model-s.jpg" title="Model S" dec="Order online for touchless delievery" />
      <Car id="model-y" bgImg="model-y.jpg" title="Model Y" dec="Order online for touchless delievery" />
      <Car id="model-3" bgImg="model-3.jpg" title="Model 3" dec="Order online for touchless delievery" />
      <Car id="model-x" bgImg="model-x.jpg" title="Model X" dec="Order online for touchless delievery" />
      <Car  id="panel" bgImg="solar-panel.jpg" title="Solar Panels" dec="Low Cost Solar Panels"/>
      <Car id="roof" bgImg="solar-roof.jpg" title="Solar Roof" dec="Produce Clean Energy From Roof"/>
      <Car bgImg="accessories.jpg" title="Accessories" />



    </>
  )
}

export default Home