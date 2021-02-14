const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config'); 

// Routes
const addressRoutes = require('./routes/address');
const categoryRoutes = require('./routes/category');
const orderDetailRoutes = require('./routes/order_detail');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

const app = express();

// BodyParser Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err));

app.use('/address', addressRoutes);
app.use('/category', categoryRoutes);
app.use('/orderDetail', orderDetailRoutes);
app.use('/order', orderRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));