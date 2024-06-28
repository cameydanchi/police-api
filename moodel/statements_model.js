import { Schema, model } from "mongoose";

const statementSchema= new Schema({
    incidentType :{type:String,
      enum:["non-criminal","criminal"]
    },
  
  civilStatus: {
    type: String,
    enum :['Withnes','suspect','Ofenders']
   },
   statement:{type:String},
   caseStatus: {
    type:String,
    enum: ['Closed','Open']
   },
   crateAt :{type:Date, default :Date.now()},
   updateAt :{type:Date ,  default :Date.now()},
})

export const StatementModel = model('statement',statementSchema)