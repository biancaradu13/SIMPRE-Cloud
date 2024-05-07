import React, { useState } from "react";
import { useRouter } from "next/router";

const RecordForm = (props) => {
    const {entry, onSubmit} =props;
    const [data, setData]= useState(entry);
    const router=useRouter();

    const handleChange = (type, value) => {
        setData({...data, [type]: value})
    }

    const handleCancel = () => {
        router.push("/");
      }


 return(
    <div className="p-4">
    <div className="flex flex-col mx-auto max-w-80 border p-4 shadow-sm gap-4 w-full">

    <div>
    <label 
    htmlFor="_id" 
    className="block mb-2 text-sm font-medium text-blue-900 dark:text-pink">
        Movie id</label>
    <input 
    type="_id" 
    id="_id" 
    onChange={(e) => handleChange('_id', e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 13" required />
  </div>

    <div>
    <label 
    htmlFor="movie_title" 
    className="block mb-2 text-sm font-medium text-blue-900 dark:text-pink">
        Movie name</label>
    <input 
    type="movie_title" 
    id="movie_title" 
    //value={data.movie_title}
    onChange={(e) => handleChange('movie_title', e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: The Lord of The Rings" required />
  </div>

  <div>
    <label 
    htmlFor="title_year" 
    className="block mb-2 text-sm font-medium text-blue-900 dark:text-pink">
        Movie year</label>
    <input 
    type="title_year" 
    id="title_year" 
    //value={data.title_year}
    onChange={(e) => handleChange('title_year', e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 2002" required />
  </div>

  <div>
    <label 
    htmlFor="imdb_score" 
    className="block mb-2 text-sm font-medium text-blue-900 dark:text-pink">
        IMDB Score</label>
    <input 
    type="imdb_score" 
    id="imdb_score" 
    //value={data.imdb_score}
    onChange={(e) => handleChange('imdb_score', e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 8.8" required />
  </div>

  <div>
    <label 
    htmlFor="duration" 
    className="block mb-2 text-sm font-medium text-blue-900 dark:text-pink">
        Duration</label>
    <input 
    type="duration" 
    id="duration" 
    //value={data.duration}
    onChange={(e) => handleChange('duration', e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 3" required />
  </div>

  <div>
    <label 
    htmlFor="genre" 
    className="block mb-2 text-sm font-medium text-blue-900 dark:text-pink">
        Genre</label>
    <input 
    type="genre" 
    id="genre" 
    //value={data.genre}
    onChange={(e) => handleChange('genre', e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: Action" required />
  </div>
  <div className="flex justify-center">
  <button type="button" 
    onClick={handleCancel}
    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    Cancel</button>

    <button type="button"
    onClick={()=> onSubmit(data)}
    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    {entry?._id ? "Update" : "Create"}</button>
  </div>
  </div>    
    </div>
 )
}
 
export default RecordForm