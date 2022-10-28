import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"

const Button = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: white;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    border-radius: 20px;

    transition: background-color 0.3s ease;
    transition: color 0.8s ease;

    &:hover{
        background-color: #7A7DFE;
        color: black;
        cursor: pointer;
    }
`

const Error = styled.p`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    text-align: center;
`

export default function Formulario({ setMonedas }) {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige la moneda', monedas)
    const [cripto, SelectCriptos] = useSelectMonedas('Elige la criptomoneda', criptos)


    useEffect(() => {
        consultarAPI()
    }, [])

    async function consultarAPI() {
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
        const response = await fetch(url)
        const result = await response.json()
        /*  console.log(respuesta.Data) */

        const arrayCriptos = result.Data.map(cripto => {
            return {
                nombre: cripto.CoinInfo.FullName,
                id: cripto.CoinInfo.Name
            }
        })
        /* console.log(arrayCriptos) */
        setCriptos(arrayCriptos)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if ([moneda, cripto].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            cripto
        })
    }

    return (
        <>
            {error && <Error>Debe seleccionar los campos</Error>}
            <form onSubmit={handleSubmit}>
                <SelectMonedas
                />
                <SelectCriptos
                />
                <Button
                    placeholder="Cotizar"
                    type="submit"
                />
            </form>
        </>
    )
}
