import React, { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
    const data = useLoaderData();
    // useEffect(() => {
    //    fetch('https://api.github.com/users/cuzitsvicky')
    //    .then(response => response.json())
    //    .then(data => {
    //     console.log(data);
    //         setData(data)
    //    }) 
    // }
    // , [])
  return (
    <div className="bg-blue-500 text-center font-bold">GitHub Followers : {data.followers}
    <img className="mx-auto mt-4 rounded-full w-32 h-32" src={data.avatar_url} alt="GitHub Avatar"/>    
    </div>
  )
}

export default GitHub

export const GitHubLoader = async () => {
    const response = await fetch('https://api.github.com/users/cuzitsvicky');
    const data = await response.json();
    return data;
}