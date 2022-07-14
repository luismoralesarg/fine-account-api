const total = (objArray) => {
    console.log(objArray);
    return objArray
        .map(a => a.monto)
        .reduce((a, b) => a + b, 0);
};

const individualCost = (p, total, perNuca) => {
    for (let index = 0; index < p.length; index++) {
        p[index].diff = parseFloat((perNuca - p[index].monto).toFixed(2))
    }
    return p;

};
module.exports = { total, individualCost };