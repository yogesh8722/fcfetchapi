import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Cards(props) {

  return (
    <>
      <Card className='box' style={{ width: '18rem',textAlign:'center',margin:'20px 10px',backgroundColor:'skyblue'}}>
      <Card.Img variant="top" src='https://wallpapers.com/images/featured/monster-pictures-pkuxm4lhmb16a9og.jpg' alt='image' />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.email}
        </Card.Text>
        <Button variant="outline-success">Read More</Button>
      </Card.Body>
    </Card>
    </>
  )
}
