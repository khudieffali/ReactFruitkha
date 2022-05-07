import React from 'react'
import '../Search-Area/searchArea.scss'
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
const SearchArea = ({data,setData}) => {
  return (
    <div className={`search-area ${data}`}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <span onClick={e=>setData("")} className="close-btn"><DoDisturbOnOutlinedIcon/></span>
                <div className="search-bar">
                    <div className="search-bar-tablecell">
                        <h3>Search For:</h3>
                        <input type="text" placeholder="Keywords"/>
                        <button type="submit">Search<SearchIcon className='s-icon'/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SearchArea