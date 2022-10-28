import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

export default function App() {
  const [monedas, setMonedas] = useState({})
  const [cotizado, setCotizado] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      cotizarCripto()
    }
  }, [monedas])

  async function cotizarCripto() {
    setCotizado({})
    setLoading(true)
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.cripto}&tsyms=${monedas.moneda}`

    const response = await fetch(url)
    const result = await response.json()

    setCotizado(result.DISPLAY[monedas.cripto][monedas.moneda])
    setLoading(false)
  }

  return (
    <>
      <Contenedor>
        <Imagen
          src={ImagenCripto}
          alt='imagenCripto'
        />
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>
          <Formulario
            setMonedas={setMonedas}
          />

          {loading && <Spinner />}
          {
            cotizado.PRICE &&
            <Cotizacion
              cotizado={cotizado}
            />
          }
        </div>
      </Contenedor>
    </>
  )
}
