// import { StatementModel } from "../moodel/statements_model.js";
import { StatementModel } from "../moodel/statements_model.js";

// function to store data in the database

export const addStatement = async (req, res) => {

    try {
        console.log('request', req.body)
        const addData = await StatementModel.create(req.body);
        res.status(200).send(addData);

    }
    catch (error) { 
        console.log(error)
    }
};


export const getStatement = async (req,res) => {
    try {
        const getData = await StatementModel.find();
        res.json(getData);
    } catch (error) {
        console.log(error)
    }
}

export const getStatementId = async (req,res) => {
    try {
        const getDataId = await StatementModel.findById(req.params.id);
        res.json(getDataId);
    } catch (error) {
        console.log(error)
    }
}

export const patchStatement = async (req,res) =>{
  try {
    const status = req.body.caseStatus;

      const patchData = await StatementModel.findByIdAndUpdate(req.params.id,{caseStatus:status});
      res.json(patchData);
  } catch (error) {
    console.log(error)
  }
}

export const delStatementId = async (req,res) => {
    try {
        const deleteDataId = await StatementModel.findByIdAndDelete(req.body.id);
        res.json(deleteDataId);
    } catch (error) {
        console.log(error)
    }
}


