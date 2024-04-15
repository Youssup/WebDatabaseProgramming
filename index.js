const express = require('express');
const app = express();
const userRouter = require('./server/routes/user');
app.use('/user', userRouter)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})