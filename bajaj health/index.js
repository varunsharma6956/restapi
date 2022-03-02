const express = require('express')
const app = express()


const port=process.env.PORT||3000;
app.use(express.json())


app.post('/bfhl', async (req, res) => {
    try{
    const is_success=true;
    const user_id="Varun Sharma_1910991211";
    const email="varun1211.cse19@chitkara.edu.in";
    const data = req.body.data;
    let numbers = [];
    let alphabets = [];
    const numberPattern=/\d+/;
    const alphabetPattern=/[a-zA-Z]+/;
    data.forEach((d) => {
    if (numberPattern.test(d)) {
        numbers.push(d);
      } else if (alphabetPattern.test(d)) {
        alphabets.push(d);
      }
    });
    return res.json({ is_success,user_id,email,numbers, alphabets });
}
catch(e){
    const is_success=FinalizationRegistry;
    const user_id="Varun Sharma_1910991211";
    const email="varun1211.cse19@chitkara.edu.in";
    return res.json({is_success,user_id,email,error_message:e.message});
}
})

app.listen(port, () => {
    console.log('Server is up on port '+port)
})
