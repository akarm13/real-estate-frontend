import React from 'react'
import {featuredProperties} from '../search/Search'
import { ListingCard } from "../../components/ListingCard";
import {Link} from 'react-router-dom'



const similarListings = featuredProperties.slice(1,4)


const SimilarListings = () => {


  return (
    <div className='flex flex-col gap-4 mt-14 '>
        
        <h2 className='text-2xl font-semibold'>Similar Listings</h2>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-x-7 gap-y-3 pt-4 ">
{similarListings.map((card)=>{
    return <Link key={card.id} to={`/houses/${card.id}`}> 
    <ListingCard {...card}  />
    </Link>
})}
</div>

    
    
    </div>
  )
}

export default SimilarListings