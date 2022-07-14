import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { bgState, transitionState } from '../../utils/atoms'
import { ColorBox } from '../atoms/box/color'
import { TwinBox } from '../atoms/box/twin'
import { PortfolioHeader } from '../molucules/header'
import {
  getColorMobileTransition,
  getColorTransition,
  PAGE_TRANSITION_DURING
} from '../../utils/transition'
import { useRouter } from 'next/router'
import useMediaQuery from '../../hooks/useMediaQuery'

export const TwinLayout = (props: { children?: React.ReactNode }) => {
  const [color, setColor] = useRecoilState(bgState)
  const router = useRouter()
  const [isRoutePoped, setRoutePoped] = useState(false)
  const [isFrontMoving, setFrontMovingState] = useState(false)
  const [isBackMoving, setBackMovingState] = useState(false)
  const [isTransitioning, setTransitionState] = useRecoilState(transitionState)
  const isPageTransitionRef = useRef(false)
  const isMQ = useMediaQuery()

  useEffect(() => {
    if (isMQ === undefined) return

    // transition start
    setTransitionState(true)
    setFrontMovingState(true)
    setBackMovingState(false)

    // transition finish
    setTimeout(() => {
      setFrontMovingState(false)
      setBackMovingState(true)
      setRoutePoped(false)
      // when page initialized(reload or visited), change transition state on this function
      if (!isPageTransitionRef.current) {
        isPageTransitionRef.current = true
        setTransitionState(false)
      }
    }, PAGE_TRANSITION_DURING * 1000 + 300)
  }, [color])

  useEffect(() => {
    // animate when page go back or forward
    router.beforePopState(() => {
      setRoutePoped(true)
      return true
    })
  }, [])

  useEffect(() => {
    if (isMQ === undefined) return

    // initial animation
    isPageTransitionRef.current = false
    const nextColor = isMQ
      ? getColorMobileTransition(router.asPath)
      : getColorTransition(router.asPath)
    if (nextColor.left === color.left && nextColor.right === color.right) {
      return
    }
    setColor(nextColor)
  }, [isMQ])

  useEffect(() => {
    if (isRoutePoped) {
      const color = isMQ
        ? getColorMobileTransition(history.state.url)
        : getColorTransition(history.state.url)
      setColor(color)
    }
  }, [isRoutePoped])

  useEffect(() => {
    setTransitionState(false)
  }, [router.asPath])

  return (
    <>
      <PortfolioHeader />
      <TwinBox
        index={1}
        state={isFrontMoving ? 'move' : 'stop'}
        transition={PAGE_TRANSITION_DURING}
      />
      <TwinBox
        index={-1}
        state={isBackMoving ? 'move' : 'stop'}
        transition={PAGE_TRANSITION_DURING}
      />
      <ColorBox
        width={'100%'}
        height={'100%'}
        opacity={isTransitioning || isRoutePoped ? 0 : 1}
        transition={0.5}
        position={'relative'}
        overflowY={'scroll'}
      >
        {props.children}
      </ColorBox>
    </>
  )
}
