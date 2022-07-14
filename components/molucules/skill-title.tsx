import { moduler } from '../../utils/styles'
import { BorderBox } from '../atoms/box/border'
import { Word } from '../atoms/text/common'

export const SkillTitle = (props: { children: string }) => {
  return (
    <BorderBox
      borderPosition={'bottom'}
      borderWidth={'2px'}
      borderColor={'#FFFFFF'}
      borderStyle={'solid'}
      width={'100%'}
      padding={'0 0 6px 0'}
      margin={'0 0 1em 0'}
    >
      <Word
        size={moduler(-2)}
        family={"'Zen Kaku Gothic New', sans-serif"}
        color={'#FFFFFF'}
        h_space={'0.14em'}
        weight={'500'}
      >
        {props.children}
      </Word>
    </BorderBox>
  )
}
