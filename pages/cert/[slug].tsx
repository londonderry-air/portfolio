import { useEffect, useState } from 'react'
import { Box } from '../../components/atoms/box/common'
import { FlexBox } from '../../components/atoms/box/flex'
import { TransformBox } from '../../components/atoms/box/transform'
import { Post } from '../../hooks/usePost'
import { _Image } from '../../components/atoms/image/common'
import useMediaQuery from '../../hooks/useMediaQuery'
import { ColorBox } from '../../components/atoms/box/color'
import { transitionState, headState } from '../../utils/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { CertArticle } from '../../components/molucules/cert-article'

export const Page = (props: { post?: Post }) => {
  const isMQ = useMediaQuery()
  const [isReady, setReadyState] = useState(false)
  const [isImgReady, setImgReadyState] = useState(false)
  const isTransitioning = useRecoilValue(transitionState)
  const setHead = useSetRecoilState(headState)

  useEffect(() => {
    if (props.post && !isTransitioning) {
      setHead({
        title: `${props.post.title} | Tomoki Shimizu`,
        ogImage: props.post.thumbnail ? props.post.thumbnail.url : './dog.png'
      })
      setTimeout(() => setReadyState(true), 150)
    }
  }, [props.post, isTransitioning])

  if (!props.post) return <></>

  return (
    <FlexBox
      way={isMQ ? 'column' : 'row'}
      width={'100%'}
      height={'100%'}
      position={isMQ ? 'absolute' : 'relative'}
    >
      <Box
        width={isMQ ? '100%' : '50%'}
        height={'100%'}
        position={'relative'}
        shrink={'0'}
      >
        <FlexBox
          width={'100%'}
          height={'100%'}
          way={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <ColorBox
            width={isMQ ? '280px' : '20vw'}
            height={isMQ ? '420px' : '30vw'}
            opacity={isImgReady ? 1 : 0}
            transition={1}
          >
            <TransformBox
              width={'100%'}
              height={'100%'}
              transform={
                isImgReady ? 'scale(1.0) ' : isMQ ? 'scale(1.0)' : 'scale(1.8)'
              }
              origin={'center'}
              overflow={'hidden'}
              radius={'10px'}
              transition={1}
            >
              <TransformBox
                width={'100%'}
                height={'100%'}
                transform={isImgReady ? 'scale(1.0)' : 'scale(0.8)'}
                transition={1}
              >
                <_Image
                  width={'100%'}
                  height={'100%'}
                  src={
                    props.post.thumbnail
                      ? props.post.thumbnail.url
                      : './dog.png'
                  }
                  fit={'cover'}
                  onLoad={(e) => {
                    console.log(e)
                    setImgReadyState(true)
                  }}
                />
              </TransformBox>
            </TransformBox>
          </ColorBox>
        </FlexBox>
      </Box>
      <Box
        width={isMQ ? '100%' : '50%'}
        height={isMQ ? '50%' : '100%'}
        shrink={'0'}
        position={'relative'}
        overflowY={isMQ ? 'visible' : 'scroll'}
      >
        <ColorBox
          width={'100%'}
          height={'100%'}
          opacity={isReady ? 1 : 0}
          transition={1}
        >
          <FlexBox
            way={'column'}
            width={'100%'}
            height={'100%'}
            padding={'10vh 5%'}
            position={'absolute'}
          >
            <CertArticle post={props.post} />
          </FlexBox>
        </ColorBox>
      </Box>
    </FlexBox>
  )
}

export default Page

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.CMS_ORIGIN}/api/post?category=cert`)
  console.log(res)
  const posts: Post[] = await res.json()

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({
  params
}: {
  params: { slug: string }
}) => {
  // const origin = process.env.SOYO_ORIGIN
  const data = await fetch(
    `${process.env.CMS_ORIGIN}/api/post${params.slug ? '/' + params.slug : ''}`
  )

  if (data.status !== 200) {
    return {
      props: {
        post: null
      },
      revalidate: 60 * 60 * 24
    }
  }

  const post: Post = await data.json()
  post.release = new Date(post.release)

  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    },
    revalidate: 60 * 60 * 24
  }
}
