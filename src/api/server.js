  export async  function getAllBooks() {
    const response = await fetch('http://localhost:3000/books')
    return response.json();
}
export async function createBook(newBook) {
    const response = await fetch(`http://localhost:3000/books`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    });
    return response.json();
}

export async function deleteBook(id) {
    const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
})
    return response.json();
}
  