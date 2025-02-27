const data = [{
    homepage: {
        en: { h: "Hi, don’t walk into tomorrow without financial knowledge", p: "Start learning about personal finance, today!" },
        hi: { h: "फाइनेंस का ज्ञान कहीं भी, कभी भी ।", p: "आज ही व्यक्तिगत वित्त के बारे में सीखना शुरू करें! नीचे से अपने रुचि का विषय चुनें।" }
    }
},
{
    guides: {
        en: { BasicsofMoney: { sh: "Basics of Money", sub: "What is money and why do we need it?" }, Savings: { sh: "Introduction to Savings", sub: "Little drops of water, make a big ocean. Start saving today! Click here to read more." } },
        hi: {
            BasicsofMoney: { sh: "धन की मूल बातें", sub: "पैसा क्या है और हमें इसकी आवश्यकता क्यों है?" }, Savings: { sh: "बचत का परिचय", sub: "बचत पैसे की मूल बातें जानें!" }
        }
    }
},
{
    calculators: {
        en: {
            Savingscalculator: { h: "Savings Goal Calculator", h1: "My savings goal is", h2: "How frequently do you plan to save?", h21: "Weekly", h22: "Monthly", h23: "Yearly", h3: "Amount you can save", h4: "Interest per annum on your savings" },
            BudgetCalculator: { h: "Budget Calculator", p: "A monthly budget helps create financial stability for you. The budgeting exercise will help you track your expenses and save for emergencies and major purchases such as car, house etc.Start your budgeting journey by using this calculator.", h1: "How frequently do you get paid?", h11: "Monthly", h12: "Daily", h2: "How many days do you get paid?", h3: "How much do you get paid?", h4: "How much do you earn from other sources?", h41: "Optional: Rental income, pension, government benefits, etc.", h5: "Monthly Expense" }
        },
        hi: {
            Savingscalculator: {
                h: "बचत लक्ष्य कैलकुलेटर", h1: "मेरा बचत लक्ष्य है", h2: "आप कितनी बार बचत करने की योजना बनाते हैं?", h21: "साप्ताहिक", h22: "मासिक", h23: "वार्षिक", h3: "आप कितनी राशि बचा सकते हैं", h4: "आपकी बचत पर प्रति वर्ष ब्याज"
            },
            BudgetCalculator: { h: "बजट कैलकुलेटर", p: "एक मासिक बजट आपके लिए वित्तीय स्थिरता बनाने में मदद करता है। बजटिंग अभ्यास आपको अपने खर्चों को ट्रैक करने और आपात स्थिति और कार, घर आदि जैसी बड़ी खरीदारी के लिए बचत करने में मदद करेगा। अपनी बजट यात्रा शुरू करें इस कैलकुलेटर का उपयोग करके।", h1: "आपको कितनी बार भुगतान मिलता है?", h11: "मासिक", h12: "दैनिक", h2: "आपको कितने दिनों में भुगतान मिलता है?", h3: "कितना मिलता है आपको भुगतान मिलता है?", h4: "आप अन्य स्रोतों से कितना कमाते हैं?", h41: "वैकल्पिक: किराये की आय, पेंशन, सरकारी लाभ, आदि।", h5: "मासिक व्यय", }
        }
    },
}, { BasicsofMoney: { en: ["Namaste! I am Rekha. I am here to share valuable information with you! You must have heard that 'time is money'", "And yet, we waste so much time on useless things like.... standing in long queues to withdraw money", "and running from one shop to another to collect exact change.", "I learnt some basics about money and changed how I do transactions. Now, I save a lot of time. Let me tell you what I know, so you can also save time and money!"], hi: [["नमस्ते! मैं रेखा हूं। मैं यहां आपके साथ बहुमूल्य जानकारी साझा करने के लिए आई हूं! आपने सुना होगा कि 'समय ही पैसा है", "और फिर भी, हम...लंबी कतारों में खड़े होने जैसी बेकार चीजों पर इतना समय बर्बाद करते हैं पैसे निकालने के लिए", "और सटीक पैसे इकट्ठा करने के लिए एक दुकान से दूसरी दुकान तक दौड़ना।", "मैंने पैसे के बारे में कुछ बुनियादी बातें सीखीं और अपने लेन-देन के तरीके को बदल लिया। अब, मैं बहुत समय बचाता हूं। मैं आपको बताता हूं कि मैं क्या जानता हूं ,तो आप समय और पैसा भी बचा सकते हैं!"]] } },
{ getResults: { en: "GET RESULT", hi: "परिणाम प्राप्त करें" } },
{ guide: { en: "Guides", hi: "गाइड" } },
{ calculator: { en: "Calculators", hi: "कैलकुलेटर" } },];

export default data;

//Pick a topic of your interest from below.",h:"Some guides recommended for you",h:"Are you looking for instant information to make a decision? Find quick answers here..",sh:"Beware of Quick Money Schemes",sh:"Should I get a Personal Loan?",sh:"How To Manage Your Bank Account",h:"Are you benefiting from government schemes?",sh:"National Pension Scheme (NPS)",sh:"Pradhan Mantri Fasal Bima Yojana (PMFBY)",sh:"Public Provident Fund (PPF)",h:"News and Blogs",sh:"How To Clear Your Debts Using The Debt Avalanche Method",sh:"How To Clear Your Debts Using The Debt Snowball Method"
//,h:"आपके लिए सुझाव और सिफारिशें",h:"क्या इन सामान्य चिंताओं ने आपको भी परेशान किया है?",sh:"त्वरित धन योजनाओं से सावधान रहें",sh:"क्या मुझे व्यक्तिगत ऋण लेना चाहिए?",sh:"अपना बैंक खाता कैसे प्रबंधित करें",h:"क्या आप सरकारी योजनाओं से लाभान्वित हो रहे हैं?",sh:"राष्ट्रीय पेंशन योजना (NPS)",sh:"प्रधानमंत्री फसल बीमा योजना (PMFBY)",sh:"सार्वजनिक भविष्य निधि (PPF)",h:"समाचार और ब्लॉग्स",sh:"ऋण हिमस्खलन विधि का उपयोग करके अपने ऋणों को कैसे साफ़ करें",sh:"ऋण स्नोबॉल विधि का उपयोग करके अपने ऋणों को कैसे साफ़ करें"