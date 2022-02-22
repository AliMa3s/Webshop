import React from 'react';
import ListItem from './ListItem';

const HomePage = (props) => {
    const {items} = props;

    return (
        <div className="HomePage">
            <h1>Welkom bij Ali's Webshop</h1>
            <p>Dit is een eindopdracht van web 3. Een basic webshop met sql server waar u kan producten bestellen. De data wordt uitgevraagd en opgeslaan in de databank.</p>
            <p>Hier een lijst van de gebruikte technologieën:</p>
            <ul>
                <ListItem items={items}/>
            </ul>
        </div>
    )
}

export default HomePage;
