import React from 'react'
import {Link} from 'react-router-dom'

type Props = {
	listElements: Array<string>
}

function renderListElements(listArray: Array<string>) {
    return listArray.map((listName: string) => {
        return(
            <li key={listName}><Link to={`/${listName}`}>{listName}</Link></li>
        )
    })
}

const List = ({listElements}: Props) => {

	return(
			renderListElements(listElements)
	)
}

export default List
