import { BorderBox } from '../atoms/box/border'
import { FlexBox } from '../atoms/box/flex'
import { Word } from '../atoms/text/common'
import { moduler } from '../../utils/styles'

export const SkillItem = (props: { skill: string; status: string }) => {
  return (
    <BorderBox
      borderPosition={'bottom'}
      borderWidth={'2px'}
      borderColor={'#B5B8C4'}
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
          {props.skill}
        </Word>
        <Word
          size={moduler(-1.5)}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={'#FFFFFF'}
          h_space={'0.1em'}
        >
          {props.status}
        </Word>
      </FlexBox>
    </BorderBox>
  )
}
