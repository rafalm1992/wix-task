import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let initState = {
    treeData: [
      {
        name: "Lorem",
        children: [
          {
            name: "Ipsum",
            children: []
          },
          {
            name: "Dolor",
            children: [
              {
                name: "Orci",
                children: [
                  {
                    name: "Quis",
                    children: [
                      {
                        name: "Odio",
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: "Sit",
            children: [
              {
                name: "Amet",
                children: []
              },
              {
                name: "Consectetur",
                children: []
              }
            ]
          },
          {
            name: "Adipiscing",
            children: [
              {
                name: "Elit",
                children: [
                  {
                    name: "Vestibulum",
                    children: []
                  },
                  {
                    name: "Vitae",
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  const [data, setData] = useState(initState);
  // This function handles arrays and objects
  // function eachRecursive(obj) {
  //   for (var k in obj) {
  //     if (typeof obj[k] == "object" && obj[k] !== null) eachRecursive(obj[k]);
  //     else {
  //       return console.log(k);
  //     }
  //   }
  // }
  // eachRecursive(initState.treeData[0]);

  function listHtml(children) {
    return (
      <ul>
        {children.map(node => {
          if (node.children.length > 0) {
            listHtml(node.children);
          }
          return <li key={node}>k</li>;
        })}
      </ul>
    );
  }

  return <div className="App">{listHtml(data.treeData)}</div>;
}

export default App;
