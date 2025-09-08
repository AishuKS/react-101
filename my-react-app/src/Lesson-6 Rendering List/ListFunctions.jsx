import './index.css'
import PropTypes from 'prop-types'
function ListFunctions(props){
    const category = props.category
    const itemList = props.items;

    const listItem = itemList.map((item) => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>)
    return(
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItem}</ol>
        </>
    )
}

ListFunctions.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.shape()),
    category: PropTypes.string
}
export default ListFunctions