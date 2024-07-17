import foodModel from "../models/FoodModel.js";
import fs from 'fs'
import path from 'path'

//delete all upload files
const deleteAllFilesInUploads = (folderPath) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.log('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log('Error deleting file:', filePath, err);
                } else {
                    console.log('Deleted file:', filePath);
                }
            });
        });
    });
};


//add food item
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save()
        res.json({ success: true, message: 'Food Added' })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'error' })
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' })
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, () => { })

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: 'Food Removed' })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' })
    }
}

const removeAllFoods = async (req, res) => {
    try {

        deleteAllFilesInUploads('uploads')

        await foodModel.deleteMany({})
        res.json({ success: true, message: 'Removed All Foods' })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' })
    }
}

export { addFood, listFood, removeFood, removeAllFoods }