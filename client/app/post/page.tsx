"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../navbar'
import Post from '../post'

export default function PostNew() {
    const[title, setTitle] = useState('');
    const[author, setAuthor] = useState('');
    const[content, setContent] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/posts', {
                title: title,
                author: author,
                content: content
            });
            setTitle('');
            setAuthor('');
            setContent('');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main>
            <Navbar />
            <section className="p-10">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="text-xl mr-10">Title: </label>
                        <input className="text-black" type="text" name="title" value={title} required={true} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <br/>
                    <div>
                        <label className="text-xl mr-5">Author: </label>
                        <input className="text-black" type="text" name="author" value={author} required={true} onChange={(e) => setAuthor(e.target.value)}/>
                    </div>
                    <br />
                    <div>
                        <label className="text-xl mr-2">Content: </label>
                        <textarea className="text-black resize-none w-96 h-48" name="content" value={content} required={true} onChange={(e) => setContent(e.target.value)}/>
                    </div>
                    <br/>
                    <button type="button" className="bg-green-600 p-2 ml-96 hover:bg-green-500 transition" onClick={handleSubmit}>Submit</button>
                </form>
            </section>
        </main>
    );
}
