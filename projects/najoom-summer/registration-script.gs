const SHEET_ID = '1Fzp_wWOwZv0W_Y1A6J9Zy-lmzyI_eIH5YV_SK1ZhXVc';

const GROUP_LABELS = {
  '4-6':   'Little Stars (4–6)',
  '7-10':  'Rising Stars (7–10)',
  '11-14': 'Future Stars (11–14)'
};

function appendRegistration(p) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  const now   = Utilities.formatDate(new Date(), 'Asia/Amman', 'yyyy-MM-dd HH:mm:ss');
  sheet.appendRow([
    now,
    p.pname  || '',
    p.cname  || '',
    p.cage   || '',
    GROUP_LABELS[p.group] || p.group || '',
    p.phone  || '',
    p.email  || '',
    p.school || '',
    'New',
    '',
    'Pending',
    ''
  ]);
}

// Handles form submissions from the landing page
function doGet(e) {
  try {
    appendRegistration(e.parameter);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Fallback POST handler
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    appendRegistration(data);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test — run manually
function testAppend() {
  appendRegistration({
    pname: 'Test Parent', cname: 'Test Child', cage: '8',
    group: '7-10', phone: '+962700000000',
    email: 'test@test.com', school: 'Test School'
  });
  Logger.log('Done — delete this row from the sheet.');
}
