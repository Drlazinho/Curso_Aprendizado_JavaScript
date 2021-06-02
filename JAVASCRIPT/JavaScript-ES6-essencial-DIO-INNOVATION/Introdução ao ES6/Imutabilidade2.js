const students = [
    {
        name: 'Lázaro',
        grade: 10
    },
    {
        name: 'Viviane',
        grade: 6
    },
    {
        name: 'Mainha',
        grade: 8
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:')
console.log(students);