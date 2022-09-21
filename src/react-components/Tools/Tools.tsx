import {
  Grid,
  GridItem,
  Tag,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box
} from '@chakra-ui/react'

export default function Tools() {
  return (
    <Grid
      h={'-webkit-fit-content'}
      p="20px"
      rounded={'1rem'}
      templateRows="repeat(2, 0.5fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}>
      <GridItem
        p="10px"
        colSpan={2}
        bg="blackAlpha.300"
        h={'250px'}
        rounded={'1rem'}>
        <Tabs>
          <TabList>
            <Tab _focus={{ color: 'primary.500' }} _selected={{ color: 'primary.500' }}>Frontend</Tab>
            <Tab _focus={{ color: 'primary.500' }} _selected={{ color: 'primary.500' }}>Backend</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Text fontSize={'xl'}>
                | React | Redux | Zustand | Wouter | React-Router | Vite
              </Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize={'xl'}>
                | Node | TypeScript | Express | Fastify | Prisma | Mongoose |
                Sequelize | Python | Django
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2}>
        <Box h="100%" w="100%" bg="#333" rounded="1rem"></Box>
      </GridItem>
      <GridItem
        p="10px"
        colSpan={2}
        bg="blackAlpha.300"
        h={'-webkit-fit-content'}
        rounded={'1rem'}>
        <Text as={'p'} fontSize={'xl'} textAlign={'justify'}>
          Proactive, persevering and detail-oriented. Focused on my professional
          growth and improving my hard and soft skills. Always looking for new
          challenges and knowledge. I am also an{' '}
          <Tag size={'lg'}>industrial product designer.</Tag> I like to create
          3D models using Blender.
        </Text>
      </GridItem>
    </Grid>
  )
}
