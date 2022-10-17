import { ReactNode, useState } from 'react'
import {
  Grid,
  GridItem,
  Stack,
  HStack,
  VStack,
  Button,
  Image,
  Text,
  Badge
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { PROJECTS } from '../../tools'
import { Project } from '../../interfaces'

export default function DetailProject() {
  const [project, setProject] = useState<Project>()
  const MotionImageStack = motion(Stack)
  const MotionTextStack = motion(Stack)

  const handlerSelectProject = (id: number) => {
    const infoProject = PROJECTS?.find((p) => p.id === id)
    setProject(infoProject)
  }
  const techs: Array<ReactNode> = []
  project?.tech.forEach((t: string) => {
    techs.push(
      <Badge
        rounded={'full'}
        p={'1.5'}
        bg={'red.300'}
        color={'myBlack.500'}
        fontWeight={'normal'}>
        {t}
      </Badge>
    )
  })

  return (
    <AnimatePresence>
      <Grid
        h={'100%'}
        w={'100%'}
        gap={4}
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(6, 1fr)">
        <GridItem rowSpan={3} rowStart={2} colSpan={2}>
          <Stack
            h={'100%'}
            w={'100%'}
            alignItems={'flex-end'}
            justifyContent={'space-evenly'}>
            {PROJECTS.map((p) => (
              <Button
                as={'a'}
                href={p.href}
                key={p.id}
                target={'_blank'}
                variant={'unstyled'}
                h={'fit-content'}
                w={'fit-content'}
                onMouseOver={() => {
                  handlerSelectProject(p.id)
                }}>
                <Text
                  cursor={'pointer'}
                  variant={'stroke'}
                  fontSize={'4.5rem'}
                  lineHeight={1}
                  fontWeight={900}
                  fontFamily={'Roboto'}>
                  {p.title}
                </Text>
              </Button>
            ))}
          </Stack>
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <VStack
            align={'center'}
            justifyContent={'center'}
            h={'100vh'}
            w={'100%'}>
            <MotionImageStack
              overflow={'hidden'}
              px={2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1 }}>
              <Image
                objectFit={'contain'}
                rounded={'0.5rem'}
                src={project?.image}></Image>
            </MotionImageStack>
            <MotionTextStack
              h={'fit-content'}
              w={'3xl'}
              px={'2rem'}
              pt={'1rem'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1 }}>
              <VStack>
                <HStack>{techs}</HStack>
                <Text fontSize={'md'} letterSpacing={4} textAlign={'justify'}>
                  {project?.description.toUpperCase()}
                </Text>
              </VStack>
            </MotionTextStack>
          </VStack>
        </GridItem>
      </Grid>
    </AnimatePresence>
  )
}
