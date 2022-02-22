import React from 'react'
import { useDispatch } from 'react-redux';
import {Card, Button} from 'react-bootstrap';
import { addToInventory } from '../../store/Inventory/slice';

const Items = (props) => {

    const dispatch = useDispatch();
    const {id,name,description,price} = props;

    return (
        <div>
            <Card bg = 'primary' text='white' key={id}>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price} €</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button onClick={()=> dispatch(addToInventory(props))} variant="success">Add</Button>
                </Card.Body>

            </Card>
        </div>
    )
}

export default Items
