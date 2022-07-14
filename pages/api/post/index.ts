import { NextApiRequest, NextApiResponse } from 'next'

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const origin = process.env.SOYO_ORIGIN
  const cmsRes = await fetch(`${origin}/api/post`, {
    method: 'GET'
  })

  if (cmsRes.status !== 200) {
    return res.status(404).json([])
  }

  const posts = await cmsRes.json()
  return res.status(200).json(posts)
}

export default handler
