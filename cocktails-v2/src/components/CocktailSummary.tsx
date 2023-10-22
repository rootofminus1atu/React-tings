import { Link } from 'react-router-dom'

export default function CocktailSummary({ drink }: {drink:any}) {

  return (
    <div>
      <h2>{drink.strDrink}</h2>
      <Link to={drink.idDrink}>go to drink</Link>
    </div>
  )
}
