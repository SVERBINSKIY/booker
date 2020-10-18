import React from 'react'
import { useParams } from 'react-router-dom'

const RepresentativeAddRoms = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>123</div>
    )
}

export default RepresentativeAddRoms