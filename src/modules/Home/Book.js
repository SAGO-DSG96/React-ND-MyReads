import React from 'react';

function Book(props) {
    // Declara una nueva variable de estado, que llamaremos "count".
    //const [count, setCount] = useState(0);

    const {data} = props;

    const handleShelfUpdate = e => {
        let newVal = e.target.value;
        props.updateShelf(this, newVal);
    };
    
    return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: data.imageLinks ? 
                `url(${data.imageLinks.thumbnail})`: `url("https://img.icons8.com/metro/52/000000/cancel-2.png")` }}></div>
                <div className="book-shelf-changer">
                    <select 
                        value={data.shelf ? data.shelf : "none"}
                        onChange={this.handleShelfUpdate}
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{data.title}</div>
                <div className="book-authors">{data.authors}</div>
            </div>
    );
}

export default Book;



