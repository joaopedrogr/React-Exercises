import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBook, getBookById, updateBook } from '../services/api';

interface Book {
    titulo: string;
    autor: string;
    anoDePublicacao: number;
    genero: string;
    paginas: number;
}

function BookForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [book, setBook] = useState<Book>({
        titulo: '',
        autor: '',
        anoDePublicacao: 0,
        genero: '',
        paginas: 0,
    });

    useEffect(() => {
        if (id) {
            loadBook();
        }
    }, [id]);

    const loadBook = async () => {
        try {
            const response = await getBookById(id as string);
            setBook(response.data);
        } catch (error) {
            console.error("Error loading book data", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await updateBook(id, book);
            } else {
                await createBook(book);
            }
            navigate('/');
        } catch (error) {
            console.error("Error saving book", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título</label>
                <input
                    type="text"
                    name="titulo"
                    value={book.titulo}
                    onChange={handleChange}
                />
            </div>
            
            <div>
                <label>Autor</label>
                <input
                    type="text"
                    name="autor"
                    value={book.autor}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Ano de Publicação</label>
                <input
                    type="number"
                    name="anoDePublicacao"
                    value={book.anoDePublicacao}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Gênero</label>
                <input
                    type="text"
                    name="genero"
                    value={book.genero}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Páginas</label>
                <input
                    type="number"
                    name="paginas"
                    value={book.paginas}
                    onChange={handleChange}
                />
            </div>

            <button type="submit"> Salvar</button>
        </form>
    );
}

export default BookForm;
