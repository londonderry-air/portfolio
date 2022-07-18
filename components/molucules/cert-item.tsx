import { BorderBox } from '../atoms/box/border'
import { FlexBox } from '../atoms/box/flex'
import { Word } from '../atoms/text/common'
import { moduler } from '../../utils/styles'
import { CursorBox } from '../atoms/box/cursor'
import { AnimLink } from '../atoms/link/animation'

export const CertItem = (props: {
  name: string
  certId: string
  date: string
  color: string
}) => {
  return (
    <AnimLink
      width={'100%'}
      href={`/cert/${props.certId}`}
      color={{ right: '#FFFFFF', left: props.color }}
    >
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
              {props.date}
            </Word>
          </FlexBox>
        </BorderBox>
      </CursorBox>
    </AnimLink>
  )
}
