import React from 'react';
import {SwiperCard} from './SwiperCard'; 

export const SwiperCardList = ( {cardList} ) => {

    const username="katarzyna-kw";

    const fetchProjects = async() => {
        return await fetch(
            `https://api.github.com/users/${username}/repos?sort=created&per_page=100` 
        )
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data[0])
        })
        };

        return (
    <div>
        <button onClick={fetchProjects}>click me</button>
        {cardList.map(card => (
        <SwiperCard {...card} />
    ))}
    </div>
)}