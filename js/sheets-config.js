/* =====================================================
   GOOGLE SHEETS DATABASE — KONFIGURASI
   =====================================================
   
   Ganti URL di bawah dengan URL deployment Google Apps 
   Script Anda. Caranya:
   
   1. Buka Google Spreadsheet → Extensions → Apps Script
   2. Paste kode dari file google-apps-script.js
   3. Deploy → New deployment → Web app → Deploy
   4. Copy URL yang diberikan
   5. Paste di bawah ini
   
   ===================================================== */

const SHEETS_CONFIG = {
  // =============================================
  // GANTI URL INI DENGAN URL APPS SCRIPT ANDA!
  // =============================================
  apiUrl: "https://script.google.com/macros/s/AKfycbwW8E-zV1k_037CwPdVXd5_PTKdN81AJw3l06Rcue3idP4NM17XL-r-Oex7JgjRFQsJIg/exec",
  
  // Contoh URL yang benar:
  // apiUrl: "https://script.google.com/macros/s/AKfycbxXXXXXXXXXX.../exec",
};

const SHEETS_CONFIGURED = SHEETS_CONFIG.apiUrl !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
