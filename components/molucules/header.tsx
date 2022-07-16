import useMediaQuery from '../../hooks/useMediaQuery'
import { moduler } from '../../utils/styles'
import { getColorTransition } from '../../utils/transition'
import { FlexBox } from '../atoms/box/flex'
import { AnimLink } from '../atoms/link/animation'
import { MainH } from '../atoms/text/common'

export const PortfolioHeader = () => {
  const isMQ = useMediaQuery()
  return (
    <FlexBox
      width={'100%'}
      way={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      padding={isMQ ? '1em' : '1em 2em'}
      position={'absolute'}
      zIndex={'2'}
    >
      <MainH size={moduler(-1)}>
        <AnimLink
          href={'/'}
          color={getColorTransition('/')}
          font={{ weight: '600', size: moduler(-1) }}
        >
          TOMOKI SHIMIZU
        </AnimLink>
      </MainH>
      <FlexBox
        way={'row'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        gap={'1em'}
      >
        <AnimLink
          href={'/blog'}
          color={getColorTransition('/blog')}
          font={{ weight: '600', size: moduler(-1) }}
        >
          BLOG
        </AnimLink>
        <AnimLink
          href={'/about'}
          color={getColorTransition('/about')}
          font={{ weight: '600', size: moduler(-1) }}
        >
          ABOUT
        </AnimLink>
      </FlexBox>
    </FlexBox>
  )
}
