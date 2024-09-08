import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Loading from '../Loading/Loading'

export default function Popular() {

    function getItems() {
        return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`)
    }

    let { data, isLoading } = useQuery({
        queryKey: ['nowPlaying'],
        queryFn: getItems,
        select: (data) => data.data.results
    })

    if (isLoading) {
        return <Loading />
    }

    console.log(data);



    return (
        <>
            <div className="flex flex-wrap ">

                {data?.map((item) => <div key={item.id} className='group my-10 mx-auto lg:w-1/3 p-8 relative overflow-hidden'>
                    <img className='group-hover:scale-150 group-hover:rotate-3 transition-all group-hover:opacity-25 duration-500' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                    <div className="layer w-full   z-30 p-8 text-white absolute top-0 left-0 right-0 bottom-0 ">
                        <p className='group-hover:translate-y-[50%] transition-all duration-500 -translate-y-[400%] text-2xl'>{item.original_title}</p>
                        <p className='group-hover:opacity-100 transition-all duration-500 opacity-0 pt-6'>{item.overview.split(' ').slice(0, 30).join(' ')}</p>
                    </div>


                </div>)}




            </div>

        </>
    );
}    
