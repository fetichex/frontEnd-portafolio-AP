import { useState } from 'react'
import { Grid, GridItem, Stack, Button, Image, Text } from '@chakra-ui/react'
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
            justifyContent={'space-around'}>
            {PROJECTS.map((p) => (
              <Button
                as={'a'}
                href={p.href}
                key={p.id}
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
          <Stack
            align={'center'}
            direction={'column'}
            h={'fit-content'}
            w={'100%'}>
            <MotionImageStack
              boxSize={'lg'}
              overflow={'hidden'}
              px={2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1 }}>
              <Image objectFit={'contain'} src={project?.image}></Image>
            </MotionImageStack>
            <MotionTextStack
              h={'fit-content'}
              w={'xl'}
              px={'2rem'}
              pt={'1rem'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1 }}>
              <Text fontSize={'md'} letterSpacing={4} textAlign={'justify'}>
                {project?.title.toUpperCase()}
              </Text>
            </MotionTextStack>
          </Stack>
        </GridItem>
      </Grid>
    </AnimatePresence>
  )
}
