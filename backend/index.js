import express from 'express'
import  Colors  from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/productRoutes.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express();
dotenv.config();
connectDB()

app.get('/',(req,res)=>{
    res.json("i am api")
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT,
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    )