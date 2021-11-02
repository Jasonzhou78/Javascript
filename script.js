/*
    Assignment 5
    Zhijun Zhou
*/

$(document).ready(function() {

    class ContentCard {
        constructor(id, title, description, categoryType) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.categoryType = categoryType;

            function updateContent(title, description, categoryType) {
                if (title != null) {
                    this.title = title;
                    return title;
                }
                if (description != null) {
                    this.description = description;
                    return description;
                }
                if (categoryType != null) {
                    this.categoryType = categoryType;
                    return categoryType;
                }
            }

            function toString() {
                console.log(`<div id="content-"+this.id>`);
                console.log(`<h4>${this.title}</h4>`);
                console.log(`<p>${this.description}</p>`);
                console.log(`<div>${this.categoryType}</div>`);
                console.log("</div>");
            }
        }
    }
    let books = new ContentCard([{ id: 0, title: "Douglas MacArthur American Warrior", description: "History of American General of Army", categoryType: "History" }, { id: 1, title: "The Hobbit", description: "Tolkien's fictional universe", categoryType: "Fiction" }, { id: 2, title: "Paradise lost", description: "Satan's fall, Jesus's salvation", categoryType: "Poem" }, { id: 3, title: "HTML5 and CSS3", description: "Tutorial book", categoryType: "Textbook" }, { id: 4, title: "Sichuan Cuisine", description: "Food making", categoryType: "reference book" }]);
    alert("This is the book！")
    for (let x of books) {
        $("#content-list").html(x);
    }

});