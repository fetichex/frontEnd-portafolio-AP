import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Link
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa'
import pdf from '../../assets/Diego_Cano_Full-Stack-Developer.pdf'

export default function Hero() {
  return (
    <Stack
      h='93vh'
      align={'center'}
      justify={'space-evenly'}
      spacing={{ base: 8, md: 10 }}
      direction={{ base: 'column-reverse', md: 'row', lg: 'row', xl: 'row' }}>
      <VStack spacing={{ base: 5, md: 10 }} align={'flex-start'}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
          <Text>Hi I'm Diego Cano</Text>
          <Text
            as={'span'}
            fontSize={{ base: '3xl', sm: '2xl', lg: '3xl' }}
            color={'red.400'}>
            Full Stack Web Developer!
          </Text>
        </Heading>
        <Stack
          direction={{
            base: 'column-reverse',
            md: 'row',
            lg: 'row',
            xl: 'row'
          }}
          spacing={4}
          alignSelf='center'>
          <Link href='https://github.com/fetichex' isExternal>
            <Button w='150px' borderRadius={'50'}>
              <Stack direction='row' spacing={4}>
                <FaGithub />
                <Text>Github</Text>
              </Stack>
            </Button>
          </Link>
          <Link
            href='https://www.linkedin.com/in/diegocano-fullstackdeveloper/'
            isExternal>
            <Button w='150px' colorScheme={'linkedin'} borderRadius={'50'}>
              <Stack direction='row' spacing={4}>
                <FaLinkedin />
                <Text>Linkedin</Text>
              </Stack>
            </Button>
          </Link>
          <Link href={pdf} download={pdf}>
            <Button w='150px' borderRadius={'50'}>
              <Stack direction='row' spacing={4}>
                <FaUser />
                <Text>Resume</Text>
              </Stack>
            </Button>
          </Link>
        </Stack>
      </VStack>
      <Image
        borderRadius={'15rem'}
        boxSize={[200, 300, 400]}
        src={'/diegoCano.png'}></Image>
    </Stack>
  )
}
