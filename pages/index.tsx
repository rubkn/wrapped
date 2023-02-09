import useSWR from 'swr';
import fetcher from '@lib/fetcher';

const Home = () => {
  const { data, isLoading, error } = useSWR('/api/tracks', fetcher);
  console.log(data);

  return <main>hello from index</main>;
};

export default Home;
