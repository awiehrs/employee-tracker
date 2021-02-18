const inquirer = require ('inquirer');
const mysql = require('mysql');

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
        }
        query( sql, args=[] ) {
            return new Promise( ( resolve, reject ) => {
                this.connection.query( sql, args, ( err, rows ) => {
                    if ( err )
                        return reject( err );
                    resolve( rows );
                } );
            } );
        }
        close() {
            return new Promise( ( resolve, reject ) => {
                this.connection.end( err => {
                    if ( err )
                        return reject( err );
                    resolve();
                } );
            } );
        }
    }

   //DB CONNECTION
   const db = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "tracker"
});

async function mainMenu() {
    //displays full employee name in the array as opposed to just first or last name
    let concatEmployeeName = await db.query(`SELECT CONCAT(first_name, ' ', last_name) AS 'Fullname' FROM employee;`)
    let employeeNameArr = [];
    for(i = 0; i < concatEmployeeName.length; i++){
        employeeNameArr.push(concatEmployeeName[i].Fullname);
    }
    
    //initial inquirer prompt - main menu list
    const EmployeeTrackerData = await inquirer.prompt([
        {
            type: 'list',
            name: 'select',
            message: 'Welcome! Please select an action below',
            choices: [ 
            'View all employees',
            'View all employees by Role',
            'View all employees by Department',
            'View all employees by Manager',
            'Add Employee',
            'Remove Employee',
            'Update Employee Role',
            'Update Employee Manager'
            ],
        },
    ]);

    
}