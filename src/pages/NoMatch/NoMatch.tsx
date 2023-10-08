import {Link} from 'react-router-dom'
import { Router } from '../../data/routes'

export default function NoMatch(){
    return (
        <div>
            <Link to={Router.Home}>Go Home page</Link>
        </div>
    )
}