
import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

  const {gif , loading , fetchData} = useGif();

 
  return (
    <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px] p-5">
      <h1 className="mt-[2xl] text-3xl uppercase underline font-bold">Random Gif</h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} width='450' height='400'/>)
      }
      <button onClick={() => fetchData()}
       className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20]"
       >
        Generate
      </button>
    </div>
  )
}

export default Random