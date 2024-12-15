const jsonPhones = `[
    {
        "name": "Smartphone Samsung Galaxy A03 Core Dual Sim / SM-A032FZKDSER (Black)",
        "imgLink": "https://cdn21vek.by/img/galleries/65575/415/preview/galaxya03coresma032fzkdser_samsung_61a73b096e409.jpeg",
        "brand": "Samsung",
        "price": "289",
        "inch": "6.5 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi 9A 2GB/32GB (Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/6088/597/preview/redmi9a2gb32gbm2006c3lg_xiaomi_01_5f16ddbfba68a.jpeg",
        "brand": "Xiaomi",
        "price": "369",
        "inch": "6.53 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Samsung Galaxy A03 Core Dual Sim / SM-A032FZBDSER (Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/65575/409/preview/galaxya03coresma032fzbdser_samsung_61a7364783c1c.jpeg",
        "brand": "Samsung",
        "price": "289",
        "inch": "6.5 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi 9A 2GB/32GB (Green)",
        "imgLink": "https://cdn21vek.by/img/galleries/6099/773/preview/redmi9a2gb32gbm2006c3lg_xiaomi_02_5f21137a2c70e.jpeg",
        "brand": "Xiaomi",
        "price": "369",
        "inch": "6.53 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi 9A 2GB/32GB (Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/6088/598/preview/redmi9a2gb32gbm2006c3lg_xiaomi_5f16eca00f9c1.jpeg",
        "brand": "Xiaomi",
        "price": "369",
        "inch": "6.53 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Realme C25s 4GB/128GB / RMX3195 (Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/7030/293/preview/c25s4gb128gbrmx3195watergrey_realme_618a0ba1c5a8c.jpeg",
        "brand": "Realme",
        "price": "599",
        "inch": "6.5 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Realme C21Y 4/64GB / RMX3263 (Black)",
        "imgLink": "https://cdn21vek.by/img/galleries/65585/15/preview/c21y464gbrmx3263crossblack_realme_61aeff6ece603.jpeg",
        "brand": "Realme",
        "price": "459",
        "inch": "6.5 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Realme C21Y 4/64GB / RMX3263 (Light Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/65585/18/preview/c21y464gbrmx3263crossblue_realme_61af00f6b7bb2.jpeg",
        "brand": "Realme",
        "price": "459",
        "inch": "6.5 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Realme C25s 4GB/128GB / RMX3195 (Light Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/65522/283/preview/c25s4gb128gbrmx3195waterblue_realme_618a1115e0aa3.jpeg",
        "brand": "Realme",
        "price": "599",
        "inch": "6.5 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi 10 4GB/128GB 2021 without NFC (Gray Onyx)",
        "imgLink": "https://cdn21vek.by/img/galleries/6832/25/preview/redmi104gb128gb2021_xiaomi_02_6123b32f863ba.jpeg",
        "brand": "Xiaomi",
        "price": "699",
        "inch": "6.5 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Realme 8 6GB/128GB / RMX3085 (Black Punk)",
        "imgLink": "https://cdn21vek.by/img/galleries/6545/81/preview/86gb128gbrmx3085_realme_01_60c11558b8a06.jpeg",
        "brand": "Realme",
        "price": "819",
        "inch": "6.4 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Vivo Y1s 2GB/32GB (Olive Black)",
        "imgLink": "https://cdn21vek.by/img/galleries/6314/855/preview/y1s2gb32gb_vivo_5fe43d5d1870b.jpeg",
        "brand": "Vivo",
        "price": "329",
        "inch": "6.22 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Apple iPhone 11 128GB / MHDH3 (Black)",
        "imgLink": "https://cdn21vek.by/img/galleries/6270/97/preview/iphone11128gbmhdh3_apple_5fc4dbe229614.jpeg",
        "brand": "Apple",
        "price": "2 499",
        "inch": "6.1 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 11 6GB/128GB (Graphite Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/7220/969/preview/redminote116gb128gb_xiaomi_61f2ad43dfaa1.jpeg",
        "brand": "Xiaomi",
        "price": "859",
        "inch": "6.4 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Realme C11 2021 4/64GB / RMX3231 (Gray Steel)",
        "imgLink": "https://cdn21vek.by/img/galleries/7210/948/preview/c112021464gbrmx3231_realme_61f0fb9b0e699.jpeg",
        "brand": "Realme",
        "price": "429",
        "inch": "6.5 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Vivo 2111 (Y21) 4GB/64GB (Diamond Shine)",
        "imgLink": "https://cdn21vek.by/img/galleries/65522/239/preview/2111y214gb64gb_vivo_01_619215325983b.jpeg",
        "brand": "Vivo",
        "price": "549",
        "inch": "6.51 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 11 4GB/64GB (Twilight Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/7220/945/preview/redminote114gb64gb_xiaomi_02_61f2ad5a303a3.jpeg",
        "brand": "Xiaomi",
        "price": "739",
        "inch": "6.4 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 11 6GB/128GB (Star Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/7220/980/preview/redminote116gb128gb_xiaomi_01_61f2ad9c8d191.jpeg",
        "brand": "Xiaomi",
        "price": "859",
        "inch": "6.4 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 10 Pro 8GB/128GB (Gray Onyx)",
        "imgLink": "https://cdn21vek.by/img/galleries/6505/44/preview/redminote10pro8gb128gb_xiaomi_02_6086e694890a7.jpeg",
        "brand": "Xiaomi",
        "price": "1 129",
        "inch": "6.67 ″",
        "ram": "8 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 11 4GB/64GB (Star Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/7220/949/preview/redminote114gb64gb_xiaomi_01_61f2adbc6f0ff.jpeg",
        "brand": "Xiaomi",
        "price": "739",
        "inch": "6.4 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Apple iPhone 11 64GB / MHDA3 (Black)",
        "imgLink": "https://cdn21vek.by/img/galleries/6270/80/preview/iphone1164gbmhda3_apple_5fc5de22abff7.jpeg",
        "brand": "Apple",
        "price": "2 399",
        "inch": "6.1 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi 10 6GB/128GB without NFC (Carbon Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/7200/878/preview/redmi106gb128gbcarbongray_xiaomi_61efd8a9db327.jpeg",
        "brand": "Xiaomi",
        "price": "699",
        "inch": "6.5 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Realme 8 6GB/128GB / RMX3085 (Cyber Silver)",
        "imgLink": "https://cdn21vek.by/img/galleries/6545/78/preview/86gb128gbrmx3085_realme_60a370b97f6f4.jpeg",
        "brand": "Realme",
        "price": "819",
        "inch": "6.4 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Honor 50 Lite 6GB/128GB / NTN-LX1 (Midnight Black)",
        "imgLink": "https://cdn21vek.by/img/galleries/65583/354/preview/50lite6gb128gbntnlx1_honor_61af06d3253b0.jpeg",
        "brand": "Honor",
        "price": "849",
        "inch": "6.67 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi 10C 4GB/64GB (Gray Graphite)",
        "imgLink": "https://cdn21vek.by/img/galleries/7433/161/preview/redmi10c4gb64gbc_xiaomi_62625efa00520.jpeg",
        "brand": "Xiaomi",
        "price": "579",
        "inch": "6.71 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 10S 6GB/128GB without NFC (Gray Onyx)",
        "imgLink": "https://cdn21vek.by/img/galleries/6538/254/preview/redminote10s6gb128gb_xiaomi_01_609e36e931ae5.jpeg",
        "brand": "Xiaomi",
        "price": "859",
        "inch": "6.43 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi 10 4GB/64GB 2021 without NFC (Gray Onyx)",
        "imgLink": "https://cdn21vek.by/img/galleries/6831/986/preview/redmi104gb64gb2021_xiaomi_02_6123b33a10909.jpeg",
        "brand": "Xiaomi",
        "price": "619",
        "inch": "6.5 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Realme C11 2021 2/32GB / RMX3231 (Light Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/6938/334/preview/c112021232gbrmx3231lakeblue_realme_61696c0061cfe.jpeg",
        "brand": "Realme",
        "price": "339",
        "inch": "6.5 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 10S 8GB/128GB without NFC (Blue Ocean)",
        "imgLink": "https://cdn21vek.by/img/galleries/7238/25/preview/redminote10s8gb128gbnfc_xiaomi_61fcdb6ab2734.jpeg",
        "brand": "Xiaomi",
        "price": "879",
        "inch": "6.43 ″",
        "ram": "8 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Realme C11 2021 2/32GB (Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/6827/544/preview/c112021232gb_realme_61696f832f5f4.jpeg",
        "brand": "Realme",
        "price": "339",
        "inch": "6.5 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Apple iPhone 11 64GB / MHDC3 (White)",
        "imgLink": "https://cdn21vek.by/img/galleries/6270/85/preview/iphone1164gbmhdc3_apple_5fcf2e0373480.jpeg",
        "brand": "Apple",
        "price": "2 399",
        "inch": "6.1 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone POCO F3 8GB/256GB (Black Night)",
        "imgLink": "https://cdn21vek.by/img/galleries/6590/821/preview/f38gb256gb_poco_60be23c12dd33.jpeg",
        "brand": "POCO",
        "price": "1 399",
        "inch": "6.67 ″",
        "ram": "8 GB",
        "rom": "256 GB"
    },
    {
        "name": "Smartphone Tecno Pop 4 2/32GB / BC2 (Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/6166/494/preview/pop4232gbbc2_tecno_5f5f085de95b7.jpeg",
        "brand": "Tecno",
        "price": "344",
        "inch": "5.99 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Honor 50 8GB/128GB / NTH-NX9 (Emerald Green)",
        "imgLink": "https://cdn21vek.by/img/galleries/7030/514/preview/508gb128gbnthnx9_honor_61825788a0328.jpeg",
        "brand": "Honor",
        "price": "1 459",
        "inch": "6.57 ″",
        "ram": "8 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Vivo Y31 4GB/128GB (Blue Ocean)",
        "imgLink": "https://cdn21vek.by/img/galleries/6390/573/preview/y314gb128gb_vivo_602cc06e93aa5.jpeg",
        "brand": "Vivo",
        "price": "649",
        "inch": "6.58 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Realme C25s 4GB/64GB / RMX3195 (Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/65543/88/preview/c25s4gb64gbrmx3195watergrey_realme_619f45479b6a7.jpeg",
        "brand": "Realme",
        "price": "579",
        "inch": "6.5 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 11 4GB/128GB (Twilight Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/7220/963/preview/redminote114gb128gb_xiaomi_02_61f2adb474479.jpeg",
        "brand": "Xiaomi",
        "price": "799",
        "inch": "6.4 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi 10C 4GB/128GB (Blue Ocean)",
        "imgLink": "https://cdn21vek.by/img/galleries/7433/185/preview/redmi10c4gb128gbc_xiaomi_62625799c6d27.jpeg",
        "brand": "Xiaomi",
        "price": "629",
        "inch": "6.71 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi 10 6GB/128GB without NFC (Blue Ocean)",
        "imgLink": "https://cdn21vek.by/img/galleries/7230/877/preview/redmi106gb128gbnfc_xiaomi_61fa2d8c8ddce.jpeg",
        "brand": "Xiaomi",
        "price": "699",
        "inch": "6.5 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Honor 50 Lite 6GB/128GB / NTN-LX1 (Rich Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/65583/342/preview/50lite6gb128gbntnlx1_honor_61af0b8b738e6.jpeg",
        "brand": "Honor",
        "price": "869",
        "inch": "6.67 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi 11T 8GB/256GB (Meteor Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/6986/153/preview/redmi11t8gb256gb_xiaomi_02_61695549d45df.jpeg",
        "brand": "Xiaomi",
        "price": "1 599",
        "inch": "6.67 ″",
        "ram": "8 GB",
        "rom": "256 GB"
    },
    {
        "name": "Smartphone Realme C11 2021 4/64GB / RMX3231 (Light Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/7250/85/preview/c112021464gbrmx3231lakeblue_realme_6204d082679e8.jpeg",
        "brand": "Realme",
        "price": "429",
        "inch": "6.5 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 10 Pro 8GB/128GB (Ice Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/6505/45/preview/redminote10pro8gb128gb_xiaomi_6086e681a5b8c.jpeg",
        "brand": "Xiaomi",
        "price": "1 129",
        "inch": "6.67 ″",
        "ram": "8 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone ZTE Blade A31 Lite 1GB/32GB (Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/6544/912/preview/bladea31lite1gb32gb_zte_60a4bd08d5f76.jpeg",
        "brand": "ZTE",
        "price": "229",
        "inch": "5 ″",
        "ram": "1 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Realme C25s 4GB/64GB / RMX3195 (Light Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/7108/393/preview/c25s4gb64gbrmx3195waterblue_realme_61baf0f82402f.jpeg",
        "brand": "Realme",
        "price": "579",
        "inch": "6.5 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Xiaomi 11T 8GB/256GB (White Lunar)",
        "imgLink": "https://cdn21vek.by/img/galleries/6986/159/preview/redmi11t8gb256gb_xiaomi_01_61694c52af6e1.jpeg",
        "brand": "Xiaomi",
        "price": "1 599",
        "inch": "6.67 ″",
        "ram": "8 GB",
        "rom": "256 GB"
    },
    {
        "name": "Smartphone Xiaomi 11 Lite 5G NE 6GB/128GB (Black Pearl)",
        "imgLink": "https://cdn21vek.by/img/galleries/6910/350/preview/mi11lite5gne6gb128gb_xiaomi_03_6144c1be4d5a2.jpeg",
        "brand": "Xiaomi",
        "price": "1 279",
        "inch": "6.55 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Apple iPhone SE 64GB / MHGQ3 (White)",
        "imgLink": "https://cdn21vek.by/img/galleries/6274/388/preview/iphonese64gbmhgq3_apple_5fbf4bab0251e.jpeg",
        "brand": "Apple",
        "price": "1 899",
        "inch": "4.7 ″",
        "ram": "3 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone Nokia C30 2GB/32GB DS / TA-1359 (Green)",
        "imgLink": "https://cdn21vek.by/img/galleries/65530/655/preview/c302gb32gbdsta1359_nokia_618cc34c3e81f.jpeg",
        "brand": "Nokia",
        "price": "419",
        "inch": "6.82 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 11s 6GB/128GB (Graphite Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/7267/507/preview/redminote11s6gb128gb_xiaomi_01_620dfa3dcf286.jpeg",
        "brand": "Xiaomi",
        "price": "999",
        "inch": "6.43 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Vivo Y31 4GB/128GB (Black Asphalt)",
        "imgLink": "https://cdn21vek.by/img/galleries/6390/565/preview/y314gb128gb_vivo_01_602cbb489fdf7.jpeg",
        "brand": "Vivo",
        "price": "649",
        "inch": "6.58 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi 10C 4GB/128GB (Gray Graphite)",
        "imgLink": "https://cdn21vek.by/img/galleries/7433/172/preview/redmi10c4gb128gbc_xiaomi_01_626a6c4f45d82.jpeg",
        "brand": "Xiaomi",
        "price": "629",
        "inch": "6.71 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Apple iPhone 11 128GB / MHDM3 (Purple)",
        "imgLink": "https://cdn21vek.by/img/galleries/6270/114/preview/iphone11128gbmhdm3_apple_5fcf28cb134b5.jpeg",
        "brand": "Apple",
        "price": "2 599",
        "inch": "6.1 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Apple iPhone 11 64GB / MHDF3 (Purple)",
        "imgLink": "https://cdn21vek.by/img/galleries/6267/216/preview/iphone1164gbmhdf3_apple_5fb5128236957.jpeg",
        "brand": "Apple",
        "price": "2 399",
        "inch": "6.1 ″",
        "ram": "4 GB",
        "rom": "64 GB"
    },
    {
        "name": "Smartphone ZTE Blade A5 2020 2GB/32GB (Aquamarine)",
        "imgLink": "https://cdn21vek.by/img/galleries/6130/156/preview/bladea520202gb32gb_zte_5f4370f25e3f7.jpeg",
        "brand": "ZTE",
        "price": "309",
        "inch": "6.088 ″",
        "ram": "2 GB",
        "rom": "32 GB"
    },
    {
        "name": "Smartphone Ulefone Armor X6 (Black)",
        "imgLink": "https://cdn21vek.by/img/galleries/5888/74/preview/armorx6_ulefone_01_5e8f359fc5852.jpeg",
        "brand": "Ulefone",
        "price": "399",
        "inch": "5 ″",
        "ram": "2 GB",
        "rom": "16 GB"
    },
    {
        "name": "Smartphone Samsung Galaxy S21 FE 128GB / SM-G990BZADSER (Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/7183/812/preview/galaxys21fe128gbsmg990bzadser_samsung_61e549e78058f.jpeg",
        "brand": "Samsung",
        "price": "2 299",
        "inch": "6.4 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Xiaomi Redmi Note 11 4GB/128GB (Graphite Gray)",
        "imgLink": "https://cdn21vek.by/img/galleries/7220/957/preview/redminote114gb128gb_xiaomi_61f2ac20c0fe8.jpeg",
        "brand": "Xiaomi",
        "price": "799",
        "inch": "6.4 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone Apple iPhone 13 128GB / MLP13 (Blue)",
        "imgLink": "https://cdn21vek.by/img/galleries/6941/769/preview/iphone13128gbmlp13_apple_6155cacdbecff.jpeg",
        "brand": "Apple",
        "price": "3 799",
        "inch": "6.1 ″",
        "ram": "4 GB",
        "rom": "128 GB"
    },
    {
        "name": "Smartphone POCO M4 PRO 5G 6GB/128GB (Black)",
        "c": "https://cdn21vek.by/img/galleries/7180/501/preview/m4pro5g6gb128gb_poco_61de8da62b085.jpeg",
        "brand": "POCO",
        "price": "929",
        "inch": "6.6 ″",
        "ram": "6 GB",
        "rom": "128 GB"
    }
]`;

const arrObjects = JSON.parse(jsonPhones);
