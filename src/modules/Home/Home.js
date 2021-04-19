import React, {useState, useEffect}  from 'react'

import { Link } from 'react-router-dom'
import * as BookAPI from '../../BooksAPI'
import Shelf from './Shelf'

function Home(props){

    //Array object for shelves.
    const shelves = [
      {id: "currentlyReading", title: 'Currently Reading' },
      {id: "wantToRead", title: 'Want to Read'},
      {id: "read", title: 'Read'}
    ];
    
    // Declaratation useState
    const [books, setBooks] = useState([]);
    const [loading, setloading] = useState(true)

    const updateShelf = (book, updatedhelf) =>{
        BookAPI.update(book, updatedhelf)
    }


    useEffect(() => {
        BookAPI.getAll().then(book => setBooks(book)).then(setloading(false))
    }, [books, setBooks]);


    return (
        <div className="app">
        {  loading ? <p>loading...</p> : 
            <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {shelves.map((shelf) => 
                    <div key={shelf.id}>
                        <Shelf 
                          title = {shelf.title}
                          books = {  books.filter(b => b.shelf === shelf.id) }
                          onChange = { updateShelf }
                        />                        
                    </div>
                )}
            </div>
            <div className="open-search">
                <Link to="search">
                    <button>Add a Book</button>
                </Link>
            </div>
            </div>
        }
        </div>
        
    );
}

export default Home;



