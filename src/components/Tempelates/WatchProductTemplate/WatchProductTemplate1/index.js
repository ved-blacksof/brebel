import React from 'react'
import {
    Box,
} from '@material-ui/core';
import { LightWeight } from "./LightWeight";
import { Curved } from "./Curv";
import { WaterProof } from "./WaterProof";
import { FourWatches } from './FourWatches'
import { ProductIntro } from './ProductIntro'

import {
    ProductFunctions,
    SportMode,
    PlayButton,
    Unleashing,
    Quality,
    ImageCarousel,
    CutsAbove
} from "../../../molecules";


export function WatchProductTemplate1() {
    return (
        <Box>
            <ProductIntro />
            <ImageCarousel
                ImageOne={'./images/onur-binay.png'}
                ImageTwo={'./images/young-pretty-woman.png'}
                Imagethree={'./images/luke.png'}
            />
            <FourWatches />
            <PlayButton
                backgroundImage={'./images/Mask Group.png'}
                playButtonImage={'./images/Group 6257.svg'}
            />
            <LightWeight />
            <CutsAbove
                ImgOne={'./images/chesser.png'}
                ImgTwo={'./images/bin.png'}
                ImgThree={'./images/gijs-coolen-RH19VYVxIR4-unsplash@2x.png'}
            />
            <Curved />
            <Quality
                qualityImageMain={'./images/Mask Group 11.png'}
                qualityImageSecondary={'./images/Mask Group 12.png'}
                headMain='Up to 9 days of battery life'
                headSecond='Stylish 1.4 color display'
            />
            <WaterProof />
            <ProductFunctions
                title="Product Functions"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                backgroundImage={'./images/Mask Group 8.png'}
                productImage={'./images/Layer 0.png'}
            />
            <SportMode
                title="Sport Mode"
                paragraph="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                backgroundImage={'./images/Mask Group 9.png'}
                productImage={'./images/Layer 002.png'}
            />
            <Unleashing
                backgroundImage={'./images/Girl.png'}
                style={{marginBottom:'10%'}}
            />
           {/*<SimilarProduct />*/}
        </Box>
    )
}
