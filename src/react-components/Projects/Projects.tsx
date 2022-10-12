import { useEffect, useRef } from 'react'
import { Stack } from '@chakra-ui/react'
import gsap from 'gsap'
import DetailProject from './DetailProject'

export default function Projects() {
  const titleRef = useRef(null)

  useEffect(() => {
    const text1 = titleRef.current
    const tl = gsap.timeline({
      defaults: { duration: 1, stagger: 0.5, ease: 'power3.inOut' }
    })
    tl.fromTo(text1, { opacity: 0 }, { opacity: 1 })
  }, [])

  return (
    <Stack
      ref={titleRef}
      align={'start'}
      justify={'center'}
      w={'100%'}
      h={'100%'}>
      <DetailProject />
    </Stack>
  )
}
