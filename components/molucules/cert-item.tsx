import { BorderBox } from '../atoms/box/border'
import { FlexBox } from '../atoms/box/flex'
import { Word } from '../atoms/text/common'
import { moduler } from '../../utils/styles'
import { CursorBox } from '../atoms/box/cursor'
import { AnimLink } from '../atoms/link/animation'
import { getMonthText } from '../../utils/date'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useEffect, useState } from 'react'

export const CertItem = (props: {
  name: string
  certId: string
  date: Date
  color: string
}) => {
  const isMQ = useMediaQuery()
  const [color, setColor] = useState({
    right: isMQ ? props.color : '#FFFFFF',
    left: props.color
  })

  useEffect(() => {
    setColor({
      right: isMQ ? props.color : '#FFFFFF',
      left: props.color
    })
  }, [isMQ])

  return (
    <AnimLink width={'100%'} href={`/cert/${props.certId}`} color={color}>
      <CursorBox cursor={'pointer'}>
        <BorderBox
          borderPosition={'bottom'}
          borderWidth={'2px'}
          borderColor={'#D4D4D4'}
          borderStyle={'solid'}
          width={'100%'}
          padding={'1.5em 0'}
        >
          <FlexBox
            way={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Word
              size={moduler(-1.5)}
              family={"'Zen Kaku Gothic New', sans-serif"}
              color={'#FFFFFF'}
              h_space={'0.1em'}
              weight={'500'}
            >
              {props.name}
            </Word>
            <Word
              size={moduler(0)}
              family={"'Zen Kaku Gothic New', sans-serif"}
              color={'#FFFFFF'}
              h_space={'0.1em'}
            >
              {getMonthText(props.date)}
            </Word>
          </FlexBox>
        </BorderBox>
      </CursorBox>
    </AnimLink>
  )
}
