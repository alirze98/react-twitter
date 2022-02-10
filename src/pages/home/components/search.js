import React, { useEffect, useState } from 'react';

const Search = () => {
    const [query,setquery] = useState();
    useEffect(()=>{
        console.log("request send");

    },[query])
    return (
        <div>
            <input value={query} onChange={e=>setquery(e.target.value)} />
        </div>
    );
};

export default Search;