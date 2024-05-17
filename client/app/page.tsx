"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './navbar'
import Post from './post'

export default function Home() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://192.168.1.151:5000/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error))
    }, []);

    return (
        <main>
            <Navbar />
            <section className="p-10">
                <h1 className="text-7xl mb-5">the blog of all time</h1>
                <ul>
                    {posts.map(post => (
                        <Post key={post._id} title={post.title} author={post.author} content={post.content} createdAt={post.createdAt} />
                    )).reverse()}
                </ul>
            </section>
        </main>
    );
}
