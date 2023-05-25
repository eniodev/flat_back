"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressJS = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const moradoresRoutes = require('./routes/moradoresRoutes');
const despesasRoutes = require('./routes/despesasRoutes');
dotenv.config();
const app = expressJS();
app.use(cors());
app.use(expressJS.json());
app.use(bodyParser.json());
app.use('/moradores/', moradoresRoutes);
app.use('/despesas/', despesasRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Server is UP!`);
});
//# sourceMappingURL=index.js.map