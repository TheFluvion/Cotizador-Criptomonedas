import styled from "@emotion/styled"

const Resultado = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 40px;
`

const Texto = styled.p`
font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 130px;
`

export default function Cotizacion({ cotizado }) {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizado

    return (
        <Resultado>
            <Imagen
                src={`https://cryptocompare.com${IMAGEURL}`}
                alt="cripto"
            />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24hs: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Resultado>
    )
}
