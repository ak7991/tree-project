$("document").ready(() => {
  console.log("Main.js working");

  $.get("", (req, res) => {
    console.log("res", res);

    let listOfTrees = ["tree1", "tree2"];
    console.log("listOfTrees", listOfTrees);

    updateList(listOfTrees);
  });
});

let getTree = treeName => {
  console.log("treeName", treeName);

  $.get("", (req, res) => {
    console.log("res", res);
    let tree1 = {
      root: {
        text: { name: 160 },
        children: [
          {
            text: { name: 100 },
            children: [
              {
                text: {
                  name: 70
                },
                children: [
                  "",
                  {
                    text: { name: 50 }
                  }
                ]
              }
            ]
          },
          { text: { name: 250 }, children: [] }
        ]
      },
      name: "tree4"
    };
    let tree2 = {
      root: {
        text: { name: 1 },
        children: [
          {
            text: { name: 2 }
          },
          {
            text: { name: 3 }
          }
        ]
      },
      name: "tree4"
    };
    let tree = {};
    switch (treeName) {
      case 0:
        tree = tree1;
        break;
      case 1:
        tree = tree2;
        break;
    }
    drawTree(tree);
  });
};

let addTree = (treeName, value) => {
  $.post("", (req, res) => {
    drawTree(res.tree);
  });
};

let drawTree = tree => {
  $("#tree-simple").empty();
  simple_chart_config = {
    chart: {
      container: "#tree-simple"
    },

    nodeStructure: tree.root
  };
  let my_chart = new Treant(simple_chart_config);
};

let updateList = listOfTrees => {
  for (tree in listOfTrees) {
    $(".tree-list").append(
      "<button class='btn btn-secondary treeItem' onclick='getTree(" +
        tree +
        ")'>" +
        "Tree " +
        tree +
        "</button>"
    );
  }
};
