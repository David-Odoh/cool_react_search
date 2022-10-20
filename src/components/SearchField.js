import React, { useEffect, useState } from 'react';
import './SearchField.css';
import MovieCard from './movieCard';

const SearchFlield = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const updateText = (event) => {
        console.log(event.target.value)
        setSearchText(event.target.value) 
    }

    const clearText = () => setSearchText('');

    const getData = () => {
        fetch('movies.json',
        {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
        ).then(data => {
            console.log(data);
            return data.json()
        }).then((jsonData) =>  {
            console.log(jsonData);
            setSearchResult(jsonData);
        })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <form className='search-box'>
                <input type="text" placeholder=" " value={searchText} onChange={updateText}/>
                <button type="reset" onClick={clearText}></button>
            </form> 

            <div className='movie-section'>
                {searchResult
                .filter(item => {
                    if (searchResult === '') return item
                    else if (item.Title.toLowerCase().includes(searchText.toLowerCase())) return item;
                    else return null;
                }).map((val, key) => {
                    console.log(val)
                   return <MovieCard key={key} props={val}/>
                })}
            </div>
        </div>
    )
}

export default SearchFlield;