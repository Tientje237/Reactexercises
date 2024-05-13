import { useState } from 'react';
import MenuData from '../data-1.js';
import Menu from './menu.jsx';

const Menulist = () => {


    const [data] = useState(MenuData);
    
    return (  
        <div >

            {data.map((menu, index) => (
                <Menu
                    key={index}
                    img={menu.img}
                    title={menu.title}
                    price={menu.price}
                    desc={menu.desc}
                />
            ))}
        </div>
    );
}

export default Menulist;