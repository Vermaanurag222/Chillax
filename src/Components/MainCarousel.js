import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import firstImg from '../Image/dance.png'
import secondImg from '../Image/listening.png'
import thirdImg from '../Image/guitar.png'
import fourthImg from '../Image/fourthImg.png'
import fifthImg from '../Image/fifthImg.png'
import sixethImg from '../Image/sixethImg.png'

const images = [
    firstImg,
    secondImg,
    thirdImg,
    fourthImg,
    fifthImg,
    sixethImg
]

const MainCarousel = () => {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 5000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <Row>
                <Col>
                    <img src={currentImage} className='img-fluid' alt='covergirl' />
                </Col>
            </Row>
        </div>
    )
}

export default MainCarousel