const sequelize = require('../config/connection');
const { Package } = require('../models');

const packageData = [
    {
        name: 'Wash & Vacuum',
        description: 'Includes: hand wash, interior vacuuming, dash & console wipe down, outside & inside window cleaning, wheel cleaning, tire dressing',
        price: 'Sedan $50 / Truck/SUV $70'
    },
    {
        name: 'Engine Bay Wash',
        description: 'Show Your Engine Some Love',
        price: '$50'
    },
    {
        name: 'Interior Detail',
        description: 'Includes: Shampooed & extracted Seats & Carpet, Steam Cleaned & Disinfected Interior',
        price: 'Sedan $160+ / Truck/SUV $190+'
    },
    {
        name: 'Wash & Wax',
        description: 'Exterior Wash plus Wax',
        price: '$120-$150'
    }
];

const seedPackages = () => Package.bulkCreate(packageData);

module.exports = seedPackages;