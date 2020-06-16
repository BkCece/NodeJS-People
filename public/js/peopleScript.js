//Add a person to the database
function addPerson() {
    document.getElementById('addForm').action = '/add';
    document.getElementById('addForm').submit();
}