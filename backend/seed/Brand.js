const Brand = require("../models/Brand");

const brands = [
  { _id: "65a7e20102e12c44f59943da", name: "Lakme" },
  { _id: "65a7e20102e12c44f59943db", name: "MAC Cosmetic" },
  { _id: "65a7e20102e12c44f59943dc", name: "Dior Beauty" },
  { _id: "65a7e20102e12c44f59943dd", name: "Fenty Beauty by Rihanna" },
  { _id: "65a7e20102e12c44f59943de", name: "Clinique" },
  { _id: "65a7e20102e12c44f59943df", name: "Chanel" },
  { _id: "65a7e20102e12c44f59943e0", name: "NARS Cosmetics" },
  { _id: "65a7e20102e12c44f59943e1", name: "Urban Decay" },
  { _id: "65a7e20102e12c44f59943e2", name: "Maybelline New York" },
  { _id: "65a7e20102e12c44f59943e3", name: "Revlon" },
  { _id: "65a7e20102e12c44f59943e4", name: "Bobbi Brown" },
  { _id: "65a7e20102e12c44f59943e5", name: "Too Faced" },
  { _id: "65a7e20102e12c44f59943e6", name: "L'Oreal Paris" },
  { _id: "65a7e20102e12c44f59943e7", name: "Anastasia Beverly Hills" },
  { _id: "65a7e20102e12c44f59943e8", name: "Tarte Cosmetics" },
  { _id: "65a7e20102e12c44f59943e9", name: "Benefit Cosmetics" },
  { _id: "65a7e20102e12c44f59943ea", name: "Charlotte Tilbury" },
  { _id: "65a7e20102e12c44f59943eb", name: "Sephora Collection" },
  { _id: "65a7e20102e12c44f59943ec", name: "Kylie Cosmetics" },
  { _id: "65a7e20102e12c44f59943ed", name: "Smashbox" },
  { _id: "65a7e20102e12c44f59943ee", name: "BareMinerals" },
  { _id: "65a7e20102e12c44f59943ef", name: "Huda Beauty" },
  { _id: "65a7e20102e12c44f59943f0", name: "IT Cosmetics" },
  { _id: "65a7e20102e12c44f59943f1", name: "Kat Von D Beauty" },
  { _id: "65a7e20102e12c44f59943f2", name: "Pat McGrath Labs" },
  { _id: "65a7e20102e12c44f59943f3", name: "Becca Cosmetics" },
  { _id: "65a7e20102e12c44f59943f4", name: "Shiseido" },
  { _id: "65a7e20102e12c44f59943f5", name: "Giorgio Armani Beauty" },
  { _id: "65a7e20102e12c44f59943f6", name: "Origins" },
  { _id: "65a7e20102e12c44f59943f7", name: "Elizabeth Arden" },
  { _id: "65a7e20102e12c44f59943f8", name: "Arangi" },
  { _id: "65a7e20102e12c44f59943f9", name: "Clarins" },
  { _id: "65a7e20102e12c44f59943fa", name: "GlamGlow" },
  { _id: "65a7e20102e12c44f59943fb", name: " Algenist" },
  { _id: "65a7e20102e12c44f59943fc", name: "The Ordinary" },
  { _id: "65a7e20102e12c44f59943fd", name: "La Mer" },
  { _id: "65a7e20102e12c44f59943fe", name: "Mario Badescu" },
  { _id: "65a7e20102e12c44f59943ff", name: "Lush Cosmetics" },
  { _id: "65a7e20102e12c44f5994400", name: "Fresh Beauty" },
  { _id: "65a7e20102e12c44f5994401", name: "Vichy" },
  { _id: "65a7e20102e12c44f5994402", name: "Vichy" },
  { _id: "65a7e20102e12c44f5994403", name: "Aveda" },
  { _id: "65a7e20102e12c44f5994404", name: "Olay" },
  { _id: "65a7e20102e12c44f5994405", name: "Nivea" },
  { _id: "65a7e20102e12c44f5994406", name: "Milk Makeup" },
  { _id: "65a7e20102e12c44f5994407", name: "Kay beauty" },
  { _id: "65a7e20102e12c44f5994408", name: "Sugar Cosmetics" },
  { _id: "65a7e20102e12c44f5994409", name: "Biotique" },
  { _id: "65a7e20102e12c44f599440a", name: "Himalaya Herbals" },
  { _id: "65a7e20102e12c44f599440b", name: "Lotus Herbals" },
  { _id: "65a7e20102e12c44f599440c", name: "Nykaa Cosmetics" },
  { _id: "65a7e20102e12c44f599440d", name: "Elle 18" },
  { _id: "65a7e20102e12c44f599440e", name: "BBlunt" },
  { _id: "65a7e20102e12c44f599440f", name: "Kama Ayurveda" },
  { _id: "65a7e20102e12c44f5994410", name: "Forest Essentials" },
  { _id: "65a7e20102e12c44f5994411", name: "VLCC" },
  { _id: "65a7e20102e12c44f5994412", name: "Patanjali Ayurved" },
  { _id: "65a7e20102e12c44f5994413", name: "Soulflower" },
  { _id: "65a7e20102e12c44f5994414", name: "Ponds India" },
  { _id: "65a7e20102e12c44f5994415", name: "Plum Goodness" },
  { _id: "65a7e20102e12c44f5994416", name: "Madhubani" },
  { _id: "65a7e20102e12c44f5994417", name: "Zodiac" },
  { _id: "65a7e20102e12c44f5994418", name: "Santoor" },
  { _id: "65a7e20102e12c44f5994419", name: "Vega" },
  { _id: "65a7e20102e12c44f599441a", name: "Biocare" },
  { _id: "65a7e20102e12c44f599441b", name: "Colorbar" },
  { _id: "65a7e20102e12c44f599441c", name: "Blue Heaven" },
  { _id: "65a7e20102e12c44f599441d", name: "Swiss Beauty" },
  { _id: "65a7e20102e12c44f599441e", name: "MyGlamm" },
  { _id: "65a7e20102e12c44f599441f", name: "Purplle" },
  { _id: "65a7e20102e12c44f5994420", name: "Beauty Marque" },
  { _id: "65a7e20102e12c44f5994421", name: "Sculpt by Saniya" },
  { _id: "65a7e20102e12c44f5994422", name: "Inglot Cosmetics" },
  { _id: "65a7e20102e12c44f5994423", name: "Sleek Makeup" },
  { _id: "65a7e20102e12c44f5994424", name: "Gush Beauty" },
  { _id: "65a7e20102e12c44f5994425", name: "Disguise Cosmetics" },
  { _id: "65a7e20102e12c44f5994426", name: "Fuschia by Vkare" },
  { _id: "65a7e20102e12c44f5994427", name: "Dove" },
];

exports.seedBrand = async () => {
  try {
    await Brand.insertMany(brands);
    console.log('Brand seeded successfully');
  } catch (error) {
    console.log(error);
  }
};
