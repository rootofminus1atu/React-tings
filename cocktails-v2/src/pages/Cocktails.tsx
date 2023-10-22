import { Outlet, useLoaderData } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'

export async function loader() {
  try {
    // test search for margarita
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito'

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data)
    return data

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default function Cocktails() {
  const { drinks } = useLoaderData() as { drinks: any }

  return (
    <div>
      <SearchForm />
      <CocktailList drinks={drinks} />
      <Outlet />
    </div>
  )
}
