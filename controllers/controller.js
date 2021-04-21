
const service = require('../services/services');
var fs = require('fs');
const createExcelSum = async (req,res,next)=>{
    const resp = await service.createExcelSum(req);
    res.json(resp);
}
const ExcelSum= async (req,res,next)=>{
    const resp = await service.ExcelSum();
    res.json(resp);
}
module.exports = {
    createExcelSum,
    ExcelSum
}