'use client'

import { ComponentPropsWithoutRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function LazyVideo({
  src: _src,
  ...props
}: ComponentPropsWithoutRef<'video'>) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const src = inView ? _src : undefined

  // eslint-disable-next-line jsx-a11y/media-has-caption
  return <video ref={ref} src={src} {...props} />
}
