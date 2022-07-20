import React from 'react'
import { Container } from 'reactstrap'
const FoodSection = (props) => {

  return (
    <section className="food__section">
        <Container>
            <h2 className='text-white'>{props.title}</h2>
        </Container>
    </section>
  )
}

export default FoodSection