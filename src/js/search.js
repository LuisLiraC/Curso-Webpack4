export default async function search(id) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json())
  return pokemon
}

