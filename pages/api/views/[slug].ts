import { NextApiRequest, NextApiResponse } from 'next'
import { db } from 'lib/firebase'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (process.env.NODE_ENV === 'development') {
    return res.status(200).json({ total: 999 })
  }

  if (!db) {
    throw new Error('Firebase has not been initialized')
  }

  const slug = req.query.slug as string
  if (req.method === 'POST') {
    const ref = db.ref('views').child(slug)
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1
      }

      return currentViews + 1
    })

    return res.status(200).json({
      total: snapshot.val()
    })
  }

  if (req.method === 'GET') {
    const snapshot = await db.ref('views').child(slug).once('value')
    const views = snapshot.val()

    return res.status(200).json({ total: views })
  }

  return res.status(200).json({ total: 1998 })
}
