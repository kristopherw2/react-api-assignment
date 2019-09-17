import React from 'react'

const PrintType = props => {
    return (
        <>
            <label htmlFor="print-drop-down" style={{margin:'3px'}}>Print Type:</label>
            <select id='print-drop-down'style={{margin:'3px'}}>
                <option value="all"> all</option>
                <option value="books"> books</option>
                <option value="magazines"> magazines</option>
            </select>
        </>
    )
   }

export default PrintType