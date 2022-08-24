import Card from '../Cards/Card';
import './styles.scss'

interface SliderListProps {
    title: string;
    category: string[];
}

export default function SliderList({ title, category }: SliderListProps) {
    
    function handleChangeButton(id:string) {
        const ListCategory = category.map(category => {
            return document.getElementById(category)
        })
        ListCategory.forEach(li => {
            if (li?.className == 'IsActive') 
                li.classList.remove('IsActive')

            else if (li?.id==id)
                li.classList.add('IsActive')   
        })
    }

    return (

        <>
        <div className="container-slider">
            <div className="header-slider">
                <h1>{title}</h1>

                <ul className="wrap-slider">
                    {
                        category.map(category => {
                            return (
                                <li id={category}>
                                    <a
                                    href="#" 
                                    key={category}
                                    onClick={() => handleChangeButton(category)}>{category}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>

        <Card />
        </>
    )
}