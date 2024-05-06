import React, {useEffect, useState} from 'react'

const Ssr = ({data}) => {
    console.log(data)
   
    return (
        <div>
            Hello, {data?.name?.title} {data?.name?.last}  {data?.name?.first} 
        </div>
    )
}

export default Ssr;

export async function getServerSideProps(){
    const respones = await fetch('https://randomuser.me/api/?nat=us&randomapi');

        const data = await respones.json();

    return {
        props : {
            data:data.results[0]
        } 
    }
}