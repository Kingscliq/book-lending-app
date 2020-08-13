const bookList = [];


class Book {

    constructor(category, title, isbn, description, author, borrowed){
        
        this.isbn = isbn
        this.title = title;
        this.description = description;
        this.author = author;
        this.borrowed = false;
        
        //Methods
        this.addBook = addBookToList;
        this.showInfo = showBookInfo;
        this.borrowBook = borrowBookFromList;

        
    }

//method to add Books
 let addBook = (book) => {
                
    }
//method to show Book List
    showBookInfo(){
        if        
    }
//method to add Books
    borrowBook(){
        if        
    }

}
// const bookList = [
//     {
//         category: "books#volumes",
//         books: [
//          {
//           kind: "books#volume",
//           id: "_ojXNuzgHRcC",
//           tags: "OTD2tB19qn4",
//           volumeInfo: {
//                 title: "Flowers",
//                 authors: ["Vijaya Khisty Bodach"],
//                 isbn: '453gtERS'
        
//          },
         
//           kind: "books#volume",
//           id: "_ojXNuzgHRcC",
//           tags: "OTD2tB19qn4",
//           volumeInfo: {
//                 title: "Flowers",
//                 authors: ["Vijaya Khisty Bodach"],
//                 isbn: '453gtERS'
        
//          },
         
//           kind: "books#volume",
//           id: "_ojXNuzgHRcC",
//           tags: "OTD2tB19qn4",
//           volumeInfo: {
//                 title: "Flowers",
//                 authors: ["Vijaya Khisty Bodach"],
//                 isbn: '453gtERS'
        
//          },
         
//           kind: "books#volume",
//           id: "_ojXNuzgHRcC",
//           tags: "OTD2tB19qn4",
//           volumeInfo: {
//                 title: "Flowers",
//                 authors: ["Vijaya Khisty Bodach"],
//                 isbn: '453gtERS'
        
//          },
         
//         totalItems: 3
//        }
// ];
const lentBooks = [];
const returnedBooks = [];



