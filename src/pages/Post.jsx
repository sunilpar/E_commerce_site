import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import appwriteService from "../appwrite/config";
import Book from '../components/Book';
import conf from '../conf/conf';
import { Query } from 'appwrite';

function Post() {
  const navigate = useNavigate();
  const slug = useParams();
  const userData = useSelector((state) => state.auth.userData);
  const isAdmin = userData && userData.$id == conf.adminId ? true : undefined;
  
  const [post, setPost] = useState(null);
  useEffect(() => {
    if (slug) {
      appwriteService.getProducts([Query.equal("Product_Id",slug.id)]).then((post) => {
        if (post) setPost(post.documents[0]);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);


  return post?(
    <div className=' w-fit h-fit '>
                <Book {...post}/>
            </div>
  ):null;
}

export default Post