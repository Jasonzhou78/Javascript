/*
    Assignment 5
    Zhijun Zhou
*/

$(document).ready(function() {

    class ContentCard {

        //create four properties
        id;
        title;
        description;
        categoryType;

        //create a constructor for the properties
        constructor(id, title, description, categoryType) {
                this.id = id;
                this.title = title;
                this.description = description;
                this.categoryType = categoryType;
            }
            //create a method to add non-null value to corresponding property.
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
            //create a toString method and return a string reprenting object
        toString() {
            let ostring = `<div id="content-${x.id.id}">` + `<h4>${x.id.title}</h4>` + `<p>${x.id.description}</p>` + `<div>${x.id.categoryType}</div>` + `</div>`;
            return ostring;
        }
    }
    //instantiate the class ContentCard with an array of objects
    books = new Array();
    books[0] = new ContentCard({ id: 0, title: "Douglas MacArthur American Warrior", description: "History of American General of Army", categoryType: "History" });
    books[1] = new ContentCard({ id: 1, title: "The Hobbit", description: "Tolkien's fictional universe", categoryType: "Fiction" });
    books[2] = new ContentCard({ id: 2, title: "Paradise lost", description: "Satan's fall, Jesus's salvation", categoryType: "Poem" });
    books[3] = new ContentCard({ id: 3, title: "HTML5 and CSS3", description: "Tutorial book", categoryType: "Textbook" });
    books[4] = new ContentCard({ id: 4, title: "Sichuan Cuisine", description: "Food making", categoryType: "reference book" });

    //add html tags and text to #content-list, create new id to corresponding div tag.
    for (let x of books) {
        $("#content-list")
        let text = `<div id="content-${x.id.id}">` + `<h4>${x.id.title}</h4>` + `<p>${x.id.description}</p>` + `<div>${x.id.categoryType}</div>` + `</div>`;
        x.updateContent(this.title, this.description, this.categoryType);
        $("#content-list").append(text);
    }
});