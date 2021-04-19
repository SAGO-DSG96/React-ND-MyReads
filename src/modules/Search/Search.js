import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'
import Book from '../../modules/Home/Book'
import * as BookAPI from '../../BooksAPI'


function Search(props){

    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [booksInShelf, setBooksInShelf] = useState([]);
    const [loading, setloading] = useState(true)


    const updateShelf = (book, updatedhelf) =>{
        BookAPI.update(book, updatedhelf)
    }

    useEffect(() => {
        if(search !== ''){
             BookAPI.search(search, 20).then((listbook) => {
                //if call returns empty/error set booksQuery prop to empty
                if (listbook !== undefined && listbook.error !== "empty query") {
                    BookAPI.getAll().then(b => setBooksInShelf(b));

                    listbook.map((result) => {
                        booksInShelf.forEach((book) => {
                          if (book.id === result.id) 
                          result.shelf = book.shelf;
                        });
                        return result;
                      });

                    setBooks(listbook);
                } else {
                    setBooks([]);
                }
            })
        }else{
            setBooks([]);
            setloading(false)
        }
    },[search, setSearch, booksInShelf])

    return(
        <div className="app">
            <div className="search-books">
                <div className="search-books-bar">
                <Link to='/'><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by title or author"/>
                </div>
                </div>
                <div className="search-books-results">
                {loading? <p>loading..</p> :
                <ol className="books-grid">
                    {
                        books.map((key) => (
                            <li key={key.id}>
                                <Book 
                                data={key} 
                                onChange={updateShelf}/>
                            </li>
                        )
                    )}
                </ol>
                }
                </div>
            </div>
        </div>
    );
}

export default Search
