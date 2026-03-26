const db = require('../config/db');

const createBook = async (req, res) => {
    try {
        const { title, author, published_year } = req.body;

        if (!title || !author) {
            return res.status(400).json({ status: 'error', message: 'Title dan Author wajib diisi!' });
        }

        const query = 'INSERT INTO books (title, author, published_year) VALUES (?, ?, ?)';
        const [result] = await db.execute(query, [title, author, published_year || null]);

        const [newBook] = await db.execute('SELECT * FROM books WHERE id = ?', [result.insertId]);

        res.status(201).json({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: newBook[0]
        });
    } catch (error) {
        console.error('Error in createBook:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const [books] = await db.execute('SELECT * FROM books ORDER BY created_at DESC');
        res.status(200).json({
            status: 'success',
            data: books
        });
    } catch (error) {
        console.error('Error in getAllBooks:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};


const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const [book] = await db.execute('SELECT * FROM books WHERE id = ?', [id]);

        if (book.length === 0) {
            return res.status(404).json({ status: 'error', message: 'Buku tidak ditemukan' });
        }

        res.status(200).json({
            status: 'success',
            data: book[0]
        });
    } catch (error) {
        console.error('Error in getBookById:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};


const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, published_year } = req.body;

        const [checkBook] = await db.execute('SELECT * FROM books WHERE id = ?', [id]);
        if (checkBook.length === 0) {
            return res.status(404).json({ status: 'error', message: 'Buku tidak ditemukan' });
        }

        const query = 'UPDATE books SET title = ?, author = ?, published_year = ? WHERE id = ?';
        await db.execute(query, [title, author, published_year || null, id]);

        res.status(200).json({
            status: 'success',
            message: 'Buku berhasil diupdate'
        });
    } catch (error) {
        console.error('Error in updateBook:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

      
        const [checkBook] = await db.execute('SELECT * FROM books WHERE id = ?', [id]);
        if (checkBook.length === 0) {
            return res.status(404).json({ status: 'error', message: 'Buku tidak ditemukan' });
        }

        await db.execute('DELETE FROM books WHERE id = ?', [id]);

        res.status(200).json({
            status: 'success',
            message: 'Buku berhasil dihapus'
        });
    } catch (error) {
        console.error('Error in deleteBook:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};


module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
};