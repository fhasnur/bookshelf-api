# Bookshelf API

Bookshelf API is a simple RESTful API for managing a collection of books. It provides functionality to add, retrieve, update, and delete books from the collection.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Testing API](#testing-api)
- [License](#license)

## Features
[^ back to top ^](#table-of-contents)
- Add a new book to thefeatures collection.
- Retrieve a list of all books with optional filters (by reading status, finished status, or name).
- Retrieve details of a specific book by ID.
- Update a book's details by ID.
- Delete a book by ID.

## Installation
[^ back to top ^](#table-of-contents)

**Clone the repository:**
```bash
git clone https://github.com/fhasnur/bookshelf-api.git
cd bookshelf-api
```

**Install the dependencies:**
```bash
npm install
```

**Start the server:**
```bash
npm run start
```

**For development, use:**
```bash
npm run start-dev
```

## Usage
[^ back to top ^](#table-of-contents)

After starting the server, the API will be available at `http://localhost:9000`.

## API Routes

### Add a Book
[^ back to top ^](#table-of-contents)

- **Endpoint**: `/books`
- **Method**: `POST`
- **Description**: Adds a new book to the collection.
- **Request Body**:
```json
{
  "name": "string",
  "year": "number",
  "author": "string",
  "summary": "string",
  "publisher": "string",
  "pageCount": "number",
  "readPage": "number",
  "reading": "boolean"
}
```
- **Response** (Success)
```json
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "string"
  }
}
```
- **Response** (Failure - Name missing)
```json
{
  "status": "fail",
  "message": "Gagal menambahkan buku. Mohon isi nama buku"
}
```
- **Response** (Failure - readPage greater than pageCount)
```json
{
  "status": "fail",
  "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
}
```

### Get All Books
[^ back to top ^](#table-of-contents)

- **Endpoint**: `/books`
- **Method**: `GET`
- **Description**: Retrieves a list of all books in the collection.
- **Query Parameters:**
  - `reading`: Filter books based on reading status (1 for reading, 0 for not reading).
  - `finished`: Filter books based on finished status (1 for finished, 0 for not finished).
  - `name`: Filter books based on a partial match of the book's name.

- **Response**:
```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "string",
        "name": "string",
        "author": "string",
        "publisher": "string"
      }
    ]
  }
}
```

### Get Book by ID
[^ back to top ^](#table-of-contents)

- **Endpoint**: `/books/{bookId}`
- **Method**: `GET` 
- **Description**: Retrieves details of a specific book by its ID.
- **Response** (Success):
```json
{
  "status": "success",
  "data": {
    "book": {
      "id": "string",
      "name": "string",
      "year": "number",
      "author": "string",
      "summary": "string",
      "publisher": "string",
      "pageCount": "number",
      "readPage": "number",
      "finished": "boolean",
      "reading": "boolean",
      "insertedAt": "string",
      "updatedAt": "string"
    }
  }
}
```
- **Response** (Failure):
```json
{
  "status": "fail",
  "message": "Buku tidak ditemukan"
}
```

### Update a Book
[^ back to top ^](#table-of-contents)

- **Endpoint**: `/books/{bookId}`
- **Method**: `PUT`
- **Description**: Updates the details of a specific book by its ID.
- **Request Body**:
```json
{
  "name": "string",
  "year": "number",
  "author": "string",
  "summary": "string",
  "publisher": "string",
  "pageCount": "number",
  "readPage": "number",
  "reading": "boolean"
}
```
- **Response** (Success)
```json
{
  "status": "success",
  "message": "Buku berhasil diperbarui"
}
```
- **Response** (Failure - Name missing)
```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. Mohon isi nama buku"
}
```
- **Response** (Failure - readPage greater than pageCount)
```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
}
```
- **Response** (Failure - Book not found)
```json
{
  "status": "fail",
  "message": "Gagal memperbarui buku. Id tidak ditemukan"
}
```

### Delete a Book
[^ back to top ^](#table-of-contents)

- **Endpoint**: `/books/{bookId}`
- **Method**: `DELETE`
- **Description**: Deletes a book from the collection by its ID.
- **Response** (Success)
```json
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```
- **Response** (Failure)
```json
{
  "status": "fail",
  "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```

## Testing API
[^ back to top ^](#table-of-contents)

Before running the tests, make sure your server is up and running. You can easily test the API using Newman, which is already included in the project's devDependencies. The required Postman collection and environment files are also included in this project.

**Run Newman tests**  
```bash
newman run bookshelf-api-test.postman_collection.json --environment bookshelf-api-test.postman_environment.json 
```
The tests will run, and you will see the results in the terminal. You can customize the collection for testing all API endpoints described above.

## License
[^ back to top ^](#table-of-contents)

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.