import * as React from "react"
import * as ReactDOM from "react-dom"
import {
    BrowserRouter, Routes, Route, useLocation,
} from "react-router-dom"

import Home from './home'

const App = React.memo(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
})

ReactDOM.render(
    <App />,
    document.getElementById("app"),
)
