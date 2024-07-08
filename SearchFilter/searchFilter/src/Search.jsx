import React, { useState } from 'react'
import { TextField, Typography } from '@mui/material'

export default function Search() {
    const [input, setInput] = useState('');
    const [search, setSearch] = useState(['apple', 'banana', 'orange', 'papaya', 'pineapple', 'watermelon', 'mango']);
    const items = search.filter((item) => item.includes(input));
    return (
        <div className='box' style={{ width: '50%', height: '500px', margin: '50px auto', borderRadius: '15px', textAlign: 'center', padding: '20px 0' }}>
            <TextField value={input} onChange={(e) => setInput(e.target.value)} label='Search Fruit' variant='outlined' ></TextField>
            <ul style={{ textAlign: 'center' }}>
                {items.map((e, i) => {
                    return <li onClick={(e) => setInput(e.target.textContent)} style={{ listStyle: 'none', fontWeight: '600', cursor: 'pointer', margin: '5px 0' }} key={i}>{e}</li>
                })}
            </ul>
        </div>
    )
}
