export interface Cocktail {
    idDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strDrink: string;
    strDrinkThumb: string;
    strGlass: string;
    strIBA: string;
    strIngredient1: string;
    strIngredient2: string;
    // Add properties for other ingredients as needed
    strInstructions: string;
    // Add properties for other language-specific instructions as needed
    strTags: string;
    // Add more properties as needed
}
  
export interface CocktailResponse {
    drinks: Cocktail[];
}