import SocialButtons from './SocialButtons'
import Image from 'next/image'

const BorderedAvatar = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-l from-accent-light to-accent-dark p-0.5 rounded-full mb-8 lg:mb-0 w-14 h-14">
      <Image
        className="rounded-full bg-white dark:bg-gray-80"
        alt="Dandi Wiratsangka S"
        src="/images/avatar.jpg"
        width={200}
        height={200}
      />
    </div>
  )
}

const Author = () => (
  <div className="flex items-center justify-between flex-col lg:flex-row">
    <div className="flex flex-col lg:flex-row items-center mb-8 lg:mb-0">
      <BorderedAvatar />
      <div className="flex lg:ml-6 text-center lg:text-left justify-center lg:justify-start flex-col">
        <h2 className="mb-1 text-base font-semibold leading-5">
          Dandi Wiratsangka S
        </h2>
        <p className="text-gray">Software Engineer</p>
      </div>
    </div>
    <SocialButtons />
  </div>
)

export default Author
