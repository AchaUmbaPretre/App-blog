import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import userRoute from './routes/users.js'

const app = express();

//middlewaller
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)

app.listen(8080,()=>{
    console.log('connecté')
})