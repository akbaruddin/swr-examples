import Head from "next/head";
import useSWR from "swr";

const URL = "https://jsonplaceholder.typicode.com/posts";
const fetcher = (url) => fetch(url).then((res) => res.json());

function Posts() {
  const { data, error } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>;

  return (
    <div className="container">
      {data.map((list) => (
        <div key={list.id} className="list">
          <p>{list.title}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js and SWR: Basic</title>
        <meta name="description" content="Basic of Next.js and SWR" />
        <link
          rel="icon"
          type="image/png"
          href="https://user-images.githubusercontent.com/15226979/139421766-d6d91451-0e5a-4762-ad9f-0776e7e57187.png"
        />
      </Head>

      <main>
        <Posts />
      </main>
    </div>
  );
}
