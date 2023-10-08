import React, {useState} from 'react'
import SearchingForm from '../../components/SearchingForm/SearchingForm'

export default function Movies(){
    const [movie, setMuvie] = useState([])
    return(
        <div>
            <h2>Page Movies</h2>
<SearchingForm />
        </div>
    )
}