import { useRecoilValue } from 'recoil'
import { FlexBox } from '../components/atoms/box/flex'
import { transitionState } from '../utils/atoms'
import { useEffect, useState } from 'react'
import { UpslideSentence } from '../components/atoms/text/upslide'
import { pallet } from '../utils/color'
import useMediaQuery from '../hooks/useMediaQuery'

export const Page = () => {
  const isMQ = useMediaQuery()
  const isTransitioning = useRecoilValue(transitionState)
  const [isLine1Show, setLine1Show] = useState(false)
  const [isLine2Show, setLine2Show] = useState(false)

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setLine1Show(true), 100)
      setTimeout(() => setLine2Show(true), 200)
    }
  }, [isTransitioning])

  return (
    <FlexBox
      width={'100%'}
      height={'100%'}
      way={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <FlexBox
        way={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'1em'}
      >
        <UpslideSentence
          size={isMQ ? `12vw` : '6vw'}
          weight={'600'}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={pallet.black}
          v_space={'0.8em'}
          h_space={'0.1em'}
          isShow={isLine1Show}
          deg={'10'}
        >
          HELLO
        </UpslideSentence>
        <UpslideSentence
          size={isMQ ? `12vw` : '6vw'}
          weight={'600'}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={pallet.black}
          v_space={'0.8em'}
          h_space={'0.1em'}
          isShow={isLine2Show}
          deg={'10'}
        >
          PORTFOLIO
        </UpslideSentence>
      </FlexBox>
    </FlexBox>
  )
}

export default Page
