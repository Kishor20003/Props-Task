import Childcomp from "./Childcomp"

function ParentComp(){
return(<>
    <h1>This is Parent Component</h1>
    <Childcomp message="I am Child Component"></Childcomp>
    <Childcomp message="This is How we use props in components"></Childcomp>
    </>)
}

export default ParentComp