import { Stack, Image } from '@chakra-ui/react'
import { IntroSection } from './component'
import { Buttons } from './Buttons'

export default function Hero() {
  return (
    <Stack
      h='92vh'
      align={'center'}
      justify={'space-evenly'}
      spacing={{ base: 8, md: 10 }}
      direction={{
        base: 'column-reverse',
        sm: 'column-reverse',
        md: 'column-reverse',
        lg: 'row',
        xl: 'row'
      }}>
      <IntroSection>
        <Buttons />
      </IntroSection>
      <Image
        borderRadius={'15rem'}
        boxSize={{ base: 250, md: 300, lg: 400 }}
        src={'/diegoCano.png'}></Image>
    </Stack>
  )
}
