import React from 'react'
import ResultsDescription from './ResultsDescription'
import ResultsImage from './ResultsImage'

 const ResultsList = props => {
        return (
            <div style={{border: '1px solid #ccc'}} >
                <ResultsImage />
                <ResultsDescription />
            </div>
        )
}

export default ResultsList