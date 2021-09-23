import React from 'react'
import { CarouselMolecule } from './Carousel'
import { Static4Images } from './Static4Images'
import { FeaturedCollections } from './FeaturedCollection'
import { Unleashing } from './Unleashing'
import { PlayAround } from './PlayAround'
import { Feedback } from './Feedback'
import { ImatagramCarousel } from './Instagram'
import { PlayButton } from "../../molecules";

export function HomeTempelates() {
    return (
        <div>
            <CarouselMolecule />
            <Static4Images />
            <FeaturedCollections />
            <PlayButton
                backgroundImage={'./images/long-haired-woman-bright-blouse-white-pink-headphones-listening-music-isolated-wall.png'}
                playButtonImage={'./images/Group 6248.svg'}
            />
            <Unleashing />
            <PlayAround />
            {/*<Feedback />*/}
            <ImatagramCarousel />
        </div>
    )
}
