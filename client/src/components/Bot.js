// generativeAI.js
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  // Replace with your actual API key
  const apiKey = "";
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
  });
  
  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 0,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
  };
  
  export async function run(search) {
    console.log("in run: "+search)
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [{ text: "how to use atm\n" }],
        },
        {
          role: "model",
          parts: [{ text: "## How to Use an ATM\n\nUsing an ATM (Automated Teller Machine) is fairly straightforward, but here's a step-by-step guide:\n\n**1. Locate an ATM:** Look for an ATM with your bank's logo or a network you're affiliated with. They are often found at banks, stores, gas stations, and other public places.\n\n**2. Insert your card:** Insert your debit or credit card into the card reader slot, usually at the front of the ATM. Follow the on-screen instructions, which may include orienting your card correctly (magnetic strip or chip facing up).\n\n**3. Enter your PIN:** Your Personal Identification Number is a secret code you chose when you got your card. Enter it using the keypad, typically 4-6 digits long. Make sure you cover the keypad with your hand to prevent others from seeing your PIN.\n\n**4. Choose a transaction:** After entering your PIN, the ATM screen will display a menu of options. Common options include:\n\n* **Balance Inquiry:** Check your account balance.\n* **Cash Withdrawal:** Withdraw money from your account.\n* **Deposit:** Deposit cash or checks into your account.\n* **Transfer:** Transfer funds between your accounts.\n* **Bill Payment:** Pay bills using your card.\n\n**5. Follow the prompts:** The ATM will guide you through each transaction with clear instructions. Follow these prompts carefully.\n\n**6. Take your cash and receipt:** If you are withdrawing cash, the ATM will dispense your money. You will also receive a receipt detailing the transaction.\n\n**7. Remove your card:** Once the transaction is complete, remove your card from the ATM.\n\n**Important considerations:**\n\n* **Security:** Be aware of your surroundings when using an ATM. Choose a well-lit, public location. Be cautious of people who may be watching you.\n* **Fees:** Be mindful of any fees associated with using ATMs. Some banks charge fees for using ATMs outside of their network.\n* **Daily withdrawal limits:** There are often daily withdrawal limits on your debit card.\n* **ATM availability:** Some ATMs may have limited hours of operation.\n\n**Additional tips:**\n\n* **Check your balance frequently:** This helps you stay on top of your finances.\n* **Report any suspicious activity:** If you notice any issues with the ATM or believe someone has compromised your card, report it to your bank immediately.\n* **Use ATMs for simple transactions:** ATMs are great for basic transactions like withdrawals, deposits, and balance inquiries. For more complex transactions, consider visiting a bank branch. \n\nBy following these steps and practicing good security habits, you can use ATMs safely and efficiently.\n" }],
        },
        {
          role: "user",
          parts: [{ text: "how to use atm ,give in short bullet points\n" }],
        },
        {
          role: "model",
          parts: [{ text: "Here's how to use an ATM in short bullet points:\n\n* **Locate an ATM:** Find one with your bank's logo or a network you're affiliated with.\n* **Insert your card:** Follow on-screen instructions to insert your card.\n* **Enter your PIN:** Enter your secret code using the keypad, covering it with your hand.\n* **Choose a transaction:** Select from options like balance inquiry, withdrawal, deposit, transfer, or bill payment.\n* **Follow prompts:** The ATM will guide you through the transaction.\n* **Take your cash and receipt:** If withdrawing cash, take your money and receipt.\n* **Remove your card:** Take your card out of the ATM.\n\n**Important Reminders:**\n\n* Be aware of your surroundings for security.\n* Check for any fees associated with the ATM.\n* Be mindful of daily withdrawal limits.\n* Use ATMs for simple transactions.\n" }],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(search);
    return result.response.text();
  }
  