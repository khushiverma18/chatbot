const mongoose=require('mongoose')
const Product=require('./models/product.js')

main().then(()=>{
    console.log('database-connect')
}).catch((err)=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/chatbot')
}

const seedProducts = async () => {
  await Product.deleteMany(); // Clear existing products
  await Product.insertMany([
        {
          "id": 1,
          "name": "Product 1",
          "description": "Description 1",
          "price": 10.99
        },
        {
          "id": 2,
          "name": "Product 2",
          "description": "Description 2",
          "price": 21.98
        },
        {
          "id": 3,
          "name": "Product 3",
          "description": "Description 3",
          "price": 32.97
        },
        {
          "id": 4,
          "name": "Product 4",
          "description": "Description 4",
          "price": 43.96
        },
        {
          "id": 5,
          "name": "Product 5",
          "description": "Description 5",
          "price": 54.95
        },
        {
          "id": 6,
          "name": "Product 6",
          "description": "Description 6",
          "price": 65.94
        },
        {
          "id": 7,
          "name": "Product 7",
          "description": "Description 7",
          "price": 76.93
        },
        {
          "id": 8,
          "name": "Product 8",
          "description": "Description 8",
          "price": 87.92
        },
        {
          "id": 9,
          "name": "Product 9",
          "description": "Description 9",
          "price": 98.91
        },
        {
          "id": 10,
          "name": "Product 10",
          "description": "Description 10",
          "price": 109.9
        },
        {
          "id": 11,
          "name": "Product 11",
          "description": "Description 11",
          "price": 120.89
        },
        {
          "id": 12,
          "name": "Product 12",
          "description": "Description 12",
          "price": 131.88
        },
        {
          "id": 13,
          "name": "Product 13",
          "description": "Description 13",
          "price": 142.87
        },
        {
          "id": 14,
          "name": "Product 14",
          "description": "Description 14",
          "price": 153.86
        },
        {
          "id": 15,
          "name": "Product 15",
          "description": "Description 15",
          "price": 164.85
        },
        {
          "id": 16,
          "name": "Product 16",
          "description": "Description 16",
          "price": 175.84
        },
        {
          "id": 17,
          "name": "Product 17",
          "description": "Description 17",
          "price": 186.83
        },
        {
          "id": 18,
          "name": "Product 18",
          "description": "Description 18",
          "price": 197.82
        },
        {
          "id": 19,
          "name": "Product 19",
          "description": "Description 19",
          "price": 208.81
        },
        {
          "id": 20,
          "name": "Product 20",
          "description": "Description 20",
          "price": 219.8
        },
        {
          "id": 21,
          "name": "Product 21",
          "description": "Description 21",
          "price": 230.79
        },
        {
          "id": 22,
          "name": "Product 22",
          "description": "Description 22",
          "price": 241.78
        },
        {
          "id": 23,
          "name": "Product 23",
          "description": "Description 23",
          "price": 252.77
        },
        {
          "id": 24,
          "name": "Product 24",
          "description": "Description 24",
          "price": 263.76
        },
        {
          "id": 25,
          "name": "Product 25",
          "description": "Description 25",
          "price": 274.75
        },
        {
          "id": 26,
          "name": "Product 26",
          "description": "Description 26",
          "price": 285.74
        },
        {
          "id": 27,
          "name": "Product 27",
          "description": "Description 27",
          "price": 296.73
        },
        {
          "id": 28,
          "name": "Product 28",
          "description": "Description 28",
          "price": 307.72
        },
        {
          "id": 29,
          "name": "Product 29",
          "description": "Description 29",
          "price": 318.71
        },
        {
          "id": 30,
          "name": "Product 30",
          "description": "Description 30",
          "price": 329.7
        },
        {
          "id": 31,
          "name": "Product 31",
          "description": "Description 31",
          "price": 340.69
        },
        {
          "id": 32,
          "name": "Product 32",
          "description": "Description 32",
          "price": 351.68
        },
        {
          "id": 33,
          "name": "Product 33",
          "description": "Description 33",
          "price": 362.67
        },
        {
          "id": 34,
          "name": "Product 34",
          "description": "Description 34",
          "price": 373.66
        },
        {
          "id": 35,
          "name": "Product 35",
          "description": "Description 35",
          "price": 384.65
        },
        {
          "id": 36,
          "name": "Product 36",
          "description": "Description 36",
          "price": 395.64
        },
        {
          "id": 37,
          "name": "Product 37",
          "description": "Description 37",
          "price": 406.63
        },
        {
          "id": 38,
          "name": "Product 38",
          "description": "Description 38",
          "price": 417.62
        },
        {
          "id": 39,
          "name": "Product 39",
          "description": "Description 39",
          "price": 428.61
        },
        {
          "id": 40,
          "name": "Product 40",
          "description": "Description 40",
          "price": 439.6
        },
        {
          "id": 41,
          "name": "Product 41",
          "description": "Description 41",
          "price": 450.59
        },
        {
          "id": 42,
          "name": "Product 42",
          "description": "Description 42",
          "price": 461.58
        },
        {
          "id": 43,
          "name": "Product 43",
          "description": "Description 43",
          "price": 472.57
        },
        {
          "id": 44,
          "name": "Product 44",
          "description": "Description 44",
          "price": 483.56
        },
        {
          "id": 45,
          "name": "Product 45",
          "description": "Description 45",
          "price": 494.55
        },
        {
          "id": 46,
          "name": "Product 46",
          "description": "Description 46",
          "price": 505.54
        },
        {
          "id": 47,
          "name": "Product 47",
          "description": "Description 47",
          "price": 516.53
        },
        {
          "id": 48,
          "name": "Product 48",
          "description": "Description 48",
          "price": 527.52
        },
        {
          "id": 49,
          "name": "Product 49",
          "description": "Description 49",
          "price": 538.51
        },
        {
          "id": 50,
          "name": "Product 50",
          "description": "Description 50",
          "price": 549.5
        },
        {
          "id": 51,
          "name": "Product 51",
          "description": "Description 51",
          "price": 560.49
        },
        {
          "id": 52,
          "name": "Product 52",
          "description": "Description 52",
          "price": 571.48
        },
        {
          "id": 53,
          "name": "Product 53",
          "description": "Description 53",
          "price": 582.47
        },
        {
          "id": 54,
          "name": "Product 54",
          "description": "Description 54",
          "price": 593.46
        },
        {
          "id": 55,
          "name": "Product 55",
          "description": "Description 55",
          "price": 604.45
        },
        {
          "id": 56,
          "name": "Product 56",
          "description": "Description 56",
          "price": 615.44
        },
        {
          "id": 57,
          "name": "Product 57",
          "description": "Description 57",
          "price": 626.43
        },
        {
          "id": 58,
          "name": "Product 58",
          "description": "Description 58",
          "price": 637.42
        },
        {
          "id": 59,
          "name": "Product 59",
          "description": "Description 59",
          "price": 648.41
        },
        {
          "id": 60,
          "name": "Product 60",
          "description": "Description 60",
          "price": 659.4
        },
        {
          "id": 61,
          "name": "Product 61",
          "description": "Description 61",
          "price": 670.39
        },
        {
          "id": 62,
          "name": "Product 62",
          "description": "Description 62",
          "price": 681.38
        },
        {
          "id": 63,
          "name": "Product 63",
          "description": "Description 63",
          "price": 692.37
        },
        {
          "id": 64,
          "name": "Product 64",
          "description": "Description 64",
          "price": 703.36
        },
        {
          "id": 65,
          "name": "Product 65",
          "description": "Description 65",
          "price": 714.35
        },
        {
          "id": 66,
          "name": "Product 66",
          "description": "Description 66",
          "price": 725.34
        },
        {
          "id": 67,
          "name": "Product 67",
          "description": "Description 67",
          "price": 736.33
        },
        {
          "id": 68,
          "name": "Product 68",
          "description": "Description 68",
          "price": 747.32
        },
        {
          "id": 69,
          "name": "Product 69",
          "description": "Description 69",
          "price": 758.31
        },
        {
          "id": 70,
          "name": "Product 70",
          "description": "Description 70",
          "price": 769.3
        },
        {
          "id": 71,
          "name": "Product 71",
          "description": "Description 71",
          "price": 780.29
        },
        {
          "id": 72,
          "name": "Product 72",
          "description": "Description 72",
          "price": 791.28
        },
        {
          "id": 73,
          "name": "Product 73",
          "description": "Description 73",
          "price": 802.27
        },
        {
          "id": 74,
          "name": "Product 74",
          "description": "Description 74",
          "price": 813.26
        },
        {
          "id": 75,
          "name": "Product 75",
          "description": "Description 75",
          "price": 824.25
        },
        {
          "id": 76,
          "name": "Product 76",
          "description": "Description 76",
          "price": 835.24
        },
        {
          "id": 77,
          "name": "Product 77",
          "description": "Description 77",
          "price": 846.23
        },
        {
          "id": 78,
          "name": "Product 78",
          "description": "Description 78",
          "price": 857.22
        },
        {
          "id": 79,
          "name": "Product 79",
          "description": "Description 79",
          "price": 868.21
        },
        {
          "id": 80,
          "name": "Product 80",
          "description": "Description 80",
          "price": 879.2
        },
        {
          "id": 81,
          "name": "Product 81",
          "description": "Description 81",
          "price": 890.19
        },
        {
          "id": 82,
          "name": "Product 82",
          "description": "Description 82",
          "price": 901.18
        },
        {
          "id": 83,
          "name": "Product 83",
          "description": "Description 83",
          "price": 912.17
        },
        {
          "id": 84,
          "name": "Product 84",
          "description": "Description 84",
          "price": 923.16
        },
        {
          "id": 85,
          "name": "Product 85",
          "description": "Description 85",
          "price": 934.15
        },
        {
          "id": 86,
          "name": "Product 86",
          "description": "Description 86",
          "price": 945.14
        },
        {
          "id": 87,
          "name": "Product 87",
          "description": "Description 87",
          "price": 956.13
        },
        {
          "id": 88,
          "name": "Product 88",
          "description": "Description 88",
          "price": 967.12
        },
        {
          "id": 89,
          "name": "Product 89",
          "description": "Description 89",
          "price": 978.11
        },
        {
          "id": 90,
          "name": "Product 90",
          "description": "Description 90",
          "price": 989.1
        },
        {
          "id": 91,
          "name": "Product 91",
          "description": "Description 91",
          "price": 1000.09
        },
        {
          "id": 92,
          "name": "Product 92",
          "description": "Description 92",
          "price": 1011.08
        },
        {
          "id": 93,
          "name": "Product 93",
          "description": "Description 93",
          "price": 1022.07
        },
        {
          "id": 94,
          "name": "Product 94",
          "description": "Description 94",
          "price": 1033.06
        },
        {
          "id": 95,
          "name": "Product 95",
          "description": "Description 95",
          "price": 1044.05
        },
        {
          "id": 96,
          "name": "Product 96",
          "description": "Description 96",
          "price": 1055.04
        },
        {
          "id": 97,
          "name": "Product 97",
          "description": "Description 97",
          "price": 1066.03
        },
        {
          "id": 98,
          "name": "Product 98",
          "description": "Description 98",
          "price": 1077.02
        },
        {
          "id": 99,
          "name": "Product 99",
          "description": "Description 99",
          "price": 1088.01
        },
        {
          "id": 100,
          "name": "Product 100",
          "description": "Description 100",
          "price": 1099
        },
        {
          "id": 101,
          "name": "Product 1",
          "description": "Description 1",
          "price": 10.99
        },
        {
          "id": 102,
          "name": "Product 2",
          "description": "Description 2",
          "price": 21.98
        },
        {
          "id": 103,
          "name": "Product 3",
          "description": "Description 3",
          "price": 32.97
        },
        {
          "id": 104,
          "name": "Product 4",
          "description": "Description 4",
          "price": 43.96
        },
        {
          "id": 105,
          "name": "Product 5",
          "description": "Description 5",
          "price": 54.95
        },
        {
          "id": 106,
          "name": "Product 6",
          "description": "Description 6",
          "price": 65.94
        },
        {
          "id": 107,
          "name": "Product 7",
          "description": "Description 7",
          "price": 76.93
        },
        {
          "id": 108,
          "name": "Product 8",
          "description": "Description 8",
          "price": 87.92
        },
        {
          "id": 109,
          "name": "Product 9",
          "description": "Description 9",
          "price": 98.91
        },
        {
          "id": 110,
          "name": "Product 10",
          "description": "Description 10",
          "price": 109.9
        },
        {
          "id": 111,
          "name": "Product 11",
          "description": "Description 11",
          "price": 120.89
        },
        {
          "id": 112,
          "name": "Product 12",
          "description": "Description 12",
          "price": 131.88
        },
        {
          "id": 113,
          "name": "Product 13",
          "description": "Description 13",
          "price": 142.87
        },
        {
          "id": 114,
          "name": "Product 14",
          "description": "Description 14",
          "price": 153.86
        },
        {
          "id": 115,
          "name": "Product 15",
          "description": "Description 15",
          "price": 164.85
        },
        {
          "id": 116,
          "name": "Product 16",
          "description": "Description 16",
          "price": 175.84
        },
        {
          "id": 117,
          "name": "Product 17",
          "description": "Description 17",
          "price": 186.83
        },
        {
          "id": 118,
          "name": "Product 18",
          "description": "Description 18",
          "price": 197.82
        },
        {
          "id": 119,
          "name": "Product 19",
          "description": "Description 19",
          "price": 208.81
        },
        {
          "id": 120,
          "name": "Product 20",
          "description": "Description 20",
          "price": 219.8
        },
        {
          "id": 121,
          "name": "Product 21",
          "description": "Description 21",
          "price": 230.79
        },
        {
          "id": 122,
          "name": "Product 22",
          "description": "Description 22",
          "price": 241.78
        },
        {
          "id": 123,
          "name": "Product 23",
          "description": "Description 23",
          "price": 252.77
        },
        {
          "id": 124,
          "name": "Product 24",
          "description": "Description 24",
          "price": 263.76
        },
        {
          "id": 125,
          "name": "Product 25",
          "description": "Description 25",
          "price": 274.75
        },
        {
          "id": 126,
          "name": "Product 26",
          "description": "Description 26",
          "price": 285.74
        },
        {
          "id": 127,
          "name": "Product 27",
          "description": "Description 27",
          "price": 296.73
        },
        {
          "id": 128,
          "name": "Product 28",
          "description": "Description 28",
          "price": 307.72
        },
        {
          "id": 129,
          "name": "Product 29",
          "description": "Description 29",
          "price": 318.71
        },
        {
          "id": 130,
          "name": "Product 30",
          "description": "Description 30",
          "price": 329.7
        },
        {
          "id": 131,
          "name": "Product 31",
          "description": "Description 31",
          "price": 340.69
        },
        {
          "id": 132,
          "name": "Product 32",
          "description": "Description 32",
          "price": 351.68
        },
        {
          "id": 133,
          "name": "Product 33",
          "description": "Description 33",
          "price": 362.67
        },
        {
          "id": 134,
          "name": "Product 34",
          "description": "Description 34",
          "price": 373.66
        },
        {
          "id": 135,
          "name": "Product 35",
          "description": "Description 35",
          "price": 384.65
        },
        {
          "id": 136,
          "name": "Product 36",
          "description": "Description 36",
          "price": 395.64
        },
        {
          "id": 137,
          "name": "Product 37",
          "description": "Description 37",
          "price": 406.63
        },
        {
          "id": 138,
          "name": "Product 38",
          "description": "Description 38",
          "price": 417.62
        },
        {
          "id": 139,
          "name": "Product 39",
          "description": "Description 39",
          "price": 428.61
        },
        {
          "id": 140,
          "name": "Product 40",
          "description": "Description 40",
          "price": 439.6
        },
        {
          "id": 141,
          "name": "Product 41",
          "description": "Description 41",
          "price": 450.59
        },
        {
          "id": 142,
          "name": "Product 42",
          "description": "Description 42",
          "price": 461.58
        },
        {
          "id": 143,
          "name": "Product 43",
          "description": "Description 43",
          "price": 472.57
        },
        {
          "id": 144,
          "name": "Product 44",
          "description": "Description 44",
          "price": 483.56
        },
        {
          "id": 145,
          "name": "Product 45",
          "description": "Description 45",
          "price": 494.55
        },
        {
          "id": 146,
          "name": "Product 46",
          "description": "Description 46",
          "price": 505.54
        },
        {
          "id": 147,
          "name": "Product 47",
          "description": "Description 47",
          "price": 516.53
        },
        {
          "id": 148,
          "name": "Product 48",
          "description": "Description 48",
          "price": 527.52
        },
        {
          "id": 149,
          "name": "Product 49",
          "description": "Description 49",
          "price": 538.51
        },
        {
          "id": 150,
          "name": "Product 50",
          "description": "Description 50",
          "price": 549.5
        },
        {
          "id": 151,
          "name": "Product 51",
          "description": "Description 51",
          "price": 560.49
        },
        {
          "id": 152,
          "name": "Product 52",
          "description": "Description 52",
          "price": 571.48
        },
        {
          "id": 153,
          "name": "Product 53",
          "description": "Description 53",
          "price": 582.47
        },
        {
          "id": 154,
          "name": "Product 54",
          "description": "Description 54",
          "price": 593.46
        },
        {
          "id": 155,
          "name": "Product 55",
          "description": "Description 55",
          "price": 604.45
        },
        {
          "id": 156,
          "name": "Product 56",
          "description": "Description 56",
          "price": 615.44
        },
        {
          "id": 157,
          "name": "Product 57",
          "description": "Description 57",
          "price": 626.43
        },
        {
          "id": 158,
          "name": "Product 58",
          "description": "Description 58",
          "price": 637.42
        },
        {
          "id": 159,
          "name": "Product 59",
          "description": "Description 59",
          "price": 648.41
        },
        {
          "id": 160,
          "name": "Product 60",
          "description": "Description 60",
          "price": 659.4
        },
        {
          "id": 161,
          "name": "Product 61",
          "description": "Description 61",
          "price": 670.39
        },
        {
          "id": 162,
          "name": "Product 62",
          "description": "Description 62",
          "price": 681.38
        },
        {
          "id": 163,
          "name": "Product 63",
          "description": "Description 63",
          "price": 692.37
        },
        {
          "id": 164,
          "name": "Product 64",
          "description": "Description 64",
          "price": 703.36
        },
        {
          "id": 165,
          "name": "Product 65",
          "description": "Description 65",
          "price": 714.35
        },
        {
          "id": 166,
          "name": "Product 66",
          "description": "Description 66",
          "price": 725.34
        },
        {
          "id": 167,
          "name": "Product 67",
          "description": "Description 67",
          "price": 736.33
        },
        {
          "id": 168,
          "name": "Product 68",
          "description": "Description 68",
          "price": 747.32
        },
        {
          "id": 169,
          "name": "Product 69",
          "description": "Description 69",
          "price": 758.31
        },
        {
          "id": 170,
          "name": "Product 70",
          "description": "Description 70",
          "price": 769.3
        },
        {
          "id": 171,
          "name": "Product 71",
          "description": "Description 71",
          "price": 780.29
        },
        {
          "id": 172,
          "name": "Product 72",
          "description": "Description 72",
          "price": 791.28
        },
        {
          "id": 173,
          "name": "Product 73",
          "description": "Description 73",
          "price": 802.27
        },
        {
          "id": 174,
          "name": "Product 74",
          "description": "Description 74",
          "price": 813.26
        },
        {
          "id": 175,
          "name": "Product 75",
          "description": "Description 75",
          "price": 824.25
        },
        {
          "id": 176,
          "name": "Product 76",
          "description": "Description 76",
          "price": 835.24
        },
        {
          "id": 177,
          "name": "Product 77",
          "description": "Description 77",
          "price": 846.23
        },
        {
          "id": 178,
          "name": "Product 78",
          "description": "Description 78",
          "price": 857.22
        },
        {
          "id": 179,
          "name": "Product 79",
          "description": "Description 79",
          "price": 868.21
        },
        {
          "id": 180,
          "name": "Product 80",
          "description": "Description 80",
          "price": 879.2
        },
        {
          "id": 181,
          "name": "Product 81",
          "description": "Description 81",
          "price": 890.19
        },
        {
          "id": 182,
          "name": "Product 82",
          "description": "Description 82",
          "price": 901.18
        },
        {
          "id": 183,
          "name": "Product 83",
          "description": "Description 83",
          "price": 912.17
        },
        {
          "id": 184,
          "name": "Product 84",
          "description": "Description 84",
          "price": 923.16
        },
        {
          "id": 185,
          "name": "Product 85",
          "description": "Description 85",
          "price": 934.15
        },
        {
          "id": 186,
          "name": "Product 86",
          "description": "Description 86",
          "price": 945.14
        },
        {
          "id": 187,
          "name": "Product 87",
          "description": "Description 87",
          "price": 956.13
        },
        {
          "id": 188,
          "name": "Product 88",
          "description": "Description 88",
          "price": 967.12
        },
        {
          "id": 189,
          "name": "Product 89",
          "description": "Description 89",
          "price": 978.11
        },
        {
          "id": 190,
          "name": "Product 90",
          "description": "Description 90",
          "price": 989.1
        },
        {
          "id": 191,
          "name": "Product 91",
          "description": "Description 91",
          "price": 1000.09
        },
        {
          "id": 192,
          "name": "Product 92",
          "description": "Description 92",
          "price": 1011.08
        },
        {
          "id": 193,
          "name": "Product 93",
          "description": "Description 93",
          "price": 1022.07
        },
        {
          "id": 194,
          "name": "Product 94",
          "description": "Description 94",
          "price": 1033.06
        },
        {
          "id": 195,
          "name": "Product 95",
          "description": "Description 95",
          "price": 1044.05
        },
        {
          "id": 196,
          "name": "Product 96",
          "description": "Description 96",
          "price": 1055.04
        },
        {
          "id": 197,
          "name": "Product 97",
          "description": "Description 97",
          "price": 1066.03
        },
        {
          "id": 198,
          "name": "Product 98",
          "description": "Description 98",
          "price": 1077.02
        },
        {
          "id": 199,
          "name": "Product 99",
          "description": "Description 99",
          "price": 1088.01
        },
        {
          "id": 200,
          "name": "Product 100",
          "description": "Description 100",
          "price": 1099
        },
        {
          "id": 201,
          "name": "Product 1",
          "description": "Description 1",
          "price": 10.99
        },
        {
          "id": 202,
          "name": "Product 2",
          "description": "Description 2",
          "price": 21.98
        },
        {
          "id": 203,
          "name": "Product 3",
          "description": "Description 3",
          "price": 32.97
        },
        {
          "id": 204,
          "name": "Product 4",
          "description": "Description 4",
          "price": 43.96
        },
        {
          "id": 205,
          "name": "Product 5",
          "description": "Description 5",
          "price": 54.95
        },
        {
          "id": 206,
          "name": "Product 6",
          "description": "Description 6",
          "price": 65.94
        },
        {
          "id": 207,
          "name": "Product 7",
          "description": "Description 7",
          "price": 76.93
        },
        {
          "id": 208,
          "name": "Product 8",
          "description": "Description 8",
          "price": 87.92
        },
        {
          "id": 209,
          "name": "Product 9",
          "description": "Description 9",
          "price": 98.91
        },
        {
          "id": 210,
          "name": "Product 10",
          "description": "Description 10",
          "price": 109.9
        },
        {
          "id": 211,
          "name": "Product 11",
          "description": "Description 11",
          "price": 120.89
        },
        {
          "id": 212,
          "name": "Product 12",
          "description": "Description 12",
          "price": 131.88
        },
        {
          "id": 213,
          "name": "Product 13",
          "description": "Description 13",
          "price": 142.87
        },
        {
          "id": 214,
          "name": "Product 14",
          "description": "Description 14",
          "price": 153.86
        },
        {
          "id": 215,
          "name": "Product 15",
          "description": "Description 15",
          "price": 164.85
        },
        {
          "id": 216,
          "name": "Product 16",
          "description": "Description 16",
          "price": 175.84
        },
        {
          "id": 217,
          "name": "Product 17",
          "description": "Description 17",
          "price": 186.83
        },
        {
          "id": 218,
          "name": "Product 18",
          "description": "Description 18",
          "price": 197.82
        },
        {
          "id": 219,
          "name": "Product 19",
          "description": "Description 19",
          "price": 208.81
        },
        {
          "id": 220,
          "name": "Product 20",
          "description": "Description 20",
          "price": 219.8
        },
        {
          "id": 221,
          "name": "Product 21",
          "description": "Description 21",
          "price": 230.79
        },
        {
          "id": 222,
          "name": "Product 22",
          "description": "Description 22",
          "price": 241.78
        },
        {
          "id": 223,
          "name": "Product 23",
          "description": "Description 23",
          "price": 252.77
        },
        {
          "id": 224,
          "name": "Product 24",
          "description": "Description 24",
          "price": 263.76
        },
        {
          "id": 225,
          "name": "Product 25",
          "description": "Description 25",
          "price": 274.75
        },
        {
          "id": 226,
          "name": "Product 26",
          "description": "Description 26",
          "price": 285.74
        },
        {
          "id": 227,
          "name": "Product 27",
          "description": "Description 27",
          "price": 296.73
        },
        {
          "id": 228,
          "name": "Product 28",
          "description": "Description 28",
          "price": 307.72
        },
        {
          "id": 229,
          "name": "Product 29",
          "description": "Description 29",
          "price": 318.71
        },
        {
          "id": 230,
          "name": "Product 30",
          "description": "Description 30",
          "price": 329.7
        },
        {
          "id": 231,
          "name": "Product 31",
          "description": "Description 31",
          "price": 340.69
        },
        {
          "id": 232,
          "name": "Product 32",
          "description": "Description 32",
          "price": 351.68
        },
        {
          "id": 233,
          "name": "Product 33",
          "description": "Description 33",
          "price": 362.67
        },
        {
          "id": 234,
          "name": "Product 34",
          "description": "Description 34",
          "price": 373.66
        },
        {
          "id": 235,
          "name": "Product 35",
          "description": "Description 35",
          "price": 384.65
        },
        {
          "id": 236,
          "name": "Product 36",
          "description": "Description 36",
          "price": 395.64
        },
        {
          "id": 237,
          "name": "Product 37",
          "description": "Description 37",
          "price": 406.63
        },
        {
          "id": 238,
          "name": "Product 38",
          "description": "Description 38",
          "price": 417.62
        },
        {
          "id": 239,
          "name": "Product 39",
          "description": "Description 39",
          "price": 428.61
        },
        {
          "id": 240,
          "name": "Product 40",
          "description": "Description 40",
          "price": 439.6
        },
        {
          "id": 241,
          "name": "Product 41",
          "description": "Description 41",
          "price": 450.59
        },
        {
          "id": 242,
          "name": "Product 42",
          "description": "Description 42",
          "price": 461.58
        },
        {
          "id": 243,
          "name": "Product 43",
          "description": "Description 43",
          "price": 472.57
        },
        {
          "id": 244,
          "name": "Product 44",
          "description": "Description 44",
          "price": 483.56
        },
        {
          "id": 245,
          "name": "Product 45",
          "description": "Description 45",
          "price": 494.55
        },
        {
          "id": 246,
          "name": "Product 46",
          "description": "Description 46",
          "price": 505.54
        },
        {
          "id": 247,
          "name": "Product 47",
          "description": "Description 47",
          "price": 516.53
        },
        {
          "id": 248,
          "name": "Product 48",
          "description": "Description 48",
          "price": 527.52
        },
        {
          "id": 249,
          "name": "Product 49",
          "description": "Description 49",
          "price": 538.51
        },
        {
          "id": 250,
          "name": "Product 50",
          "description": "Description 50",
          "price": 549.5
        },
        {
          "id": 251,
          "name": "Product 51",
          "description": "Description 51",
          "price": 560.49
        },
        {
          "id": 252,
          "name": "Product 52",
          "description": "Description 52",
          "price": 571.48
        },
        {
          "id": 253,
          "name": "Product 53",
          "description": "Description 53",
          "price": 582.47
        },
        {
          "id": 254,
          "name": "Product 54",
          "description": "Description 54",
          "price": 593.46
        },
        {
          "id": 255,
          "name": "Product 55",
          "description": "Description 55",
          "price": 604.45
        },
        {
          "id": 256,
          "name": "Product 56",
          "description": "Description 56",
          "price": 615.44
        },
        {
          "id": 257,
          "name": "Product 57",
          "description": "Description 57",
          "price": 626.43
        },
        {
          "id": 258,
          "name": "Product 58",
          "description": "Description 58",
          "price": 637.42
        },
        {
          "id": 259,
          "name": "Product 59",
          "description": "Description 59",
          "price": 648.41
        },
        {
          "id": 260,
          "name": "Product 60",
          "description": "Description 60",
          "price": 659.4
        },
        {
          "id": 261,
          "name": "Product 61",
          "description": "Description 61",
          "price": 670.39
        },
        {
          "id": 262,
          "name": "Product 62",
          "description": "Description 62",
          "price": 681.38
        },
        {
          "id": 263,
          "name": "Product 63",
          "description": "Description 63",
          "price": 692.37
        },
        {
          "id": 264,
          "name": "Product 64",
          "description": "Description 64",
          "price": 703.36
        },
        {
          "id": 265,
          "name": "Product 65",
          "description": "Description 65",
          "price": 714.35
        },
        {
          "id": 266,
          "name": "Product 66",
          "description": "Description 66",
          "price": 725.34
        },
        {
          "id": 267,
          "name": "Product 67",
          "description": "Description 67",
          "price": 736.33
        },
        {
          "id": 268,
          "name": "Product 68",
          "description": "Description 68",
          "price": 747.32
        },
        {
          "id": 269,
          "name": "Product 69",
          "description": "Description 69",
          "price": 758.31
        },
        {
          "id": 270,
          "name": "Product 70",
          "description": "Description 70",
          "price": 769.3
        },
        {
          "id": 271,
          "name": "Product 71",
          "description": "Description 71",
          "price": 780.29
        },
        {
          "id": 272,
          "name": "Product 72",
          "description": "Description 72",
          "price": 791.28
        },
        {
          "id": 273,
          "name": "Product 73",
          "description": "Description 73",
          "price": 802.27
        },
        {
          "id": 274,
          "name": "Product 74",
          "description": "Description 74",
          "price": 813.26
        },
        {
          "id": 275,
          "name": "Product 75",
          "description": "Description 75",
          "price": 824.25
        },
        {
          "id": 276,
          "name": "Product 76",
          "description": "Description 76",
          "price": 835.24
        },
        {
          "id": 277,
          "name": "Product 77",
          "description": "Description 77",
          "price": 846.23
        },
        {
          "id": 278,
          "name": "Product 78",
          "description": "Description 78",
          "price": 857.22
        },
        {
          "id": 279,
          "name": "Product 79",
          "description": "Description 79",
          "price": 868.21
        },
        {
          "id": 280,
          "name": "Product 80",
          "description": "Description 80",
          "price": 879.2
        },
        {
          "id": 281,
          "name": "Product 81",
          "description": "Description 81",
          "price": 890.19
        },
        {
          "id": 282,
          "name": "Product 82",
          "description": "Description 82",
          "price": 901.18
        },
        {
          "id": 283,
          "name": "Product 83",
          "description": "Description 83",
          "price": 912.17
        },
        {
          "id": 284,
          "name": "Product 84",
          "description": "Description 84",
          "price": 923.16
        },
        {
          "id": 285,
          "name": "Product 85",
          "description": "Description 85",
          "price": 934.15
        },
        {
          "id": 286,
          "name": "Product 86",
          "description": "Description 86",
          "price": 945.14
        },
        {
          "id": 287,
          "name": "Product 87",
          "description": "Description 87",
          "price": 956.13
        },
        {
          "id": 288,
          "name": "Product 88",
          "description": "Description 88",
          "price": 967.12
        },
        {
          "id": 289,
          "name": "Product 89",
          "description": "Description 89",
          "price": 978.11
        },
        {
          "id": 290,
          "name": "Product 90",
          "description": "Description 90",
          "price": 989.1
        },
        {
          "id": 291,
          "name": "Product 91",
          "description": "Description 91",
          "price": 1000.09
        },
        {
          "id": 292,
          "name": "Product 92",
          "description": "Description 92",
          "price": 1011.08
        },
        {
          "id": 293,
          "name": "Product 93",
          "description": "Description 93",
          "price": 1022.07
        },
        {
          "id": 294,
          "name": "Product 94",
          "description": "Description 94",
          "price": 1033.06
        },
        {
          "id": 295,
          "name": "Product 95",
          "description": "Description 95",
          "price": 1044.05
        },
        {
          "id": 296,
          "name": "Product 96",
          "description": "Description 96",
          "price": 1055.04
        },
        {
          "id": 297,
          "name": "Product 97",
          "description": "Description 97",
          "price": 1066.03
        },
        {
          "id": 298,
          "name": "Product 98",
          "description": "Description 98",
          "price": 1077.02
        },
        {
          "id": 299,
          "name": "Product 99",
          "description": "Description 99",
          "price": 1088.01
        },
        {
          "id": 300,
          "name": "Product 100",
          "description": "Description 100",
          "price": 1099
        },
        {
          "id": 301,
          "name": "Product 1",
          "description": "Description 1",
          "price": 10.99
        },
        {
          "id": 302,
          "name": "Product 2",
          "description": "Description 2",
          "price": 21.98
        },
        {
          "id": 303,
          "name": "Product 3",
          "description": "Description 3",
          "price": 32.97
        },
        {
          "id": 304,
          "name": "Product 4",
          "description": "Description 4",
          "price": 43.96
        },
        {
          "id": 305,
          "name": "Product 5",
          "description": "Description 5",
          "price": 54.95
        },
        {
          "id": 306,
          "name": "Product 6",
          "description": "Description 6",
          "price": 65.94
        },
        {
          "id": 307,
          "name": "Product 7",
          "description": "Description 7",
          "price": 76.93
        },
        {
          "id": 308,
          "name": "Product 8",
          "description": "Description 8",
          "price": 87.92
        },
        {
          "id": 309,
          "name": "Product 9",
          "description": "Description 9",
          "price": 98.91
        },
        {
          "id": 310,
          "name": "Product 10",
          "description": "Description 10",
          "price": 109.9
        },
        {
          "id": 311,
          "name": "Product 11",
          "description": "Description 11",
          "price": 120.89
        },
        {
          "id": 312,
          "name": "Product 12",
          "description": "Description 12",
          "price": 131.88
        },
        {
          "id": 313,
          "name": "Product 13",
          "description": "Description 13",
          "price": 142.87
        },
        {
          "id": 314,
          "name": "Product 14",
          "description": "Description 14",
          "price": 153.86
        },
        {
          "id": 315,
          "name": "Product 15",
          "description": "Description 15",
          "price": 164.85
        },
        {
          "id": 316,
          "name": "Product 16",
          "description": "Description 16",
          "price": 175.84
        },
        {
          "id": 317,
          "name": "Product 17",
          "description": "Description 17",
          "price": 186.83
        },
        {
          "id": 318,
          "name": "Product 18",
          "description": "Description 18",
          "price": 197.82
        },
        {
          "id": 319,
          "name": "Product 19",
          "description": "Description 19",
          "price": 208.81
        },
        {
          "id": 320,
          "name": "Product 20",
          "description": "Description 20",
          "price": 219.8
        },
        {
          "id": 321,
          "name": "Product 21",
          "description": "Description 21",
          "price": 230.79
        },
        {
          "id": 322,
          "name": "Product 22",
          "description": "Description 22",
          "price": 241.78
        },
        {
          "id": 323,
          "name": "Product 23",
          "description": "Description 23",
          "price": 252.77
        },
        {
          "id": 324,
          "name": "Product 24",
          "description": "Description 24",
          "price": 263.76
        },
        {
          "id": 325,
          "name": "Product 25",
          "description": "Description 25",
          "price": 274.75
        },
        {
          "id": 326,
          "name": "Product 26",
          "description": "Description 26",
          "price": 285.74
        },
        {
          "id": 327,
          "name": "Product 27",
          "description": "Description 27",
          "price": 296.73
        },
        {
          "id": 328,
          "name": "Product 28",
          "description": "Description 28",
          "price": 307.72
        },
        {
          "id": 329,
          "name": "Product 29",
          "description": "Description 29",
          "price": 318.71
        },
        {
          "id": 330,
          "name": "Product 30",
          "description": "Description 30",
          "price": 329.7
        },
        {
          "id": 331,
          "name": "Product 31",
          "description": "Description 31",
          "price": 340.69
        },
        {
          "id": 332,
          "name": "Product 32",
          "description": "Description 32",
          "price": 351.68
        },
        {
          "id": 333,
          "name": "Product 33",
          "description": "Description 33",
          "price": 362.67
        },
        {
          "id": 334,
          "name": "Product 34",
          "description": "Description 34",
          "price": 373.66
        },
        {
          "id": 335,
          "name": "Product 35",
          "description": "Description 35",
          "price": 384.65
        },
        {
          "id": 336,
          "name": "Product 36",
          "description": "Description 36",
          "price": 395.64
        },
        {
          "id": 337,
          "name": "Product 37",
          "description": "Description 37",
          "price": 406.63
        },
        {
          "id": 338,
          "name": "Product 38",
          "description": "Description 38",
          "price": 417.62
        },
        {
          "id": 339,
          "name": "Product 39",
          "description": "Description 39",
          "price": 428.61
        },
        {
          "id": 340,
          "name": "Product 40",
          "description": "Description 40",
          "price": 439.6
        },
        {
          "id": 341,
          "name": "Product 41",
          "description": "Description 41",
          "price": 450.59
        },
        {
          "id": 342,
          "name": "Product 42",
          "description": "Description 42",
          "price": 461.58
        },
        {
          "id": 343,
          "name": "Product 43",
          "description": "Description 43",
          "price": 472.57
        },
        {
          "id": 344,
          "name": "Product 44",
          "description": "Description 44",
          "price": 483.56
        },
        {
          "id": 345,
          "name": "Product 45",
          "description": "Description 45",
          "price": 494.55
        },
        {
          "id": 346,
          "name": "Product 46",
          "description": "Description 46",
          "price": 505.54
        },
        {
          "id": 347,
          "name": "Product 47",
          "description": "Description 47",
          "price": 516.53
        },
        {
          "id": 348,
          "name": "Product 48",
          "description": "Description 48",
          "price": 527.52
        },
        {
          "id": 349,
          "name": "Product 49",
          "description": "Description 49",
          "price": 538.51
        },
        {
          "id": 350,
          "name": "Product 50",
          "description": "Description 50",
          "price": 549.5
        },
        {
          "id": 351,
          "name": "Product 51",
          "description": "Description 51",
          "price": 560.49
        },
        {
          "id": 352,
          "name": "Product 52",
          "description": "Description 52",
          "price": 571.48
        },
        {
          "id": 353,
          "name": "Product 53",
          "description": "Description 53",
          "price": 582.47
        },
        {
          "id": 354,
          "name": "Product 54",
          "description": "Description 54",
          "price": 593.46
        },
        {
          "id": 355,
          "name": "Product 55",
          "description": "Description 55",
          "price": 604.45
        },
        {
          "id": 356,
          "name": "Product 56",
          "description": "Description 56",
          "price": 615.44
        },
        {
          "id": 357,
          "name": "Product 57",
          "description": "Description 57",
          "price": 626.43
        },
        {
          "id": 358,
          "name": "Product 58",
          "description": "Description 58",
          "price": 637.42
        },
        {
          "id": 359,
          "name": "Product 59",
          "description": "Description 59",
          "price": 648.41
        },
        {
          "id": 360,
          "name": "Product 60",
          "description": "Description 60",
          "price": 659.4
        },
        {
          "id": 361,
          "name": "Product 61",
          "description": "Description 61",
          "price": 670.39
        },
        {
          "id": 362,
          "name": "Product 62",
          "description": "Description 62",
          "price": 681.38
        },
        {
          "id": 363,
          "name": "Product 63",
          "description": "Description 63",
          "price": 692.37
        },
        {
          "id": 364,
          "name": "Product 64",
          "description": "Description 64",
          "price": 703.36
        },
        {
          "id": 365,
          "name": "Product 65",
          "description": "Description 65",
          "price": 714.35
        },
        {
          "id": 366,
          "name": "Product 66",
          "description": "Description 66",
          "price": 725.34
        },
        {
          "id": 367,
          "name": "Product 67",
          "description": "Description 67",
          "price": 736.33
        },
        {
          "id": 368,
          "name": "Product 68",
          "description": "Description 68",
          "price": 747.32
        },
        {
          "id": 369,
          "name": "Product 69",
          "description": "Description 69",
          "price": 758.31
        },
        {
          "id": 370,
          "name": "Product 70",
          "description": "Description 70",
          "price": 769.3
        },
        {
          "id": 371,
          "name": "Product 71",
          "description": "Description 71",
          "price": 780.29
        },
        {
          "id": 372,
          "name": "Product 72",
          "description": "Description 72",
          "price": 791.28
        },
        {
          "id": 373,
          "name": "Product 73",
          "description": "Description 73",
          "price": 802.27
        },
        {
          "id": 374,
          "name": "Product 74",
          "description": "Description 74",
          "price": 813.26
        },
        {
          "id": 375,
          "name": "Product 75",
          "description": "Description 75",
          "price": 824.25
        },
        {
          "id": 376,
          "name": "Product 76",
          "description": "Description 76",
          "price": 835.24
        },
        {
          "id": 377,
          "name": "Product 77",
          "description": "Description 77",
          "price": 846.23
        },
        {
          "id": 378,
          "name": "Product 78",
          "description": "Description 78",
          "price": 857.22
        },
        {
          "id": 379,
          "name": "Product 79",
          "description": "Description 79",
          "price": 868.21
        },
        {
          "id": 380,
          "name": "Product 80",
          "description": "Description 80",
          "price": 879.2
        },
        {
          "id": 381,
          "name": "Product 81",
          "description": "Description 81",
          "price": 890.19
        },
        {
          "id": 382,
          "name": "Product 82",
          "description": "Description 82",
          "price": 901.18
        },
        {
          "id": 383,
          "name": "Product 83",
          "description": "Description 83",
          "price": 912.17
        },
        {
          "id": 384,
          "name": "Product 84",
          "description": "Description 84",
          "price": 923.16
        },
        {
          "id": 385,
          "name": "Product 85",
          "description": "Description 85",
          "price": 934.15
        },
        {
          "id": 386,
          "name": "Product 86",
          "description": "Description 86",
          "price": 945.14
        },
        {
          "id": 387,
          "name": "Product 87",
          "description": "Description 87",
          "price": 956.13
        },
        {
          "id": 388,
          "name": "Product 88",
          "description": "Description 88",
          "price": 967.12
        },
        {
          "id": 389,
          "name": "Product 89",
          "description": "Description 89",
          "price": 978.11
        },
        {
          "id": 390,
          "name": "Product 90",
          "description": "Description 90",
          "price": 989.1
        },
        {
          "id": 391,
          "name": "Product 91",
          "description": "Description 91",
          "price": 1000.09
        },
        {
          "id": 392,
          "name": "Product 92",
          "description": "Description 92",
          "price": 1011.08
        },
        {
          "id": 393,
          "name": "Product 93",
          "description": "Description 93",
          "price": 1022.07
        },
        {
          "id": 394,
          "name": "Product 94",
          "description": "Description 94",
          "price": 1033.06
        },
        {
          "id": 395,
          "name": "Product 95",
          "description": "Description 95",
          "price": 1044.05
        },
        {
          "id": 396,
          "name": "Product 96",
          "description": "Description 96",
          "price": 1055.04
        },
        {
          "id": 397,
          "name": "Product 97",
          "description": "Description 97",
          "price": 1066.03
        },
        {
          "id": 398,
          "name": "Product 98",
          "description": "Description 98",
          "price": 1077.02
        },
        {
          "id": 399,
          "name": "Product 99",
          "description": "Description 99",
          "price": 1088.01
        },
        {
          "id": 400,
          "name": "Product 100",
          "description": "Description 100",
          "price": 1099
        },
        {
          "id": 401,
          "name": "Product 1",
          "description": "Description 1",
          "price": 10.99
        },
        {
          "id": 402,
          "name": "Product 2",
          "description": "Description 2",
          "price": 21.98
        },
        {
          "id": 403,
          "name": "Product 3",
          "description": "Description 3",
          "price": 32.97
        },
        {
          "id": 404,
          "name": "Product 4",
          "description": "Description 4",
          "price": 43.96
        },
        {
          "id": 405,
          "name": "Product 5",
          "description": "Description 5",
          "price": 54.95
        },
        {
          "id": 406,
          "name": "Product 6",
          "description": "Description 6",
          "price": 65.94
        },
        {
          "id": 407,
          "name": "Product 7",
          "description": "Description 7",
          "price": 76.93
        },
        {
          "id": 408,
          "name": "Product 8",
          "description": "Description 8",
          "price": 87.92
        },
        {
          "id": 409,
          "name": "Product 9",
          "description": "Description 9",
          "price": 98.91
        },
        {
          "id": 410,
          "name": "Product 10",
          "description": "Description 10",
          "price": 109.9
        },
        {
          "id": 411,
          "name": "Product 11",
          "description": "Description 11",
          "price": 120.89
        },
        {
          "id": 412,
          "name": "Product 12",
          "description": "Description 12",
          "price": 131.88
        },
        {
          "id": 413,
          "name": "Product 13",
          "description": "Description 13",
          "price": 142.87
        },
        {
          "id": 414,
          "name": "Product 14",
          "description": "Description 14",
          "price": 153.86
        },
        {
          "id": 415,
          "name": "Product 15",
          "description": "Description 15",
          "price": 164.85
        },
        {
          "id": 416,
          "name": "Product 16",
          "description": "Description 16",
          "price": 175.84
        },
        {
          "id": 417,
          "name": "Product 17",
          "description": "Description 17",
          "price": 186.83
        },
        {
          "id": 418,
          "name": "Product 18",
          "description": "Description 18",
          "price": 197.82
        },
        {
          "id": 419,
          "name": "Product 19",
          "description": "Description 19",
          "price": 208.81
        },
        {
          "id": 420,
          "name": "Product 20",
          "description": "Description 20",
          "price": 219.8
        },
        {
          "id": 421,
          "name": "Product 21",
          "description": "Description 21",
          "price": 230.79
        },
        {
          "id": 422,
          "name": "Product 22",
          "description": "Description 22",
          "price": 241.78
        },
        {
          "id": 423,
          "name": "Product 23",
          "description": "Description 23",
          "price": 252.77
        },
        {
          "id": 424,
          "name": "Product 24",
          "description": "Description 24",
          "price": 263.76
        },
        {
          "id": 425,
          "name": "Product 25",
          "description": "Description 25",
          "price": 274.75
        },
        {
          "id": 426,
          "name": "Product 26",
          "description": "Description 26",
          "price": 285.74
        },
        {
          "id": 427,
          "name": "Product 27",
          "description": "Description 27",
          "price": 296.73
        },
        {
          "id": 428,
          "name": "Product 28",
          "description": "Description 28",
          "price": 307.72
        },
        {
          "id": 429,
          "name": "Product 29",
          "description": "Description 29",
          "price": 318.71
        },
        {
          "id": 430,
          "name": "Product 30",
          "description": "Description 30",
          "price": 329.7
        },
        {
          "id": 431,
          "name": "Product 31",
          "description": "Description 31",
          "price": 340.69
        },
        {
          "id": 432,
          "name": "Product 32",
          "description": "Description 32",
          "price": 351.68
        },
        {
          "id": 433,
          "name": "Product 33",
          "description": "Description 33",
          "price": 362.67
        },
        {
          "id": 434,
          "name": "Product 34",
          "description": "Description 34",
          "price": 373.66
        },
        {
          "id": 435,
          "name": "Product 35",
          "description": "Description 35",
          "price": 384.65
        },
        {
          "id": 436,
          "name": "Product 36",
          "description": "Description 36",
          "price": 395.64
        },
        {
          "id": 437,
          "name": "Product 37",
          "description": "Description 37",
          "price": 406.63
        },
        {
          "id": 438,
          "name": "Product 38",
          "description": "Description 38",
          "price": 417.62
        },
        {
          "id": 439,
          "name": "Product 39",
          "description": "Description 39",
          "price": 428.61
        },
        {
          "id": 440,
          "name": "Product 40",
          "description": "Description 40",
          "price": 439.6
        },
        {
          "id": 441,
          "name": "Product 41",
          "description": "Description 41",
          "price": 450.59
        },
        {
          "id": 442,
          "name": "Product 42",
          "description": "Description 42",
          "price": 461.58
        },
        {
          "id": 443,
          "name": "Product 43",
          "description": "Description 43",
          "price": 472.57
        },
        {
          "id": 444,
          "name": "Product 44",
          "description": "Description 44",
          "price": 483.56
        },
        {
          "id": 445,
          "name": "Product 45",
          "description": "Description 45",
          "price": 494.55
        },
        {
          "id": 446,
          "name": "Product 46",
          "description": "Description 46",
          "price": 505.54
        },
        {
          "id": 447,
          "name": "Product 47",
          "description": "Description 47",
          "price": 516.53
        },
        {
          "id": 448,
          "name": "Product 48",
          "description": "Description 48",
          "price": 527.52
        },
        {
          "id": 449,
          "name": "Product 49",
          "description": "Description 49",
          "price": 538.51
        },
        {
          "id": 450,
          "name": "Product 50",
          "description": "Description 50",
          "price": 549.5
        },
        {
          "id": 451,
          "name": "Product 51",
          "description": "Description 51",
          "price": 560.49
        },
        {
          "id": 452,
          "name": "Product 52",
          "description": "Description 52",
          "price": 571.48
        },
        {
          "id": 453,
          "name": "Product 53",
          "description": "Description 53",
          "price": 582.47
        },
        {
          "id": 454,
          "name": "Product 54",
          "description": "Description 54",
          "price": 593.46
        },
        {
          "id": 455,
          "name": "Product 55",
          "description": "Description 55",
          "price": 604.45
        },
        {
          "id": 456,
          "name": "Product 56",
          "description": "Description 56",
          "price": 615.44
        },
        {
          "id": 457,
          "name": "Product 57",
          "description": "Description 57",
          "price": 626.43
        },
        {
          "id": 458,
          "name": "Product 58",
          "description": "Description 58",
          "price": 637.42
        },
        {
          "id": 459,
          "name": "Product 59",
          "description": "Description 59",
          "price": 648.41
        },
        {
          "id": 460,
          "name": "Product 60",
          "description": "Description 60",
          "price": 659.4
        },
        {
          "id": 461,
          "name": "Product 61",
          "description": "Description 61",
          "price": 670.39
        },
        {
          "id": 462,
          "name": "Product 62",
          "description": "Description 62",
          "price": 681.38
        },
        {
          "id": 463,
          "name": "Product 63",
          "description": "Description 63",
          "price": 692.37
        },
        {
          "id": 464,
          "name": "Product 64",
          "description": "Description 64",
          "price": 703.36
        },
        {
          "id": 465,
          "name": "Product 65",
          "description": "Description 65",
          "price": 714.35
        },
        {
          "id": 466,
          "name": "Product 66",
          "description": "Description 66",
          "price": 725.34
        },
        {
          "id": 467,
          "name": "Product 67",
          "description": "Description 67",
          "price": 736.33
        },
        {
          "id": 468,
          "name": "Product 68",
          "description": "Description 68",
          "price": 747.32
        },
        {
          "id": 469,
          "name": "Product 69",
          "description": "Description 69",
          "price": 758.31
        },
        {
          "id": 470,
          "name": "Product 70",
          "description": "Description 70",
          "price": 769.3
        },
        {
          "id": 471,
          "name": "Product 71",
          "description": "Description 71",
          "price": 780.29
        },
        {
          "id": 472,
          "name": "Product 72",
          "description": "Description 72",
          "price": 791.28
        },
        {
          "id": 473,
          "name": "Product 73",
          "description": "Description 73",
          "price": 802.27
        },
        {
          "id": 474,
          "name": "Product 74",
          "description": "Description 74",
          "price": 813.26
        },
        {
          "id": 475,
          "name": "Product 75",
          "description": "Description 75",
          "price": 824.25
        },
        {
          "id": 476,
          "name": "Product 76",
          "description": "Description 76",
          "price": 835.24
        },
        {
          "id": 477,
          "name": "Product 77",
          "description": "Description 77",
          "price": 846.23
        },
        {
          "id": 478,
          "name": "Product 78",
          "description": "Description 78",
          "price": 857.22
        },
        {
          "id": 479,
          "name": "Product 79",
          "description": "Description 79",
          "price": 868.21
        },
        {
          "id": 480,
          "name": "Product 80",
          "description": "Description 80",
          "price": 879.2
        },
        {
          "id": 481,
          "name": "Product 81",
          "description": "Description 81",
          "price": 890.19
        },
        {
          "id": 482,
          "name": "Product 82",
          "description": "Description 82",
          "price": 901.18
        },
        {
          "id": 483,
          "name": "Product 83",
          "description": "Description 83",
          "price": 912.17
        },
        {
          "id": 484,
          "name": "Product 84",
          "description": "Description 84",
          "price": 923.16
        },
        {
          "id": 485,
          "name": "Product 85",
          "description": "Description 85",
          "price": 934.15
        },
        {
          "id": 486,
          "name": "Product 86",
          "description": "Description 86",
          "price": 945.14
        },
        {
          "id": 487,
          "name": "Product 87",
          "description": "Description 87",
          "price": 956.13
        },
        {
          "id": 488,
          "name": "Product 88",
          "description": "Description 88",
          "price": 967.12
        },
        {
          "id": 489,
          "name": "Product 89",
          "description": "Description 89",
          "price": 978.11
        },
        {
          "id": 490,
          "name": "Product 90",
          "description": "Description 90",
          "price": 989.1
        },
        {
          "id": 491,
          "name": "Product 91",
          "description": "Description 91",
          "price": 1000.09
        },
        {
          "id": 492,
          "name": "Product 92",
          "description": "Description 92",
          "price": 1011.08
        },
        {
          "id": 493,
          "name": "Product 93",
          "description": "Description 93",
          "price": 1022.07
        },
        {
          "id": 494,
          "name": "Product 94",
          "description": "Description 94",
          "price": 1033.06
        },
        {
          "id": 495,
          "name": "Product 95",
          "description": "Description 95",
          "price": 1044.05
        },
        {
          "id": 496,
          "name": "Product 96",
          "description": "Description 96",
          "price": 1055.04
        },
        {
          "id": 497,
          "name": "Product 97",
          "description": "Description 97",
          "price": 1066.03
        },
        {
          "id": 498,
          "name": "Product 98",
          "description": "Description 98",
          "price": 1077.02
        },
        {
          "id": 499,
          "name": "Product 99",
          "description": "Description 99",
          "price": 1088.01
        },
        {
          "id": 500,
          "name": "Product 100",
          "description": "Description 100",
          "price": 1099
        },
        {
          "id": 501,
          "name": "Product 1",
          "description": "Description 1",
          "price": 10.99
        },
        {
          "id": 502,
          "name": "Product 2",
          "description": "Description 2",
          "price": 21.98
        },
        {
          "id": 503,
          "name": "Product 3",
          "description": "Description 3",
          "price": 32.97
        },
        {
          "id": 504,
          "name": "Product 4",
          "description": "Description 4",
          "price": 43.96
        },
        {
          "id": 505,
          "name": "Product 5",
          "description": "Description 5",
          "price": 54.95
        },
        {
          "id": 506,
          "name": "Product 6",
          "description": "Description 6",
          "price": 65.94
        },
        {
          "id": 507,
          "name": "Product 7",
          "description": "Description 7",
          "price": 76.93
        },
        {
          "id": 508,
          "name": "Product 8",
          "description": "Description 8",
          "price": 87.92
        },
        {
          "id": 509,
          "name": "Product 9",
          "description": "Description 9",
          "price": 98.91
        },
        {
          "id": 510,
          "name": "Product 10",
          "description": "Description 10",
          "price": 109.9
        },
        {
          "id": 511,
          "name": "Product 11",
          "description": "Description 11",
          "price": 120.89
        },
        {
          "id": 512,
          "name": "Product 12",
          "description": "Description 12",
          "price": 131.88
        },
        {
          "id": 513,
          "name": "Product 13",
          "description": "Description 13",
          "price": 142.87
        },
        {
          "id": 514,
          "name": "Product 14",
          "description": "Description 14",
          "price": 153.86
        },
        {
          "id": 515,
          "name": "Product 15",
          "description": "Description 15",
          "price": 164.85
        },
        {
          "id": 516,
          "name": "Product 16",
          "description": "Description 16",
          "price": 175.84
        },
        {
          "id": 517,
          "name": "Product 17",
          "description": "Description 17",
          "price": 186.83
        },
        {
          "id": 518,
          "name": "Product 18",
          "description": "Description 18",
          "price": 197.82
        },
        {
          "id": 519,
          "name": "Product 19",
          "description": "Description 19",
          "price": 208.81
        },
        {
          "id": 520,
          "name": "Product 20",
          "description": "Description 20",
          "price": 219.8
        },
        {
          "id": 521,
          "name": "Product 21",
          "description": "Description 21",
          "price": 230.79
        },
        {
          "id": 522,
          "name": "Product 22",
          "description": "Description 22",
          "price": 241.78
        },
        {
          "id": 523,
          "name": "Product 23",
          "description": "Description 23",
          "price": 252.77
        },
        {
          "id": 524,
          "name": "Product 24",
          "description": "Description 24",
          "price": 263.76
        },
        {
          "id": 525,
          "name": "Product 25",
          "description": "Description 25",
          "price": 274.75
        },
        {
          "id": 526,
          "name": "Product 26",
          "description": "Description 26",
          "price": 285.74
        },
        {
          "id": 527,
          "name": "Product 27",
          "description": "Description 27",
          "price": 296.73
        },
        {
          "id": 528,
          "name": "Product 28",
          "description": "Description 28",
          "price": 307.72
        },
        {
          "id": 529,
          "name": "Product 29",
          "description": "Description 29",
          "price": 318.71
        },
        {
          "id": 530,
          "name": "Product 30",
          "description": "Description 30",
          "price": 329.7
        },
        {
          "id": 531,
          "name": "Product 31",
          "description": "Description 31",
          "price": 340.69
        },
        {
          "id": 532,
          "name": "Product 32",
          "description": "Description 32",
          "price": 351.68
        },
        {
          "id": 533,
          "name": "Product 33",
          "description": "Description 33",
          "price": 362.67
        },
        {
          "id": 534,
          "name": "Product 34",
          "description": "Description 34",
          "price": 373.66
        },
        {
          "id": 535,
          "name": "Product 35",
          "description": "Description 35",
          "price": 384.65
        },
        {
          "id": 536,
          "name": "Product 36",
          "description": "Description 36",
          "price": 395.64
        },
        {
          "id": 537,
          "name": "Product 37",
          "description": "Description 37",
          "price": 406.63
        },
        {
          "id": 538,
          "name": "Product 38",
          "description": "Description 38",
          "price": 417.62
        },
        {
          "id": 539,
          "name": "Product 39",
          "description": "Description 39",
          "price": 428.61
        },
        {
          "id": 540,
          "name": "Product 40",
          "description": "Description 40",
          "price": 439.6
        },
        {
          "id": 541,
          "name": "Product 41",
          "description": "Description 41",
          "price": 450.59
        },
        {
          "id": 542,
          "name": "Product 42",
          "description": "Description 42",
          "price": 461.58
        },
        {
          "id": 543,
          "name": "Product 43",
          "description": "Description 43",
          "price": 472.57
        },
        {
          "id": 544,
          "name": "Product 44",
          "description": "Description 44",
          "price": 483.56
        },
        {
          "id": 545,
          "name": "Product 45",
          "description": "Description 45",
          "price": 494.55
        },
        {
          "id": 546,
          "name": "Product 46",
          "description": "Description 46",
          "price": 505.54
        },
        {
          "id": 547,
          "name": "Product 47",
          "description": "Description 47",
          "price": 516.53
        },
        {
          "id": 548,
          "name": "Product 48",
          "description": "Description 48",
          "price": 527.52
        },
        {
          "id": 549,
          "name": "Product 49",
          "description": "Description 49",
          "price": 538.51
        },
        {
          "id": 550,
          "name": "Product 50",
          "description": "Description 50",
          "price": 549.5
        },
        {
          "id": 551,
          "name": "Product 51",
          "description": "Description 51",
          "price": 560.49
        },
        {
          "id": 552,
          "name": "Product 52",
          "description": "Description 52",
          "price": 571.48
        },
        {
          "id": 553,
          "name": "Product 53",
          "description": "Description 53",
          "price": 582.47
        },
        {
          "id": 554,
          "name": "Product 54",
          "description": "Description 54",
          "price": 593.46
        },
        {
          "id": 555,
          "name": "Product 55",
          "description": "Description 55",
          "price": 604.45
        },
        {
          "id": 556,
          "name": "Product 56",
          "description": "Description 56",
          "price": 615.44
        },
        {
          "id": 557,
          "name": "Product 57",
          "description": "Description 57",
          "price": 626.43
        },
        {
          "id": 558,
          "name": "Product 58",
          "description": "Description 58",
          "price": 637.42
        },
        {
          "id": 559,
          "name": "Product 59",
          "description": "Description 59",
          "price": 648.41
        },
        {
          "id": 560,
          "name": "Product 60",
          "description": "Description 60",
          "price": 659.4
        },
        {
          "id": 561,
          "name": "Product 61",
          "description": "Description 61",
          "price": 670.39
        },
        {
          "id": 562,
          "name": "Product 62",
          "description": "Description 62",
          "price": 681.38
        },
        {
          "id": 563,
          "name": "Product 63",
          "description": "Description 63",
          "price": 692.37
        },
        {
          "id": 564,
          "name": "Product 64",
          "description": "Description 64",
          "price": 703.36
        },
        {
          "id": 565,
          "name": "Product 65",
          "description": "Description 65",
          "price": 714.35
        },
        {
          "id": 566,
          "name": "Product 66",
          "description": "Description 66",
          "price": 725.34
        },
        {
          "id": 567,
          "name": "Product 67",
          "description": "Description 67",
          "price": 736.33
        },
        {
          "id": 568,
          "name": "Product 68",
          "description": "Description 68",
          "price": 747.32
        },
        {
          "id": 569,
          "name": "Product 69",
          "description": "Description 69",
          "price": 758.31
        },
        {
          "id": 570,
          "name": "Product 70",
          "description": "Description 70",
          "price": 769.3
        },
        {
          "id": 571,
          "name": "Product 71",
          "description": "Description 71",
          "price": 780.29
        },
        {
          "id": 572,
          "name": "Product 72",
          "description": "Description 72",
          "price": 791.28
        },
        {
          "id": 573,
          "name": "Product 73",
          "description": "Description 73",
          "price": 802.27
        },
        {
          "id": 574,
          "name": "Product 74",
          "description": "Description 74",
          "price": 813.26
        },
        {
          "id": 575,
          "name": "Product 75",
          "description": "Description 75",
          "price": 824.25
        },
        {
          "id": 576,
          "name": "Product 76",
          "description": "Description 76",
          "price": 835.24
        },
        {
          "id": 577,
          "name": "Product 77",
          "description": "Description 77",
          "price": 846.23
        },
        {
          "id": 578,
          "name": "Product 78",
          "description": "Description 78",
          "price": 857.22
        },
        {
          "id": 579,
          "name": "Product 79",
          "description": "Description 79",
          "price": 868.21
        },
        {
          "id": 580,
          "name": "Product 80",
          "description": "Description 80",
          "price": 879.2
        },
        {
          "id": 581,
          "name": "Product 81",
          "description": "Description 81",
          "price": 890.19
        },
        {
          "id": 582,
          "name": "Product 82",
          "description": "Description 82",
          "price": 901.18
        },
        {
          "id": 583,
          "name": "Product 83",
          "description": "Description 83",
          "price": 912.17
        },
        {
          "id": 584,
          "name": "Product 84",
          "description": "Description 84",
          "price": 923.16
        },
        {
          "id": 585,
          "name": "Product 85",
          "description": "Description 85",
          "price": 934.15
        },
        {
          "id": 586,
          "name": "Product 86",
          "description": "Description 86",
          "price": 945.14
        },
        {
          "id": 587,
          "name": "Product 87",
          "description": "Description 87",
          "price": 956.13
        },
        {
          "id": 588,
          "name": "Product 88",
          "description": "Description 88",
          "price": 967.12
        },
        {
          "id": 589,
          "name": "Product 89",
          "description": "Description 89",
          "price": 978.11
        },
        {
          "id": 590,
          "name": "Product 90",
          "description": "Description 90",
          "price": 989.1
        },
        {
          "id": 591,
          "name": "Product 91",
          "description": "Description 91",
          "price": 1000.09
        },
        {
          "id": 592,
          "name": "Product 92",
          "description": "Description 92",
          "price": 1011.08
        },
        {
          "id": 593,
          "name": "Product 93",
          "description": "Description 93",
          "price": 1022.07
        },
        {
          "id": 594,
          "name": "Product 94",
          "description": "Description 94",
          "price": 1033.06
        },
        {
          "id": 595,
          "name": "Product 95",
          "description": "Description 95",
          "price": 1044.05
        },
        {
          "id": 596,
          "name": "Product 96",
          "description": "Description 96",
          "price": 1055.04
        },
        {
          "id": 597,
          "name": "Product 97",
          "description": "Description 97",
          "price": 1066.03
        },
        {
          "id": 598,
          "name": "Product 98",
          "description": "Description 98",
          "price": 1077.02
        },
        {
          "id": 599,
          "name": "Product 99",
          "description": "Description 99",
          "price": 1088.01
        },
        {
          "id": 600,
          "name": "Product 100",
          "description": "Description 100",
          "price": 1099
        },
        {
          "id": 601,
          "name": "Product 1",
          "description": "Description 1",
          "price": 10.99
        },
        {
          "id": 602,
          "name": "Product 2",
          "description": "Description 2",
          "price": 21.98
        },
        {
          "id": 603,
          "name": "Product 3",
          "description": "Description 3",
          "price": 32.97
        },
        {
          "id": 604,
          "name": "Product 4",
          "description": "Description 4",
          "price": 43.96
        },
        {
          "id": 605,
          "name": "Product 5",
          "description": "Description 5",
          "price": 54.95
        },
        {
          "id": 606,
          "name": "Product 6",
          "description": "Description 6",
          "price": 65.94
        },
        {
          "id": 607,
          "name": "Product 7",
          "description": "Description 7",
          "price": 76.93
        },
        {
          "id": 608,
          "name": "Product 8",
          "description": "Description 8",
          "price": 87.92
        },
        {
          "id": 609,
          "name": "Product 9",
          "description": "Description 9",
          "price": 98.91
        },
        {
          "id": 610,
          "name": "Product 10",
          "description": "Description 10",
          "price": 109.9
        },
        {
          "id": 611,
          "name": "Product 11",
          "description": "Description 11",
          "price": 120.89
        },
        {
          "id": 612,
          "name": "Product 12",
          "description": "Description 12",
          "price": 131.88
        },
        {
          "id": 613,
          "name": "Product 13",
          "description": "Description 13",
          "price": 142.87
        },
        {
          "id": 614,
          "name": "Product 14",
          "description": "Description 14",
          "price": 153.86
        },
        {
          "id": 615,
          "name": "Product 15",
          "description": "Description 15",
          "price": 164.85
        },
        {
          "id": 616,
          "name": "Product 16",
          "description": "Description 16",
          "price": 175.84
        },
        {
          "id": 617,
          "name": "Product 17",
          "description": "Description 17",
          "price": 186.83
        },
        {
          "id": 618,
          "name": "Product 18",
          "description": "Description 18",
          "price": 197.82
        },
        {
          "id": 619,
          "name": "Product 19",
          "description": "Description 19",
          "price": 208.81
        },
        {
          "id": 620,
          "name": "Product 20",
          "description": "Description 20",
          "price": 219.8
        },
        {
          "id": 621,
          "name": "Product 21",
          "description": "Description 21",
          "price": 230.79
        },
        {
          "id": 622,
          "name": "Product 22",
          "description": "Description 22",
          "price": 241.78
        },
        {
          "id": 623,
          "name": "Product 23",
          "description": "Description 23",
          "price": 252.77
        },
        {
          "id": 624,
          "name": "Product 24",
          "description": "Description 24",
          "price": 263.76
        },
        {
          "id": 625,
          "name": "Product 25",
          "description": "Description 25",
          "price": 274.75
        },
        {
          "id": 626,
          "name": "Product 26",
          "description": "Description 26",
          "price": 285.74
        },
        {
          "id": 627,
          "name": "Product 27",
          "description": "Description 27",
          "price": 296.73
        },
        {
          "id": 628,
          "name": "Product 28",
          "description": "Description 28",
          "price": 307.72
        },
        {
          "id": 629,
          "name": "Product 29",
          "description": "Description 29",
          "price": 318.71
        },
        {
          "id": 630,
          "name": "Product 30",
          "description": "Description 30",
          "price": 329.7
        },
        {
          "id": 631,
          "name": "Product 31",
          "description": "Description 31",
          "price": 340.69
        },
        {
          "id": 632,
          "name": "Product 32",
          "description": "Description 32",
          "price": 351.68
        },
        {
          "id": 633,
          "name": "Product 33",
          "description": "Description 33",
          "price": 362.67
        },
        {
          "id": 634,
          "name": "Product 34",
          "description": "Description 34",
          "price": 373.66
        },
        {
          "id": 635,
          "name": "Product 35",
          "description": "Description 35",
          "price": 384.65
        },
        {
          "id": 636,
          "name": "Product 36",
          "description": "Description 36",
          "price": 395.64
        },
        {
          "id": 637,
          "name": "Product 37",
          "description": "Description 37",
          "price": 406.63
        },
        {
          "id": 638,
          "name": "Product 38",
          "description": "Description 38",
          "price": 417.62
        },
        {
          "id": 639,
          "name": "Product 39",
          "description": "Description 39",
          "price": 428.61
        },
        {
          "id": 640,
          "name": "Product 40",
          "description": "Description 40",
          "price": 439.6
        },
        {
          "id": 641,
          "name": "Product 41",
          "description": "Description 41",
          "price": 450.59
        },
        {
          "id": 642,
          "name": "Product 42",
          "description": "Description 42",
          "price": 461.58
        },
        {
          "id": 643,
          "name": "Product 43",
          "description": "Description 43",
          "price": 472.57
        },
        {
          "id": 644,
          "name": "Product 44",
          "description": "Description 44",
          "price": 483.56
        },
        {
          "id": 645,
          "name": "Product 45",
          "description": "Description 45",
          "price": 494.55
        },
        {
          "id": 646,
          "name": "Product 46",
          "description": "Description 46",
          "price": 505.54
        },
        {
          "id": 647,
          "name": "Product 47",
          "description": "Description 47",
          "price": 516.53
        },
        {
          "id": 648,
          "name": "Product 48",
          "description": "Description 48",
          "price": 527.52
        },
        {
          "id": 649,
          "name": "Product 49",
          "description": "Description 49",
          "price": 538.51
        },
        {
          "id": 650,
          "name": "Product 50",
          "description": "Description 50",
          "price": 549.5
        },
        {
          "id": 651,
          "name": "Product 51",
          "description": "Description 51",
          "price": 560.49
        },
        {
          "id": 652,
          "name": "Product 52",
          "description": "Description 52",
          "price": 571.48
        },
        {
          "id": 653,
          "name": "Product 53",
          "description": "Description 53",
          "price": 582.47
        },
        {
          "id": 654,
          "name": "Product 54",
          "description": "Description 54",
          "price": 593.46
        },
        {
          "id": 655,
          "name": "Product 55",
          "description": "Description 55",
          "price": 604.45
        },
        {
          "id": 656,
          "name": "Product 56",
          "description": "Description 56",
          "price": 615.44
        },
        {
          "id": 657,
          "name": "Product 57",
          "description": "Description 57",
          "price": 626.43
        },
        {
          "id": 658,
          "name": "Product 58",
          "description": "Description 58",
          "price": 637.42
        }
  ]);
  console.log("Seed data inserted");
  mongoose.disconnect();
};

seedProducts();
