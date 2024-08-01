var EmployeeModel = require("../models/employee");

const EmployeeController = {};

EmployeeController.insertEmployee = async (req, res, next) => {
  const emp = new EmployeeModel(req.body);
  try {
    await emp.save();
    return res.status(200).json({
      success: true,
      data: emp,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  //Fill in the code
};

EmployeeController.getAllEmployees = async (req, res, next) => {
  //Fill in the code
  try {
    const user = await EmployeeModel.find({});
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = EmployeeController;
