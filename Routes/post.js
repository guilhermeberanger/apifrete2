const express = require('express');
const router = express.Router();
const apiFrete = require('../Api/api_frete')


router.get('/', (req, res) =>{
    res.send('Teste 1 - Post')
});

router.post('/', async (req, res) => {
    try {
        console.log('req.body', req.body)
        const endPoint = `v1/quotation`
        const data = await apiFrete (endPoint,req.body,"POST")
        const resultado = await apiFrete (`${endPoint}/${data.code}`,req.body,"GET")
        res.json(resultado);
        
   }catch (error) {
        console.error('error', error )
        }
    
});
   
router.get('/detalhes', async (req, res) => {
    try{
        const endPoint = `v1/quotation/IXHCRWUV`
        const data = await apiFrete (endPoint,req.body,"GET")
        res.json(data)

    }catch (error) {
        console.error('error', error )
        }

})




module.exports = router;