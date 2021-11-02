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

            }
        }
    }

});