const FeeHouseholdRel = require("../models/feeHouseholdRelModel")
const asyncHandler = require("express-async-handler")
const { query } = require("express");



// const getFee = asyncHandler(async (req, res) => {
//     try {
//         const feehouseholdrel = await FeeHouseholdRel.find();
//             res.status(200).send({
//                 feehouseholdrel,
//                 message: "Success"
//             });
       
//     }
//     catch (e) {
//         res.status(500).send(e)

//     }
// });


const getFeeHousehold = asyncHandler(async (req, res) => {
    try {
        // Tìm tất cả các feehouseholdrel có status là true
        const feehouseholdrels = await FeeHouseholdRel.find({ status: true });

        // Nếu có ít nhất một bản ghi
        if (feehouseholdrels.length > 0) {
            // Tính tổng số tiền từ các bản ghi có status là true
            const totalAmount = feehouseholdrels.reduce((acc, feehouseholdrel) => {
                return acc + feehouseholdrel.amount;
            }, 0);

            // Trả về tổng số tiền
            res.status(200).send({ totalAmount });
        } else {
            // Nếu không có bản ghi nào có status là true
            res.status(404).send({ message: 'No fee with status true found' });
        }
    } catch (e) {
        // Xử lý lỗi nếu có
        res.status(500).send(e);
    }
});




module.exports = {
   //  getFee ,
     getFeeHousehold }