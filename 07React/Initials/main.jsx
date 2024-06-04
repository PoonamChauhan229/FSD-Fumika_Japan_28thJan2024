// tag,attribute {},text
let heading1=React.createElement('h1',{id:"title"},"Hello World1")
let heading2=React.createElement('h1',{id:"title"},"Hello World2")
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render([heading1,heading2])

let heading3=React.createElement("div",{id:"divTag"},[
    React.createElement("h1",{id:"divTag"},"React1"),
    React.createElement("h2",{id:"divTag"},"React2")
 ])
 const root1=ReactDOM.createRoot(document.getElementById('root1'))
//  root1.render(heading3)