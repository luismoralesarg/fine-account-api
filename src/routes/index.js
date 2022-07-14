const express = require('express');
const router = express.Router();
const { total, individualCost } = require('../utils/calculator');

router.post('/calculator', (req, res) => {
    const { participants: p } = req.body
    try {
        
        const totalGasto = total(p);
        const perNuca = totalGasto / p.length;
        const result = individualCost(p, totalGasto, perNuca);
        
        res.status(200).json({
            message: 'Calculo realizado',
            total: totalGasto,
            perNuca,
            p: result,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Ocurrió un error al calcular',
            error
        });
    }
});

module.exports = router;