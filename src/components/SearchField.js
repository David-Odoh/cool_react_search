import React, { useEffect, useState } from 'react';
import './SearchField.css';

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
            <form className='search-boxform search-box'>
                <input type="text" placeholder=" " value={searchText} onChange={updateText}/>
                <button type="reset" onClick={clearText}></button>
            </form> 

            <div>
                {searchResult
                .filter(item => {
                    if (searchResult === '') return item
                    else if (item.Title.toLowerCase().includes(searchText.toLowerCase())) return item;
                    else return null;
                }).map((val, key) => {
                    console.log(val)
                   return <div key={key}>{val.Title}</div>
                })}
            </div>
        </div>
    )
}

export default SearchFlield;