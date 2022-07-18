import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { BorderBox } from '../components/atoms/box/border'
import { FlexBox } from '../components/atoms/box/flex'
import { Sentence, Word } from '../components/atoms/text/common'
import { UpslideSentence } from '../components/atoms/text/upslide'
import { SkillItem } from '../components/molucules/skill-item'
import { SkillTitle } from '../components/molucules/skill-title'
import useMediaQuery from '../hooks/useMediaQuery'
import { moduler } from '../utils/styles'
import { transitionState, headState } from '../utils/atoms'
import { CertItem } from '../components/molucules/cert-item'

export const Page = () => {
  const [isLine1Show, setLine1Show] = useState(false)
  const [isLine2Show, setLine2Show] = useState(false)
  const [isLine3Show, setLine3Show] = useState(false)
  const [isLine4Show, setLine4Show] = useState(false)
  const isTransitioning = useRecoilValue(transitionState)
  const isMQ = useMediaQuery()
  const setHead = useSetRecoilState(headState)

  useEffect(() => {
    if (!isTransitioning) {
      setHead({ title: 'ABOUT | Tomoki Shimizu', ogImage: './dog.png' })
      setTimeout(() => setLine1Show(true), 100)
      setTimeout(() => setLine2Show(true), 200)
      setTimeout(() => setLine3Show(true), 300)
      setTimeout(() => setLine4Show(true), 400)
    }
  }, [isTransitioning])

  return (
    <FlexBox
      way={'column'}
      width={'100%'}
      height={'100%'}
      position={'absolute'}
    >
      <FlexBox
        way={'column'}
        width={'100%'}
        height={'100vh'}
        padding={isMQ ? '1em' : `0 ${100 / 12}vw`}
        shrink={'0'}
        alignItems={'flex-start'}
        justifyContent={'center'}
        gap={'30px'}
      >
        <UpslideSentence
          size={isMQ ? `${100 / 13}vw` : '6vw'}
          weight={'600'}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={'#FFFFFF'}
          v_space={'0.8em'}
          h_space={'0.1em'}
          isShow={isLine1Show}
          deg={'10'}
        >
          HELLO,WORLD
        </UpslideSentence>
        <UpslideSentence
          size={isMQ ? `${100 / 13}vw` : '6vw'}
          weight={'600'}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={'#FFFFFF'}
          v_space={'0.8em'}
          h_space={'0.1em'}
          isShow={isLine2Show}
          deg={'-10'}
        >
          I’M INTERESTED IN
        </UpslideSentence>
        <UpslideSentence
          size={isMQ ? `${100 / 13}vw` : '6vw'}
          weight={'600'}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={'#FFFFFF'}
          v_space={'0.8em'}
          h_space={'0.1em'}
          isShow={isLine3Show}
          deg={'20'}
        >
          CREATE SOMETHING
        </UpslideSentence>
        <UpslideSentence
          size={isMQ ? `${100 / 13}vw` : '6vw'}
          weight={'600'}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={'#FFFFFF'}
          v_space={'0.8em'}
          h_space={'0.1em'}
          isShow={isLine4Show}
          deg={'-20'}
        >
          WITH PROGRAMMING
        </UpslideSentence>
      </FlexBox>
      <FlexBox
        way={'column'}
        padding={isMQ ? '10vh 1em 0 1em' : `10vh ${100 / 12}vw 0 ${100 / 4}vw`}
        width={'100%'}
      >
        <BorderBox
          borderPosition={'bottom'}
          borderWidth={'3px'}
          borderColor={'#FFFFFF'}
          borderStyle={'solid'}
          width={'100%'}
          padding={'0 0 6px 0'}
          margin={'0 0 2em 0'}
        >
          <Word
            size={moduler(-1)}
            family={"'Zen Kaku Gothic New', sans-serif"}
            color={'#FFFFFF'}
            h_space={'0.1em'}
            weight={'600'}
          >
            WHO ARE YOU?
          </Word>
        </BorderBox>
        <FlexBox way={'column'} gap={'1em'}>
          <Sentence
            size={moduler(-1)}
            weight={'500'}
            family={"'Zen Kaku Gothic New', sans-serif"}
            color={'#FFFFFF'}
            h_space={'0.1em'}
            v_space={'2em'}
          >
            {`普段の業務ではエクセルで何かしらのドキュメントを書いたりしていますが,\nコードを書いたりして何か作ることが好きな千葉県民です。\n主に Webのフロントエンド周りを書いたりしていますが、\nいろんな分野を触って楽しんだりしています。`}
          </Sentence>
        </FlexBox>
      </FlexBox>
      <FlexBox
        way={'column'}
        padding={isMQ ? '4em 1em' : `10vh ${100 / 12}vw 0 ${100 / 4}vw`}
        width={'100%'}
        gap={'4em'}
      >
        <BorderBox
          borderPosition={'bottom'}
          borderWidth={'3px'}
          borderColor={'#FFFFFF'}
          borderStyle={'solid'}
          width={'100%'}
          padding={'0 0 6px 0'}
        >
          <Word
            size={moduler(-1)}
            family={"'Zen Kaku Gothic New', sans-serif"}
            color={'#FFFFFF'}
            h_space={'0.1em'}
            weight={'600'}
          >
            TECH
          </Word>
        </BorderBox>
        <FlexBox
          way={'column'}
          width={'100%'}
          padding={isMQ ? '0 0 15vh 0' : '0 0 15vh 20vw'}
          gap={'4em'}
        >
          <FlexBox way={'column'} width={'100%'}>
            <SkillTitle>LANGUAGE</SkillTitle>
            <SkillItem skill={'Typescript'} status={'作りたいもの作れる'} />
            <SkillItem skill={'Swift'} status={'簡単なアプリを作れる'} />
            <SkillItem skill={'Python'} status={'勉強中'} />
          </FlexBox>
          <FlexBox way={'column'} width={'100%'}>
            <SkillTitle>FRAMEWORK</SkillTitle>
            <SkillItem skill={'Nextjs'} status={'基本メインで使う'} />
            <SkillItem skill={'React'} status={'触ったことある'} />
            <SkillItem skill={'Angular'} status={'バイトで触っていた'} />
            <SkillItem skill={'django'} status={'バイトで触っていた'} />
            <SkillItem skill={'frourio'} status={'触ったことある'} />
          </FlexBox>
          <FlexBox way={'column'} width={'100%'}>
            <SkillTitle>SERVERSIDE</SkillTitle>
            <SkillItem skill={'Firestore'} status={'簡単なアプリを作れる'} />
            <SkillItem
              skill={'Firebase Authentication'}
              status={'簡単なアプリを作れる'}
            />
            <SkillItem
              skill={'Firebase Cloud Storage'}
              status={'簡単なアプリを作れる'}
            />
            <SkillItem skill={'AWS(S3, EC2)'} status={'触ったことある'} />
            <SkillItem
              skill={'GCP（Cloud Storage）'}
              status={'触ったことある'}
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox
        way={'column'}
        padding={isMQ ? '4em 1em' : `10vh ${100 / 12}vw 0 ${100 / 4}vw`}
        width={'100%'}
        gap={'4em'}
      >
        <BorderBox
          borderPosition={'bottom'}
          borderWidth={'3px'}
          borderColor={'#FFFFFF'}
          borderStyle={'solid'}
          width={'100%'}
          padding={'0 0 6px 0'}
        >
          <Word
            size={moduler(-1)}
            family={"'Zen Kaku Gothic New', sans-serif"}
            color={'#FFFFFF'}
            h_space={'0.1em'}
            weight={'600'}
          >
            CERTIFICATION
          </Word>
        </BorderBox>
        <FlexBox way={'column'} width={'100%'} gap={'1em'}>
          <CertItem
            name={'基本情報技術者'}
            certId={'fe'}
            date={'2018-10'}
            color={'#80AC7F'}
          />
          <CertItem
            name={'CSSWinner Nominee'}
            certId={'csswinner_001'}
            date={'2022-02'}
            color={'#F5C47C'}
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default Page
