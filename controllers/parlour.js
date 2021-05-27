const router = require("express").Router();


const Parlour = require("../models/parlour");
const parlourSeed =  require("../db/seedDataParlour.json")
const Product = require("../models/product")

//Seed Route

router.get("/seed", async (req, res) => {
  try {
    await Parlour.remove({});
    await Parlour.create(parlourSeed);
    const parlours = await Parlour.find({});
    res.json(parlours);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Index route
router.get("/", async (req, res) => {
  try {
    const parlours = await Parlour.find({}).populate('Product');
    res.json(parlours);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Show one route
router.get("/:name", async (req, res) => {
  try {
    const parlour = await Parlour.find({name: req.params.name})
    res.json(parlour)
  } catch (error) {
    res.status(400).json(error)
  }
})

//Create route
router.post("/", async (req, res) => {
  try {
    const newParlour = await Parlour.create(req.body);
    res.json(newParlour);
  } catch (error) {
    res.status(400).json(error);
  }
});

// //Update route
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedParlour = await Parlour.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updatedParlour);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// UPDATE ROUTE
router.put('/:id/addProducts/:productId', async (req,res) => {
  // params = { farmId: 1234, fruitId: 8909}
  const product = await Product.findById(req.params.productId)
  const parlour = await Parlour.findByIdAndUpdate(
    req.params.parlourId, {$push: {products: product.id}}, {new: true}
  ) 
  res.json({
    status: 200,
    data: parlour
  })
})


//Delete route
router.delete("/:id", async (req, res) => {
  try {
    const deletedParlour = await Parlour.findByIdAndRemove(req.params.id);
    res.json(deletedParlour);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
