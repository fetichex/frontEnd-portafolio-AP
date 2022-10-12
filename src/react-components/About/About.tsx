import { useEffect, useRef } from 'react'
import { Box, Grid, GridItem, Highlight, Text } from '@chakra-ui/react'
import Slider from '../Slider'
import gsap from 'gsap'

export default function About() {
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const slideRef = useRef(null)

  useEffect(() => {
    const text1 = text1Ref.current
    const text2 = text2Ref.current
    const slider = slideRef.current
    const tl = gsap.timeline({
      defaults: { duration: 1, stagger: 0.2, ease: 'power3.inOut' }
    })
    tl.fromTo(text1, { opacity: 0 }, { opacity: 1 })
      .fromTo(text2, { opacity: 0 }, { opacity: 1 }, '-=0.5')
      .fromTo(slider, { opacity: 0 }, { opacity: 1 }, '-=0.5')
  }, [])

  return (
    <Grid
      w={'inherit'}
      h={'100%'}
      templateRows="repeat(8, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={2}>
      <GridItem ref={slideRef} rowStart={1} rowEnd={8} colSpan={3}>
        <Slider />
      </GridItem>
      <GridItem pl={10} rowStart={2} rowSpan={4} colSpan={2}>
        <Text
          ref={text1Ref}
          fontSize={'100px'}
          letterSpacing={5}
          lineHeight={'6rem'}>
          Ok, a little + about me
        </Text>
      </GridItem>
      <GridItem rowSpan={3} colSpan={3}>
        <Box px={10} pt={10}>
          <Text
            ref={text2Ref}
            fontSize={'md'}
            letterSpacing={4}
            textAlign={'justify'}>
            <Highlight
              query="&larr; hover the image to stop"
              styles={{ px: '4', py: '1', bg: 'red.300', rounded: '1rem' }}>
              &larr; hover the image to stop PASSIONATE ABOUT STRUCTURES,
              DESIGN, PORGAMATION LANGUAGES AND SIMPLICITY. I&apos;M GRADUATE IN
              INDUSTRIAL PRODUCT DESIGN AND WHEN I&apos;M NOT DEVELOPING A SPA
              I&apos;M CREATING 3D MODELS USING BLENDER OR EXPERIMENTING DIGITAL
              COMPOSITIONS IN PHOTOSHOP OR ILLUSTRATOR ALTHOUGH I MUST ADMIT
              THAT LOVE FURNITURE.
            </Highlight>
          </Text>
        </Box>
      </GridItem>
    </Grid>
  )
}
