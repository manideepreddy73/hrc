
import { Table } from '@mui/material'
import React from 'react'

export default function useTable(records, headCells) {
    const TlbContainer = props => (
        <Table>
            {props.children}
        </Table>
    )
    return {
        TlbContainer
    }
}
