const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", name: "Face Primer" },
  { _id: "65a7e24602e12c44f599442d", name: "Foundations" },
  { _id: "65a7e24602e12c44f599442e", name: "Concealers" },
  { _id: "65a7e24602e12c44f599442f", name: "BB Cream/CC Cream" },
  { _id: "65a7e24602e12c44f5994430", name: "Blush" },
  { _id: "65a7e24602e12c44f5994431", name: "Highlighters" },
  { _id: "65a7e24602e12c44f5994432", name: "Bronzers" },
  { _id: "65a7e24602e12c44f5994433", name: "Setting Powders" },
  { _id: "65a7e24602e12c44f5994434", name: "Setting Sprays" },
  { _id: "65a7e24602e12c44f5994435", name: "Eyeshadow" },
  { _id: "65a7e24602e12c44f5994436", name: "Eyeliner" },
  { _id: "65a7e24602e12c44f5994437", name: "Mascara" },
  { _id: "65a7e24602e12c44f5994438", name: "Eyebrow Pencils" },
  { _id: "65a7e24602e12c44f5994439", name: "Lipsticks" },
  { _id: "65a7e24602e12c44f599443a", name: " Lip Glosses" },
  { _id: "65a7e24602e12c44f599443b", name: "Lip Liners" },
  { _id: "65a7e24602e12c44f599443c", name: "Moisturizers" },
  { _id: "65a7e24602e12c44f599443d", name: "Face Masks" },
  { _id: "65a7e24602e12c44f599443e", name: "Cleansers" },
  { _id: "65a7e24602e12c44f599443f", name: "Toners" },
];

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
