import React from 'react'
import Grid from '../layout/grid'
import RichTextEditor from './RichTextEditor'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
           <RichTextEditor onChange={props.onChange} value={props.value}/>
        </div>
    </Grid>
)