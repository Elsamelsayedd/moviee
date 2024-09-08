import axios from 'axios';
import React, { useState } from 'react'
import Loading from '../Loading/Loading';

export default function Search() {

    const [searchData, setSearchData] = useState([]);

    async function SearchDataHandele(eventInfo) {

        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${eventInfo.target.value}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`)
            setSearchData(data.results)
            console.log(data.results);


        } catch (error) {
            console.log(error);

        }

    }







    return (
        <>

            <div className='md:w-1/2 w-[90%]  mx-auto py-6'>
                <form className="py-4 mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onChange={(eventInfo) => SearchDataHandele(eventInfo)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search Movies" required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
                    </div>
                </form>
            </div>


            {searchData?.length ? <div className="flex flex-wrap ">

                {searchData?.map((item) => <div key={item.id} className='group my-10 mx-auto lg:w-1/3 p-8 relative overflow-hidden'>
                    <img className='group-hover:scale-150 group-hover:rotate-3 transition-all group-hover:opacity-25 duration-500' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                    <div className="layer w-full   z-30 p-8 text-white absolute top-0 left-0 right-0 bottom-0 ">
                        <p className='group-hover:translate-y-[50%] transition-all duration-500 -translate-y-[400%] text-2xl'>{item.original_title}</p>
                        <p className='group-hover:opacity-100 transition-all duration-500 opacity-0 pt-6'>{item.overview.split(' ').slice(0, 30).join(' ')}</p>
                    </div>


                </div>)}




            </div> : ''}
        </>
    )
}
