import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Produtos = () => {
  const activeCategory = useState("");

  const { search } = useParams();
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    setSearchParams(search);
  }, [])

  return (
    <h1>Produtos {searchParams}</h1>
  )
}

export default Produtos;
