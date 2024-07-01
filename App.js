/*
<div id ="parent" >

    <div id="child1">
       <h1>im h1 tag</h1>
       <h2>im  h1 tag</h2>
    </div>


    <div id="child2">
   
       <h1>im h2 tag</h1>
       <h2>im h2 tag</h2>
    </div>

    </div>

   

</div>
*/
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id :"child1"},

        [React.createElement("h1",{},"iam an h1 tag"),React.createElement("h2",{},"iam an h2 tag second")]
    ),React.createElement("div",{id :"child2"},

        [React.createElement("h1",{},"iam an h1-2 tag"),React.createElement("h2",{},"iam an h2-2 tag second")]
    ),
]
);

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


