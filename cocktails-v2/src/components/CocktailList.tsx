import CocktailSummary from "./CocktailSummary"

export default function CocktailList({ drinks }: {drinks:any[]}) {
  return (
    <div>
      {
        drinks.map(drink => {
          return <CocktailSummary drink={drink} key={drink.idDrink}/>
        })
      }
    </div>
  )
}
