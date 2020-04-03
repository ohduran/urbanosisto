import React from "react";
import { connectHits } from 'react-instantsearch-dom';
import '../styles/index.css';


const Hits = ({ className, hits }) => (
  <ol className={`bg-orange-200 absolute md:mt-4 py-2 rounded-lg shadow-xl font-family-montserrat ${className}`} style={{ display: 'none'}}>
    {hits.map(hit => (
      <li className="px-4 py-2 rounded hover:bg-orange-500 hover:text-white text-xs md:text-sm" key={hit.objectID}>{hit.tagLine}</li>
    ))}
  </ol>
);

const SearchHits = connectHits(Hits);

export default SearchHits
