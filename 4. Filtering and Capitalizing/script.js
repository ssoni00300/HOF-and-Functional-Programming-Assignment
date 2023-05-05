const Books=[
    {
        Book_Name:"Young India",
        Author:"Lajpat Rai",
        Publication_year:1916,
    },
    {
        Book_Name:"The Living Mountain",
        Author:"Amitav Ghosh",
        Publication_year:2022,
    },
    {
        Book_Name:"The Discovery of India",
        Author:"Jawaharlal Nehru",
        Publication_year:1946,
    },
    {
        Book_Name:"The Oath of the Vayuputras",
        Author:"Amish Tripathi",
        Publication_year:2013,
    },
]

console.log(Books);

const Books_before_2010=Books.filter((h)=> {
    h.Author=h.Author.toUpperCase();
    return h.Publication_year<2010;
})
console.log("Books Published before 2010:",Books_before_2010);


const Books_after_2010=Books.filter((h)=> {
    h.Author=h.Author.toUpperCase();
    return h.Publication_year>=2010;
})
console.log("Books Published after 2010:",Books_after_2010);