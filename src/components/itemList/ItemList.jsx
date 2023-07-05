import Item from '../Item/Item';
import { useSearchFilter } from '../hooks';
import './ItemList.css'

import { withDataSources } from '../../data/context';
import { useEffect, useState } from 'react';

// const itemsMock = [
//     {
//         id: 1,
//         image: './recursos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg',
//         title: 'anteojos 1',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magnam iste minus ea asperiores autem.',
//         sizes: ['S', 'M'],
//         colors: ['Rojo', 'Violeta'],
//         price: 1500
//     },
//     {
//         id: 2,
//         image: './recursos/Anteojos/Anteojos.jpg',
//         title: 'anteojos 2',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magnam iste minus ea asperiores autem.',
//         sizes: ['S', 'M'],
//         colors: ['Rojo', 'Violeta'],
//         price: 5500
//     },
//     {
//         id: 3,
//         image: './recursos/Anteojos/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg',
//         title: 'anteojos 3',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magnam iste minus ea asperiores autem.',
//         sizes: ['S', 'M'],
//         colors: ['Rojo', 'Violeta'],
//         price: 1000
//     },
// ]

let ItemList = ({ dataSources }) => {
    let [items, setItems] = useState([]);

    useEffect(() => {
        (async function () {
            const aux = await dataSources.products().all();
            setItems(aux);
        })();
    });

    const filter = useSearchFilter();
    console.log(filter);

    if (filter != '' && filter != null)
        items = items.filter(val => val.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className="list-wrapper">
            <section className='list'>
                {items.map((item, i) => (
                    <Item item={item} key={i} />
                ))}
            </section>
        </div>
    )
}

ItemList = withDataSources(ItemList)

export default ItemList;
