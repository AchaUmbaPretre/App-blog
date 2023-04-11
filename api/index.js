import express from 'express'
import cors from 'cors'
import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import userRoute from './routes/users.js'
import cookieParser from 'cookie-parser'
import multer from 'multer'

const app = express();

//middlewaller
app.use(cors())
app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, '../app-client/public/upload')
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename)
})


app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)

app.listen(8080,()=>{
    console.log('connecté')
})