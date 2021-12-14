import Head from 'next/head'
import tw from 'twin.macro'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Hello Twin.marco 👋</title>
        <meta name="description" content="Write tailwindcss in style-components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={[tw`text-7xl font-bold`]}>
        Hello
      </div>
    </div>
  )
}
