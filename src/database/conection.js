const mongoose  = require('mongoose');


    const URL = 'mongodb+srv://natescoAdmi:natesco123@clusternatesco.hudcaxf.mongodb.net/clientes?retryWrites=true&w=majority&appName=ClusterNatesco';
    
    mongoose.set('strictQuery', true);

    mongoose.connect(URL, {
    
    }).then(() => {
      console.log("Conexión exitosa");
    }).catch((err) => {
      console.error('Error al conectar a la base de datos:', err);
    });


    // const { email, password } = req.body;
    // let nuevoUsuario = new nuevo({email, password})
    // console.log(nuevoUsuario);
    // await nuevoUsuario.save()
    // res.redirect('/home')