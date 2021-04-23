import React from 'react';
import { Link } from 'react-router-dom'

export default function Home(){
    return ( 
        <>
            <h1>Lambda Eats</h1>
            <Link 
                id = 'order-pizza' 
                to = '/pizza'>
                    <button>Make your own pizza here!</button>
            </Link>
        </>
    );
}