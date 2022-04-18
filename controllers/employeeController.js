const Employee = require('../models/employee');


class EmployeeController {
    employees = [];

    static viewAllEmployees = async (req, res) => {
        this.employees = await Employee.find({});
        if (this.employees) {
            res.status(200).json(this.employees);
        } else {
            res.status(404).json({
                "errorMessage": "Data Not Found"
            });
        }
    }

    static getEmployee = (req, res) => {
        Employee.findOne({
            _id: { $eq: req.params['id'] }
        }, (error, user) => {
            if (error) {
                console.error(error);
            }
            
            if (!user) {
                res.status(401).json({
                    statusCode: 401,
                    errorMessage: 'Invalid UserId!'
                });
            } else {
                res.status(200).json(user);
            }
                
                
        });
    }
}

module.exports = EmployeeController;