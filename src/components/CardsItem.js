import React from 'react'
import { Card, Table } from 'react-bootstrap'
import { BsList, BsHeart } from "react-icons/bs";

const CardsItem = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <div>
                    <Card.Subtitle className="mb-2 text-muted">New</Card.Subtitle>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">

                        < BsList />
                        <BsHeart />
                    </div>
                </div>
                <Card.Img variant="top" src="https://www.ulcdn.net/images/products/94258/original/Apollo_Infinite_FNSF51APDU30000SAAAA.jpg?1467963840" />
                <Card.Body>
                    <Card.Title className="justify-content-center" >Wooden Chair</Card.Title>
                </Card.Body>
                <Table >

                    <tbody>
                        <tr>
                            <td>⭐ ⭐ ⭐ ⭐ ☆</td>
                            <td>Rp. 12.000.00</td>
                            <td><BsHeart /></td>
                        </tr>
                    </tbody>

                </Table>
            </Card>
        </div>
    )
}

export default CardsItem
