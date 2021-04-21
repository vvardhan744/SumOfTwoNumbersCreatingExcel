
const service = require('../services/services');
const ExcelSum= async (req,res,next)=>{
    const resp = await service.ExcelSum();
    const file = `${_root}/${resp.data}`;
    res.download(file)
    // res.json(resp);
}
module.exports = {
    ExcelSum
}