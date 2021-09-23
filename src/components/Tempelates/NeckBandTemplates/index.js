import React from 'react'
import {
    PlayButton,
    Quality,
    ProductFunctions,
    SportMode,
    Unleashing,
    // SimilarProduct,
    ImageCarousel,
    CutsAbove
} from "../../molecules";
import { ProductIntro } from "./ProductIntro";
import { Specifications } from './Specifications'
import { HighTech } from './HighTech';
import { Colors } from './Colors'
import {Professional} from './Professional'

import {
    Box,
} from '@material-ui/core';

export function NeckBandTemplates() {

    return (
        <Box>

            <ProductIntro />

            <ImageCarousel
                ImageOne={'./images/neckbandmodel1.png'}
                ImageTwo={'./images/neckbandmodel.png'}
                Imagethree={'./images/neckbandmodel2.png'}
            />
            <PlayButton
                backgroundImage={'./images/Mask Group 3.png'}
                playButtonImage={'./images/Group 6257.svg'}
            />

            <HighTech />

            <Colors />

            <Professional/>

            <Specifications />

            <CutsAbove
                ImgOne={'./images/chesser.png'}
                ImgTwo={'./images/bin.png'}
                ImgThree={'./images/gijs-coolen-RH19VYVxIR4-unsplash@2x.png'}
            />
            <Quality
                qualityImageMain={'./images/qualityMain.png'}
                qualityImageSecondary={'./images/QUALITYGIRL.png'}
                headMain='Long Battery life time Enjoy excellent bass'
                headSecond='Professional Audio Team Debugging Sound'
            />
            <ProductFunctions
                title="Product Functions"
                paragraph="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                backgroundImage={'./images/Bman.png'}
                productImage={'./images/neckband.png'}
            />
            <SportMode
                title="Sport Mode"
                paragraph="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                backgroundImage={'./images/bgirl.png'}
                productImage={'./images/Png_2.png'}
                style={{ border: "2px solid red" }}
            />
            <Unleashing
                backgroundImage={'./images/Mask Group 3.png'}
            />
            {/*<SimilarProduct />*/}

        </Box>
    )
}
