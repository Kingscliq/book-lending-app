
var library = [
    { 
    title: 'Book One',
    author: ['Livingstone James'],
    category: 'health',
    isbn: '345ERTGF',
    description: 'a book about health',
    borrowed : false
},
{
    title: 'Book Two',
    author: ['James Bond'],
    category: 'Sports',
    isbn: '345Er454',
    description: 'a book about sports',
    borrowed : true
},
{
    title: 'Book Three',
    author: ['Peter Square'],
    category: 'Music',
    isbn: '345E4567',
    description: 'a book about music',
    borrowed : false
}
];

class Book {

    constructor(title, author, category, isbn, description, borrowed){
        
        this.isbn = isbn
        this.title = title;
        this.description = description;
        this.author = author;
        this.borrowed = false;
        this.category = category;
        
    //Methods  
    }

    // METHODS
    //     borrowBook(){
//         //   /////////////////////////////////////////////////////////////////////
//         //    Loop through the entire array of books, and get the value of borrowed. if borrowed == true, 
//         //   then log a message to the user'Book Borrowed' 
//         // and then display a lst of the available books in the store as suggestion
//         ///////////////////////////////////////////////////////////////////////

//     }
///////////////////////////////////////////////////////////////////////
//          When this method is called it is responsible for showing the entire books in the store
/////////////////////////////////////////////////////////////////////////
    static  displayBooks(){
            
        const storedBooks = library;
        storedBooks.forEach((book) => {
            console.log(book)
        })


    }
//////////////////////////////////////////////////////////////////////////////////////
// This Method shows the list of borrowed books
///////////////////////////////////////////////

    static displayBorrowedList(){
        const storedBooks = library;
        storedBooks.forEach((book) => {
            if(book.borrowed === true){
                console.log(`The title of the Borrowed Book is ${book.title} and the author is ${book.author} `)
            }
        })

    }

    /////////////////////////////////////////////////////////////
    // This Method is used to add a book to the store list 
    /////////////////////////////////////////////////////////////
    static addBookToStore(book){
        const book1 = new Book(
            'Book Four', 
            'LivingStone',
            'health', 
            'RTEY$%^U&*', 
            'a book about health', 
            false
        )
        library.push(book1);
        console.log(library)
      

    }
    /////////////////////////////////////////////////////////////
    // This Method is used to display books that are availbale for borrow 
    /////////////////////////////////////////////////////////////
    static displayAvailableBooks(){
        const storedBooks = library;
        storedBooks.forEach((book) => {
            if(book.borrowed === false){
                console.log(` ${book.title} -- ${book.author} `)
            }
              
            
        })
    }

}

console.log('-------------------------------------------');
console.log('Here is a list of all Books in the library');
console.log('-------------------------------------------');

Book.displayBooks();

console.log('\n\n')


console.log('--------------------------------------');
console.log('Here is a list of borrowed Books');
console.log('--------------------------------------');
Book.displayBorrowedList();

console.log('\n\n');

console.log('//////////////////////////////////////');
console.log('Here is a list of available Books in the library');
console.log('///////////////////////////////////////////////');
    Book.displayAvailableBooks();
 
    console.log('\n\n')

console.log('//////////////////////////////////////');
console.log('Here is a list of a book that is recently added to the list');
console.log('///////////////////////////////////////////////');
Book.addBookToStore();




// const book2 = new Book(
    //     'Book Two', 
    //     'Chris Doe',
    //     'computer scince', 
    //     'RTE^&UTRYUIU', 
    //     'a book to get the hell out of javascript', 
    //     true
    // );

    // console.log(book1)
//     showAllBooks(){


//        const newBook = new Book('computer', 'Javascript Ninja', 'RT3463TGH', 'this is a book that will get your ass of Javascript', 'Kingsley Ajaezo', true )
//         books.push(newBook)   
//     } 
//     //method to show Book List
//     showBookInfo(){
//         console.log(books)
        
//     }
    
//     //method to add Books
      
//     // Method to show all books
//     // showAllBooks(){
        
//     // }
    
// }





// this.addBook = addBookToList;
//         this.showInfo = showBookInfo;
//         this.borrowBook = borrowBookFromList;
// const lentBooks = [];
// const returnedBooks = [];



