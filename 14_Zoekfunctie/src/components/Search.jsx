const Search = ({ children }) => {

    const handleChange = (e) => {
        e.preventDefualt();
        setSearchInput(e.target.value);
    };

    return (
        <div className="search">
            <input
            type="text"
            placeholder="Zoek een titel op"
            onChange={handleChange}
            value={searchInput}
            name="search"
            />
        </div>
    );
    
    }
    
    export default Search;