import { useTheme } from "next-themes";
import tw from "twin.macro";
import Head from "next/head";

const Index = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>

      <Head>
        <title>Hello Twin.marco 👋</title>
        <meta name="description" content="Write tailwindcss in style-components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={[tw`text-center mt-20`]}>
        <h1 css={[tw`capitalize text-4xl dark:text-blue-500 text-blue-600 font-bold`]}>
          hello {theme} mode
        </h1>
        <div>
          The current theme is: {theme}
          <div>
            <Button onClick={() => setTheme("light")}>go light</Button>
          </div>
          <div>
            <Button onClick={() => setTheme("dark")}>go dark </Button>
          </div>
        </div>
      </div>
    </>

  );
};

export default Index;


const Button = tw.button`
  capitalize font-semibold text-2xl border-2 px-5 my-2 rounded border-blue-600 dark:border-blue-500
`;