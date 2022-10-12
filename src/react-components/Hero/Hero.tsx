import { useEffect, useRef } from 'react'
import { VStack, Text, Grid, GridItem, Image } from '@chakra-ui/react'
import gsap from 'gsap'

const Hero = () => {
  const text1Ref = useRef(null)
  const imageRef = useRef(null)
  const text2Ref = useRef(null)
  useEffect(() => {
    const text1 = text1Ref.current
    const text2 = text2Ref.current
    const image = imageRef.current
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        stagger: 0.2,
        ease: 'power3.inOut'
      }
    })
    tl.fromTo(text1, { opacity: 0 }, { opacity: 1 })
      .fromTo(image, { opacity: 0 }, { opacity: 1 }, '-=0.2')
      .fromTo(text2, { opacity: 0 }, { opacity: 1 }, '-=1')
  }, [])
  return (
    <VStack mt={'2.5rem'} align={'start'} justify={'center'} w={'100%'}>
      <Grid
        h={'100%'}
        w={'100%'}
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(6, 1fr)">
        <GridItem rowSpan={3} colSpan={4}>
          <Text ref={text1Ref} fontSize={'145px'}>
            DIEGO CANO
          </Text>
        </GridItem>
        <GridItem rowSpan={5} colStart={2} colEnd={4} px={10}>
          <Image
            ref={imageRef}
            src={'/diegoCano.png'}
            rounded={'0.5rem'}></Image>
        </GridItem>
        <GridItem rowSpan={5} colStart={4} colEnd={7}>
          <Text
            ref={text2Ref}
            className="text"
            fontSize={'100px'}
            fontWeight={200}>
            Full Stack Developer
          </Text>
        </GridItem>
      </Grid>
    </VStack>
  )
}

export default Hero
