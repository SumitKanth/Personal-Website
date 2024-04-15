import React from 'react';
import notFoundPage from '../assets/notFound.png';

const NotFound = () => {
    return (
        <>
            <div className="notFound">
                <img src={notFoundPage} alt="not_found_page" />
            </div>
        </>
    )
}

export default NotFound