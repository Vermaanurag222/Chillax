import React, { useState } from 'react'
import { ArrowUp, PauseCircle, PlayCircle } from 'react-feather'
import { Card, Col, Row } from 'reactstrap'
import guitar from '../Image/guitar.png'
import tagFooter from '../Image/tag.png'

const NewReleases = () => {

    const trend = [
        {
            id: 1,
            cover: guitar,
            title: "Tum hi ho",
            composer: 'Arjit Singh'
        },
        {
            id: 2,
            cover: guitar,
            title: "Tum hi ho (Remix)",
            composer: 'Arjit, Rj'
        },
        {
            id: 3,
            cover: guitar,
            title: "Tum hi ho (Remix)",
            composer: 'Arjit, Rj'
        }
    ]

    const [icon, setIcon] = useState(
        new Array(trend.length).fill(true)
    )

    const Playpause = () => {
        setIcon(!icon)
    }

    const NewReleasesCard = () => {
        return (
            <>

                {
                    trend.map((item, index) => {
                        return (
                            <Card className='p-2 bg-transparent'>
                                <Row className='mussicimg' key={index + 1} >
                                    <Col xl='12'>
                                        <div className='d-flex align-items-center'>
                                            <div className='playbutton'>
                                                <span onClick={Playpause} checked={icon[index]} id={`play-buttom${item + index}`}>{icon ? <PlayCircle /> : <PauseCircle />}</span>
                                            </div>
                                            <img src={item.cover} height={100} width={100} alt='#1' />
                                            <div className='d-flex justify-content-between w-100 align-items-center'>
                                                <div>
                                                    <p>{index + 1}. {item.title}</p>
                                                    <p className='ml-3'>{item.composer}</p>
                                                </div>
                                                <div className='d-flex align-items-center' >Top {index + 1} <ArrowUp /></div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        )
                    })
                }

            </>
        )
    }

    return (
        <>
            <div className='text-left'>
                <h3>New Releases</h3>
                {/* <img src={tagFooter} alt='/tagFooter' width='35%' /> */}
            </div>
            <NewReleasesCard />
        </>
    )
}

export default NewReleases