import './SearchBox.css'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
    const navigate = useNavigate();
    const onInput = (e) => navigate({
        pathname: '/',
        search: `?q=${e.target.value}`
    })

    return (
            <div className="serch-box-wrapper">
                <input
                    type="text"
                    name=""
                    className="serch-box"
                    placeholder="Tu busqueda"
                    onInput={onInput}
                />
            </div>
    );
};

export default SearchBox;