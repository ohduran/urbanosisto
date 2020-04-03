import React from "react";
import { connectHits } from 'react-instantsearch-dom';
import '../styles/index.css';


const Hits = ({ className, hits }) => (
  <ol className={`ais-Hits ${className}`} style={{ display: 'none'}}>
    {hits.map(hit => (
      <li key={hit.objectID}>{hit.tagLine}</li>
    ))}
  </ol>
);

const SearchHits = connectHits(Hits);

export default SearchHits
