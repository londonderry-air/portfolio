import { BorderBox } from '../atoms/box/border'
import { FlexBox } from '../atoms/box/flex'
import { Sentence } from '../atoms/text/common'
import { moduler } from '../../utils/styles'
import { TransformBox } from '../atoms/box/transform'
import { useEffect, useState } from 'react'
import { Post } from '../../hooks/usePost'
import { getDateText, getTimeText } from '../../utils/date'
import { CursorBox } from '../atoms/box/cursor'
import { AnimLink } from '../atoms/link/animation'
import useMediaQuery from '../../hooks/useMediaQuery'

export const BlogItem = (props: { post: Post; index: number }) => {
  const isMQ = useMediaQuery()
  const [color, setColor] = useState({
    right: isMQ ? '#ccdae1' : '#FFFFFF',
    left: '#ccdae1'
  })
  const [isShow, setShow] = useState(false)
  const postColor = props.post.custom
    ? props.post.custom.color ?? '#FFFFFF'
    : '#FFFFFF'
  useEffect(() => {
    setTimeout(() => setShow(true), props.index * 100)
  }, [])

  useEffect(() => {
    setColor({
      right: isMQ ? postColor : '#FFFFFF',
      left: postColor
    })
  }, [isMQ])

  return (
    <AnimLink href={`/blog/${props.post.slug}`} width={'100%'} color={color}>
      <CursorBox cursor={'pointer'} width={'100%'}>
        <TransformBox
          transform={isShow ? 'translateY(0)' : 'translateY(100vh)'}
          transition={1}
          width={'100%'}
        >
          <BorderBox
            borderPosition={'top'}
            borderWidth={'2px'}
            borderColor={'#D4D4D4'}
            borderStyle={'solid'}
            width={'100%'}
          >
            <FlexBox
              way={isMQ ? 'column' : 'row'}
              alignItems={isMQ ? 'flex-start' : 'center'}
              gap={'2em'}
              padding={'2em 0.5em'}
            >
              <FlexBox way={'row'} gap={'0.25em'}>
                <Sentence
                  h_space={'0.1em'}
                  weight={'400'}
                  size={moduler(-1)}
                  family="'Zen Kaku Gothic New', sans-serif"
                >
                  {new Date(props.post.release).getFullYear()}
                </Sentence>
                <Sentence
                  h_space={'0.1em'}
                  weight={'400'}
                  size={moduler(-1)}
                  family="'Zen Kaku Gothic New', sans-serif"
                >
                  {getDateText(new Date(props.post.release))}
                </Sentence>
                <Sentence
                  h_space={'0.1em'}
                  weight={'400'}
                  size={moduler(-1)}
                  family="'Zen Kaku Gothic New', sans-serif"
                >
                  {getTimeText(new Date(props.post.release))}
                </Sentence>
              </FlexBox>
              <Sentence
                size={moduler(-1)}
                weight={'500'}
                family={"'Zen Kaku Gothic New', sans-serif"}
                h_space={'0.04em'}
              >
                {props.post.title}
              </Sentence>
            </FlexBox>
          </BorderBox>
        </TransformBox>
      </CursorBox>
    </AnimLink>
  )
}
