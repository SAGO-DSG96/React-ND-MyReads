import React, {useState, useEffect}  from 'react'

import { Link } from 'react-router-dom'
import * as BookAPI from '../../BooksAPI'
import Shelf from './Shelf'

function Home(props){

    const shelves = [
      {id: "currentlyReading", title: 'Currently Reading' },
      {id: "wantToRead", title: 'Want to Read'},
      {id: "read", title: 'Read'}
    ];
    
    // Declaración de una variable de estado que llamaremos "count"
    const [books, setBooks] = useState([]);

    useEffect(() => {
        BookAPI.getAll().then(book => setBooks(book))
      }, []);


    return (
        <div className="app">
            <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {shelves.map((shelf) => 
                    <div key={shelf.id}>
                        <Shelf 
                          title = {shelf.title}
                          books = {books.filter(b => b.shelf === shelf.id)}
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
        </div>
    );
}

export default Home;



