import { useEffect, useState } from 'react';
import { getBook, deleteBook } from '../services/api';
import { Link } from 'react-router-dom';

interface Book {
    id: string;
    titulo: string;
    autor: string;
    anoDePublicacao: number;
    genero: string;
    paginas: number;
}

function BookList() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const response = await getBook();
        setBooks(response.data);
    };

    const handleDelete = async (id: string) => {
        await deleteBook(id);
        loadBooks();
    };

    return (
        <div>
            <h1>Lista de Livros</h1>
            <Link to="/add">Adicionar Livro</Link>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        Título: {book.titulo}, Autor: {book.autor}, Ano de Publicação: {book.anoDePublicacao}, Gênero: {book.genero}, Páginas: {book.paginas}
                        <Link to={`/edit/${book.id}`}> Editar</Link>
                        <button onClick={() => handleDelete(book.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
