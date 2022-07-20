import { NextApiRequest, NextApiResponse } from 'next'

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query
  const category = query.category
  const origin = process.env.SOYO_ORIGIN
  const cmsRes = await fetch(
    category ? `${origin}/api/post?category=${category}` : `${origin}/api/post`,
    {
      method: 'GET'
    }
  )

  if (cmsRes.status !== 200) {
    return res.status(404).json([])
  }

  const posts = await cmsRes.json()
  return res.status(200).json(posts)
}

export default handler
