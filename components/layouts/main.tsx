import { useState, useEffect } from 'react'
import { ColorBox } from '../atoms/box/color'
import { TwinLayout } from './twin'

export const MainLayout = (props: { children?: React.ReactNode }) => {
  const [isWindowExist, setWindowState] = useState(false)

  useEffect(() => {
    setWindowState(true)
  }, [])

  if (!isWindowExist) {
    return <></>
  }

  return (
    <ColorBox
      position={'relative'}
      width={'100vw'}
      height={'100vh'}
      overflow={'hidden'}
      transition={0}
      opacity={isWindowExist ? 1 : 0}
    >
      <TwinLayout>{props.children}</TwinLayout>
    </ColorBox>
  )
}
