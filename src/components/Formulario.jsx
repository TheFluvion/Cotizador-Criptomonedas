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

export default function Formulario() {

    const [SelectMonedas] = useSelectMonedas('Elige la moneda', monedas)

    return (
        <>
            <form>
                <SelectMonedas
                />
                <Button
                    placeholder="Cotizar"
                    type="submit"
                />
            </form>
        </>
    )
}