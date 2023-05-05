let List=[
    {
        Item_name:"Toy",
        Price:8,
    },
    {
        Item_name:"Brush",
        Price:5,
    },
    {
        Item_name:"Mobile",
        Price:500,
    },
    {
        Item_name:"Notebook",
        Price:10,
    },
]
console.log("List(Prices are in US Dollars):",List);

let New_List=List.map(UsdToInr);

function UsdToInr(item){
    item.Price=item.Price*80;
    return item;
}

console.log("New List(Prices are in Indian Rupees):",New_List);

