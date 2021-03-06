import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { io } from 'socket.io-client';
import { Example } from '@/components/example';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { decrement, increment } from '@/store/counter';
import axios from '@/utils/axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();
  const { locale } = useRouter();
  const socket = io({
    transports: ['websocket', 'polling']
  });
  socket.emit("hello", "world");

  useEffect(() => {
    axios.get('https://no-disposable.email/check/sharklasers.com').then(console.log);
  }, [])
  
  return (
    <>
      <i className="fa-regular fa-alien-8bit"></i>
      <Example />
      <Link href="/example">Example Page</Link>
      <h1>Redux</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {

  } as any;
}