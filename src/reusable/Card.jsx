import React from 'react'
import { Paper ,Box,Card,CardActionArea,} from '@material-ui/core'

const Cards = () => {
    return (
        <>
            <Card component={Box} mb={2} boxShadow={5}>
    <CardActionArea style={{outline:'none',backgroundColor:'#3597FB',color:'white',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',padding:'1rem'}} component={Box}>
        <div>
        <h5>
            Something very very important of the year
        </h5>
        azizul islam
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
<p>80 of 100</p>
            <div>
<progress max="100" value="80"> 80 of 100</progress>
            </div>
        </div>
        <div>
            $ 0.001
        </div>
    </CardActionArea>
</Card>
        </>
    )
}

export default Cards
