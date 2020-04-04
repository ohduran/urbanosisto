import React from "react";
import { Link } from "gatsby";
import { connectHits, PoweredBy } from 'react-instantsearch-dom';

import '../styles/index.css';


const Hits = ({ className, hits }) => (
  <ol className={`bg-orange-200 absolute z-10 mt-8 py-2 rounded-lg shadow-xl font-family-montserrat ${className}`} style={{ display: 'none'}}>
    {hits.map(hit => (
      <li className="px-4 py-2 rounded text-xs md:text-sm hover:bg-orange-500 hover:text-white" key={hit.objectID}>
        <Link to={`items/${hit.slug}`}>{hit.tagLine}</Link>
      </li>
    ))}
    <li className="px-4 py-2 rounded text-xs"
      key={'algolia'}>
      <PoweredBy />
    </li>
  </ol>
);

const SearchHits = connectHits(Hits);

export default SearchHits
