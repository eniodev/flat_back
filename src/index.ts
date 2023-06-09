const expressJS = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const moradoresRoutes =  require('./routes/moradoresRoutes');
const despesasRoutes = require('./routes/despesasRoutes');
const criterioRoutes = require('./routes/criteriosRoutes');
const divisaoRoutes = require('./routes/divisaoRoutes');
const modalidadesRoutes = require('./routes/modalidadesRoutes');
const quartosRoutes = require('./routes/quartosRoutes');
dotenv.config();

const app = expressJS();
app.use(cors());
app.use(expressJS.json());
app.use(bodyParser.json());

app.use('/moradores/', moradoresRoutes);
app.use('/despesas/', despesasRoutes);
app.use('/criterios/', criterioRoutes);
app.use('/divisoes/', divisaoRoutes);
app.use('/modalidades/', modalidadesRoutes);
app.use('/quartos/', quartosRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is UP!`);
});