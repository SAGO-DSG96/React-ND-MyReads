import React from 'react';

function Book(props) {

    const {data, onChange} = props;

    const handleShelfUpdate = (e) => {
        let selectorBook = e.target.value;
        onChange(data, selectorBook);
    };

    const isHaveAuthor = () => {
        if(data !==[]){
            data.authors.reduce((authorsStr, author, index) => {
                if (index === 0) {
                    return author;
                }
                return `${authorsStr}, ${author}`;
            }, '')
        }
    }

    return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: data.imageLinks ? 
                `url(${data.imageLinks.thumbnail})`: `url("https://img.icons8.com/metro/52/000000/cancel-2.png")` }}></div>
                <div className="book-shelf-changer">
                    <select 
                        value={data.shelf ? data.shelf : "none"}
                        onChange={handleShelfUpdate}
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
                <div className="book-authors">{isHaveAuthor}</div>
            </div>
    );
}

export default Book;



