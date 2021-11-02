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
        }

        updateContent(title, description, categoryType) {
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

        // prototype.toString = function addElement {
        //     let ostring = `<div id="content-"+this.id>` + `<h4>${this.title}</h4>` + `<p>${this.description}</p>` + `<div>${this.categoryType}</div>` + `</div>`;
        //     console.log(ostring);
        //     return ostring;
        // }
    }
    books = new Array();
    books[0] = new ContentCard({ id: 0, title: "Douglas MacArthur American Warrior", description: "History of American General of Army", categoryType: "History" }),
        books[1] = new ContentCard({ id: 1, title: "The Hobbit", description: "Tolkien's fictional universe", categoryType: "Fiction" }),
        books[2] = new ContentCard({ id: 2, title: "Paradise lost", description: "Satan's fall, Jesus's salvation", categoryType: "Poem" }),
        books[3] = new ContentCard({ id: 3, title: "HTML5 and CSS3", description: "Tutorial book", categoryType: "Textbook" }),
        books[4] = new ContentCard({ id: 4, title: "Sichuan Cuisine", description: "Food making", categoryType: "reference book" });
    // console.log("this title is: ", books[0].id.title);
    ContentCard.prototype.toString = function addElement() {
        let ostring = `<div id="content-"+this.id.id>` + `<h4>${this.id.title}</h4>` + `<p>${this.id.description}</p>` + `<div>${this.id.categoryType}</div>` + `</div>`;
        console.log(ostring);
        return ostring;
    }
    for (let x of books) {
        console.log("this title is: ", x.id.title);
        ContentCard.prototype.toString();
        // updateContent(x.id.title, x.id.description, x.id.categoryType);
        // console.log(x.id.title, x.id.description, x.id.categoryType)
        // $("#content-list").html(toString());
    }
});