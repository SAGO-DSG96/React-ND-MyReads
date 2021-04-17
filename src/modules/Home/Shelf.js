import React from 'react';
import Book from './Book';

function Shelf(props) {
    // Declara una nueva variable de estado, que llamaremos "count".
    //const [count, setCount] = useState(0);

    const {books, onChange} = props


    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">  
                    {books.map((key) => (
                            <li key={key.id}>
                                <Book 
                                data={key} 
                                onChange={onChange}/>
                            </li>
                        )
                    )}  
                </ol>
            </div>
        </div>
    );
}

export default Shelf;



