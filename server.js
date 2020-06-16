const path = require('path')

const rootDir = require('./utils/path');

const express = require('express');

const bodyParser = require('body-parser')

const errorController = require('./controllers/error')

// const expressHbs = require('express-handlebars')
// app.engine('hbs', expressHbs({
//     layoutsDir: 'views/layouts/', 
//     defaultLayout: 'main-layout', 
//     extname: 'hbs'
// }))

const app = express();


app.set('view engine', 'ejs')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404Page)

app.listen(3000)