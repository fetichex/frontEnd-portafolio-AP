import {
  Grid,
  GridItem,
  Heading,
  Text,
  Tag,
  Image,
  HStack
} from '@chakra-ui/react'
import Slider from '../Slider'

export default function About() {
  return (
    <Grid
      h={'-webkit-fit-content'}
      p="20px"
      rounded={'1rem'}
      templateRows="repeat(2, 0.5fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}>
      <GridItem p='10px' colSpan={2} bg='blackAlpha.300' h={'-webkit-fit-content'} rounded={'1rem'}>
        <HStack
          h="100%"
          alignItems={'center'}
          justifyContent={'center'}
          spacing={5}>
          <Image src="/diegoCano.png" rounded={'1rem'} h={'200px'} />
          <Heading fontSize={'3.3rem'}>Okay, a little about me.</Heading>
        </HStack>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2}>
        <Slider />
      </GridItem>
      <GridItem p='10px' colSpan={2} bg='blackAlpha.300' h={'-webkit-fit-content'} rounded={'1rem'}>
        <Text as={'p'} fontSize={'xl'} textAlign={'justify'}>
          Proactive, persevering and detail-oriented. Focused on my professional
          growth and improving my hard and soft skills. Always looking for new
          challenges and knowledge. I am also an{' '}
          <Tag size={'lg'}>
            industrial product designer.
          </Tag>{' '}
          I like to create 3D models using Blender.
        </Text>
      </GridItem>
    </Grid>
  )
}
