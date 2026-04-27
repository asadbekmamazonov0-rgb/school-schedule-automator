const ExcelJS = require('exceljs');

/**
 * Exports a schedule to Excel format.
 * @param {Array} scheduleData - Array of schedule objects to be exported to Excel.
 * @param {string} fileName - Name of the generated Excel file.
 */
function exportScheduleToExcel(scheduleData, fileName) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Schedule');

    // Define the columns
    worksheet.columns = [
        { header: 'Subject', key: 'subject', width: 30 },
        { header: 'Date', key: 'date', width: 20 },
        { header: 'Time', key: 'time', width: 20 },
        { header: 'Teacher', key: 'teacher', width: 30 },
        { header: 'Room', key: 'room', width: 15 },
    ];

    // Add schedule data to the worksheet
    scheduleData.forEach((item) => {
        worksheet.addRow(item);
    });

    // Write to file
    return workbook.xlsx.writeFile(fileName)
        .then(() => {
            console.log(`Schedule exported to ${fileName}`);
        })
        .catch((error) => {
            console.error('Error exporting schedule:', error);
        });
}

module.exports = { exportScheduleToExcel };