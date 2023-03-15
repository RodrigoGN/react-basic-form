// import { Nav, Form } from 'react-bootstrap';
//import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Profissão</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <Button onClick={() => props.removeCharacter(index)}>Delete</Button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}


const Tabela = (props) => {
    const { characterData, removeCharacter } = props

    return (
        <Table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </Table>
    )
}

export default Tabela;