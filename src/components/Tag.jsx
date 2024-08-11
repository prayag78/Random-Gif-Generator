
import React , {useState} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

  const [tag, setTag] = useState('car');
  const {gif , loading , fetchData} = useGif(tag);

  return (
    <div className="w-1/2 h-[450] bg-blue-500 mx-auto rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px] p-5">
      <h1 className="mt-[2xl] text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} width='450' height='400'/>)
      }

      <input
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20] text-center"
        onChange={(e) => {setTag(e.target.value)}}
        value={tag}
      />



      <button onClick={() => {fetchData(tag)}}
       className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20]"
       >
        Generate
      </button>
    </div>
  )
}

export default Tag