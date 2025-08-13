# Section A: Logical Thinking & System Design

### Three pieces of data to store for each book:

1. Book ID: this will act like the unique identifier to identify the specific book uniquley. For example even if there are two books that have the same title, their IDs will be different.
2. Availability status (e.g., available / borrowed):Shows whether a book can be borrowed or not. It also helps to track when books are returned so that the book status can be updated.
3. Title & Author: capturing the book title and the author let the users ie members find books by name or author easily.

### How to prevent the same book from being borrowed twice:

- Maintain the availability status in the database and check it before processing any borrow request. One of the pieces of data we are storing is the availability status so if the book availability=available the request will go through but if availability = borrowed, reject the request. So by doing that it will prevent a book from being borroed twice based on the book status.

### Scaling to 10,000 books and 1,000 users — what needs to change:

1. Use a database that support indexing: Implement indexes on searched fields (e.g., BookID, Title, Author, UserID) this enable faster search without taking alot of time in scanning the entire database.
2. Implement pagination: Display search results in smaller chunks for example 50 books per page instead of loading all the 10,000 books at once, this alos improves the user experince and also sytem perfomance.
3. Better user management: Maintain a Users table with user details and also borrowing limits of the books for each user.Index user-related fields example UserID and Email for quick access.
4. Authentication and access control:Ensure secure login for the 1,000 users, with role-based permissions for library admins and regular users.

### Store book info and borrowing record together or separately — why?

- Normalization and avoiding redundancy: Storing the title and author in the borrowing record every time one borrows a book, this will lead to repeating the same details over and over hence creating redudancy. This also makes the database not normalized.
- Faster and easier updates: Changing book info for example correcting a spelling mistake in the author’s name or the book name doesn’t require editing every borrow record.
- Better Organization: Each table has a clear purpose for example books table shows which books exist in the library while the borrowrecords table will show who borroed it and when it was borrowed
