const Excel = require('exceljs');
const excelData=require('../helpers/fields');

const createExcelSum = async (req) => {
  try {
    const data=req.body.sumData;
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet('SumOfTwoNumbers')
    worksheet.columns = [
      { header: 'First Number', key: 'firstNumber' },
      { header: 'Second Number', key: 'secondNumber' },
      { header:'Sum', key:'sum'}
    ]
    worksheet.columns.forEach(column => {
      column.width = column.header.length < 12 ? 12 : column.header.length
    })
    worksheet.getRow(1).font = { bold: true }
    // Dump all the data into Excel
    data.forEach((e, index) => {
      // row 1 is the header.
      const rowIndex = index + 2

      // By using destructuring we can easily dump all of the data into the row without doing much
      // We can add formulas pretty easily by providing the formula property.
      worksheet.addRow({
        ...e,
        sum: {
          formula: `SUM(A${rowIndex}+B${rowIndex})`
        }
      })
    })
let fileName=`sum${Date.now()}.xlsx`
    workbook.xlsx.writeFile(fileName)
    return { status: true, data:fileName }
  }
  catch (err) {
    return { status: false, message: err.message }

  }
}

const ExcelSum = async () => {
  try {
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet('SumOfTwoNumbers')
    worksheet.columns = [
      { header: 'First Number', key: 'firstNumber' },
      { header: 'Second Number', key: 'secondNumber' },
      { header:'Sum', key:'sum'}
    ]
    worksheet.columns.forEach(column => {
      column.width = column.header.length < 12 ? 12 : column.header.length
    })
    worksheet.getRow(1).font = { bold: true }
    // Dump all the data into Excel
    excelData.excelData.forEach((e, index) => {
      // row 1 is the header.
      const rowIndex = index + 2

      // By using destructuring we can easily dump all of the data into the row without doing much
      // We can add formulas pretty easily by providing the formula property.
      worksheet.addRow({
        ...e,
        sum: {
          formula: `SUM(A${rowIndex}+B${rowIndex})`
        }
      })
    })
let fileName=`sum${Date.now()}.xlsx`
    workbook.xlsx.writeFile(fileName)
    return { status: true, data:fileName }
  }
  catch (err) {
    return { status: false, message: err.message }

  }
}
module.exports = {
  createExcelSum,
  ExcelSum
}