async function run_hacker() {
    document.getElementById('status').innerText = "جاري تفعيل ثغرة الزعيم (بدون فلاشة)... يرجى الانتظار";
    
    try {
        // استدعاء ملف الـ psfree.mjs اللي تعبت عليه
        const mod = await import('./psfree.mjs');
        
        // تشغيل الثغرة
        await mod.run();
        
        // إذا نجحت، يرسل ملف GoldHen
        window.postMessage("trigger-exploit", "*");
    } catch (e) {
        // إذا في مشكلة بالملف الكبير بيطلعلك هون
        document.getElementById('status').innerText = "خطأ في تشغيل المحرك: " + e.message;
    }
}
