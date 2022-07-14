const express = require('express');
const Router = express.Router();
const errorHandler = require('./middleware/error')
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const router = require('./routes');

// Cors
app.use(cors());
// Logs
app.use(morgan('combined'));
app.use(express.json());
// Custom error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

Router.use('/api', router);
app.use(Router);

app.listen(PORT, () => {
    console.log(`[FINE ACCOUNT API] Running http://localhost:${PORT}`)
})