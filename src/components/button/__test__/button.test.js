import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';

it("renders with out crashing", ()=>{

    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)

})

