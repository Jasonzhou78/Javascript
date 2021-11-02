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
                    return title;
                }
                if (description != null) {
                    return description;
                }
                if (categoryType != null) {
                    return categoryType;
                }
            }
        }
    }

});