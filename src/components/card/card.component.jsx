import './card.styles.css'

const Card = ({ monster: { id, name, email } }) => {
    return(
        <section key={ id } className='card-container'>
            <img
                src={ `https://robohash.org/${id + 5}?set=set2&size=180x180` }
                alt={ `monster ${name}` }
            />
            <h2>{ name }</h2>
            <p>{ email }</p>
        </section>
    )
}

export default Card;
