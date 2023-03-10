
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { searchCountries, resetCountries } from '../../Redux/actions';
import "./SearchBar.css"
export default function SearchBar() {
    const [search, setSearch] = useState('')
    let dispatch = useDispatch()

    function onSubmit(e){
        e.preventDefault();
        dispatch(searchCountries(search))
    }
    function onInputChange(e){
        e.preventDefault();
        console.log(e.target.value)
        
        setSearch(e.target.value) === "" ?  
        dispatch(resetCountries):
        dispatch(searchCountries(search))
    }


  return (
    <div>
        <form onSubmit={onSubmit} className="search_bar">
            <input 
                className='input_text' 
                type="search" 
                onChange={onInputChange} 
                placeholder="Search a country" 
                value={search} 
            />
            <button className='button_submit' type="submit" value="Buscar" >
                <svg className="search_icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path 
                        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                        </path>
                    </g>
                </svg>
            </button>
        </form>
    </div>
    )
}
