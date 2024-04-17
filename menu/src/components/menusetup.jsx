import menu from '../data-1.js';

function Menusetup() {
    return (

        <>
            {menu.map(function(item) {
                return (
                    <div key={item.id} classname='menuLayout'>
                        <img src={item.img} alt={item.title} />
                        <div classname='text'>
                            <h2>{item.title}</h2>
                            <p className='price'>${item.price}</p>
                        </div>
                        <p className='desc'>{item.desc}</p>
                    </div>
                );
            })}
        </>
    )
}

export default Menusetup;