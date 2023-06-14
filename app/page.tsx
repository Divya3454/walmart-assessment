import Main from './pages'


async function getData() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()
  return (
    <Main results={data?.results} />
  );
}