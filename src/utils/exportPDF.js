import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

/**
 * Exports a given schedule to a PDF file.
 *
 * @param {Array} schedule - An array of schedule objects containing course data.
 * @param {string} filename - The name of the PDF file to be generated.
 */
export const exportScheduleToPDF = (schedule, filename = 'schedule.pdf') => {
    const doc = new jsPDF();
    const header = ['Course', 'Time', 'Instructor', 'Room'];
    const data = schedule.map(course => [course.name, course.time, course.instructor, course.room]);

    autoTable(doc, {
        head: [header],
        body: data,
    });

    doc.save(filename);
};
