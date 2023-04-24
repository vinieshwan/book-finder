import { useContext, useEffect } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import { Book } from "../components/Book"
import { Homepage } from "../components/Homepage"
import { HeaderBar } from "../components/HeaderBar"
import { FooterBar } from "../components/FooterBar"

import { IsbnContext } from "../App";
import { convertIsbn, getIsbnType, getBook } from '../api';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "/book/:id",
      element: <Book />,
    }
]);

export const Default = () => {
    const {isbn, setBook, error, setError} = useContext(IsbnContext);

    const loadBook = async() => {
        try {
            const type = await getIsbnType(isbn);

            if (type === 13) {
                setBook(await getBook(isbn));
            } else {
                const isbn13 = await convertIsbn(isbn);
                setBook(await getBook(isbn13));
            }

            setError('')
        } catch (err) {
            if (typeof err !== 'string') {
                setError('');
            } else {
                setError(err);
            }
            
        }
    }

    useEffect(() => {
        if (isbn) {
            loadBook();
        } else {
            setError('')
        }
    }, [isbn, error]);

    return (
        <div>
            <HeaderBar />
            <RouterProvider router={router} />
            <FooterBar />
        </div>
        
    )
}