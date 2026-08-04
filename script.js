document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // यहाँ आप अपना टेलीग्राम बॉट या डेटा भेजने का कोड जोड़ सकते हैं
    alert("Login details captured successfully!");
});

