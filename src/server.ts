import express from "express";



const app = express();

app.use(express.json());

app.get('/', ( req , res ) => {
   return res.json({ 'server' : 'start' })
});


app.listen(3333, () => {
    console.log('🤖 server start on port 3333')
})