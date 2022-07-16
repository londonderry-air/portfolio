import useMediaQuery from '../../hooks/useMediaQuery'
import { Post } from '../../hooks/usePost'
import { FlexBox } from '../atoms/box/flex'
import { BlogItem } from '../molucules/blog-item'

export const BlogList = (props: { posts: Post[] }) => {
  const isMQ = useMediaQuery()
  return (
    <FlexBox
      width={'100%'}
      padding={isMQ ? '0 0 20vh 0' : '0'}
      height={'fit-content'}
      overflowY={'hidden'}
      way={'column'}
    >
      {props.posts.map((p, i) => (
        <BlogItem key={i} index={i} post={p} />
      ))}
    </FlexBox>
  )
}
