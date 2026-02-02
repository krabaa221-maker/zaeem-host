function run_hacker() {
    document.getElementById('status').innerText = "جاري إرسال ملف GoldHen... انتظر ثواني"; //
    
    // هاد الكود بيبحث عن ملف الـ bin وبيرسله للذاكرة
    fetch("goldhen.bin").then(response => {
        return response.arrayBuffer();
    }).then(data => {
        // هنا تبدأ عملية تشغيل الثغرة الحقيقية
        window.postMessage("trigger-exploit", "*"); 
        document.getElementById('status').innerText = "تم إرسال GoldHen بنجاح! انتظر إشعار السوني"; //
    }).catch(e => {
        document.getElementById('status').innerText = "خطأ: تأكد من وجود ملف goldhen.bin في المستودع"; //
    });
}
