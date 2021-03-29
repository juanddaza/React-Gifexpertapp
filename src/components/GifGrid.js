import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({category}) => {

const {data:images, loading}= useFetchGifs(category);
   

    return ( //como en el return hay dos objetos, se usa fragment
        <> 
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        {<div className="card-grid">           
                {
                    images.map(img=>(
                        <GifGriditem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
           
            </div>}
        </>
    )
}
