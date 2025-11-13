const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");

const dataSave = async (req, res) => {
    const { name, email, booktitle, price } = req.body;
    const author = await AuthorModel.create({
        authorname: name,
        email: email
    })

    const book = await BookModel.create({
        bookname: booktitle,
        price: price,
        authorid: author._id
    })

   
    await AuthorModel.findByIdAndUpdate(author._id, {$push:{booksid:book._id}} ) 


    res.send("Author Created with Books");
}


const dataDisplay = async (req, res) => {
    const author = await  AuthorModel.find().populate("booksid");
    res.send(author);
}


const bookdataSave=async(req,res)=>{
    const { authid, bookname, price }=req.body;

    const book = await BookModel.create({
          bookname:bookname ,
          price:price
    })

    await AuthorModel.findByIdAndUpdate(authid, {$push:{booksid:book._id}})
     res.send("Book save!!!");
}


const dataDisplay1 = async (req, res) => {
    const book = await  BookModel.find().populate("authorid");
    res.send(book);
}


const dataSearch = async (req, res) => {
    const { rno } = req.body;
    const Student = await StuModel.find({ rollno: rno });
    console.log(Student);
    res.send(Student);
}
const updateDisplay = async (req, res) => {
    const Student = await StuModel.find();
    res.send(Student);
}
const updateDelete = async (req, res) => {
    const { id } = req.query;
    const Student = await StuModel.findByIdAndDelete(id);
    res.send({ msg: "Data Succesfully Deleted!" });
}
const editDisplay = async (req, res) => {
    const { id } = req.params;
    const student = await StuModel.findById(id);
    console.log(student);
    res.send(student);
}
const editDataSave = async (req, res) => {
    const { _id, rollno, name, city, fees } = req.body;
    const student = await StuModel.findByIdAndUpdate(_id, {
        rollno: rollno,
        name: name,
        city: city,
        fees: fees
    });
    res.send({ msg: "Data Succesfully Updated!" });
}

module.exports = {
    dataSave,
    dataDisplay,
      dataDisplay1,
    bookdataSave,
    dataSearch,
    updateDisplay,
    updateDelete,
    editDisplay,
    editDataSave
}