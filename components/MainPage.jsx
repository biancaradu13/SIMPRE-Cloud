import { useEffect, useState } from "react";
import { getRecords } from "@/utils/recordsFunctions";
import React from "react";
import Spinner from "./Spinner";
import { deleteRecord } from "@/utils/recordsFunctions";
import { useRouter } from "next/navigation";

const MainPage = () => {
    const router = useRouter();
    const [data,setData]= useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRecords = async () => {
        try{
        const response = await getRecords();

        setData(response);
        setIsLoading(false);
    }
        catch(error){
    console.log(response);}     
    setIsLoading(false);
    };

    const handleDeleteRecord = async (id) => {
        try {
          const response = await deleteRecord(id);
    
          //if (response.deletedCount === 1) {
            if(response?.acknowledged) {
            const newRecords = data.filter((record) => record._id !== id);
            setData(newRecords);
          }
        } catch (error) {
          console.log(error)
        }
      };
    
      const handleUpdateRecord = (id) => {
        router.push(`/edit?id=${id}`);
      };
    
      const handleCreateRecord = () => {
        router.push(`/create`);
      }

    useEffect(()=> {
        fetchRecords();
    }, []);

    if (isLoading){
        return <Spinner/>
      }

    return(
        <div className="p-4 flex flex-wrap gap-4">
        {data?.map(record => (
            <div key={record._id} className="max-w-sm p-6 bg-pink-100 border border-pink-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
                        {record.movie_title} </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {record.title_year}
                </p>
                <p className="mb-3 font-normal text-pink-400 dark:text-pink-400">
                    {record.imdb_score + ' IMDB Score'}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {record.duration + ' minutes'}
                </p>
                <p className="mb-3 font-normal text-pink-700 dark:text-pink-400">
                    {record.genre}
                </p>
                <button type="button" 
                 onClick={() => handleUpdateRecord(record._id)}
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Update</button>
                <button type="button"
                 onClick={() => handleDeleteRecord(record._id)}
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Delete</button>
            </div>
        ))}
    </div>
    
    
    )
}


export default MainPage