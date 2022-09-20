import { Stack, Image } from '@chakra-ui/react'
import { IntroSection } from './component'
import { Buttons } from './Buttons'

export default function Hero() {
  return (
    <Stack>
      <IntroSection>
        <Buttons />
      </IntroSection>
    </Stack>
  )
}
