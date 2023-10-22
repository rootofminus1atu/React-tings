import { useLoaderData } from 'react-router-dom'
import { Cocktail, CocktailResponse } from '../cocktailTypes';

export async function loader({ params }: any) {
  const { cocktailId }: { cocktailId: number } = params;
  // we fetch here given the Id
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: CocktailResponse = await response.json();
    return data

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default function CocktailDetails() {
  const { drinks } = useLoaderData() as CocktailResponse
  const drink = drinks[0]
  console.log(drink)

  return (
    <div className='border'>
      <h1>{drink.strDrink}</h1>
    <img src={drink.strDrinkThumb} alt={`a ${drink.strDrink}`} width={"100px"} />
      <h3>Instruction</h3>
      <p>{drink.strInstructions}</p>
    </div>
  )
}
