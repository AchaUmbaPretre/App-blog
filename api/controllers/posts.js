import { db } from "../db.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config();

export const getPosts = (req, res)=>{
    const q = req.query.categorie?
     "SELECT * FROM posts WHERE categorie=?"
     :"SELECT * FROM posts"
    db.query(q, [req.query.categorie],  (error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data)
    })
}

export const getPost = (req, res)=>{
    const q = "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `categorie`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?"

    db.query(q, [req.params.id], (error, data)=>{
        if(error) return res.status(500).json(error)

        return res.status(200).json(data[0])
    })
}
export const addPosts = (req, res)=>{
    
}
export const deletePost = (req, res)=>{
    const token = req.cookies.access_token;
    if(!token) return res.status(401).json("Pas d'authentification");

    jwt.verify(token,process.env.JWT, (error, userInfo)=>{
        if(error) return res.status(403).json('Token non validé')
        const postId = req.body.id;
        const q = 'DELETE FROM posts WHERE `id` = ? AND `uid`= ?'
    
        db.query(q, [postId, userInfo.id],  (error, data)=>{
            if(error) return res.status(403).json('Vous ne pouvez supprimer que votre message!');

            return res.json('Le message a ete supprimé');
        });
    });
}

export const udpdatePost = (req, res)=>{
    
}