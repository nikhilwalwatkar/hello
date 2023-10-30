import {render, screen} from '@testing-library/react'
import App from '../App'

test("checking the render",()=>{
    render(<App/>)
    let torender=screen.getByText("Hello world")
    expect(torender).toBeInTheDocument()
})

