import styled from "@emotion/styled"

const Label = styled.label`
    color: white;
`

export default function useSelectMonedas(label, opciones) {

    const SelectMonedas = () => (
        <>
            <Label htmlFor="">{label}</Label>
            <select name="" id="">
                <option value="">Seleccione</option>
                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </select>
        </>
    )

    return [SelectMonedas]
}