import React from 'react'

const ListItem = (props) => {
    const {items} = props;

    return (
        <div className="ListItem">
            {items.map(item => <li key={item.id}>{item.name}</li>)}
        </div>
    )
}

export default ListItem;
