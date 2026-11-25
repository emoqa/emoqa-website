# How to Connect the Contact / Inquiry Form to Google Sheets

The inquiry form submitted via **"Build Your Solution With Us"** (`/contact/`) now sends form submissions directly to a Google Sheet via a Google Apps Script Webhook.

---

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.new) and create a new blank spreadsheet.
2. In the first row (Row 1), add these column headers:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Organization`
   - **D1**: `Email`
   - **E1**: `Phone`
   - **F1**: `Interest`
   - **G1**: `Requirements`
   - **H1**: `Timeline`
   - **I1**: `Budget`

---

### Step 2: Add Google Apps Script
1. In the Google Sheet, click **Extensions** > **Apps Script**.
2. Replace all code in the script editor with the following:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Text that starts with = + - or @ would run as a formula. An apostrophe keeps it as plain text.
    var safe = function (v) {
      v = String(v || "").slice(0, 5000);
      return /^\s*[=+\-@]/.test(v) ? "'" + v : v;
    };

    sheet.appendRow([
      safe(data.timestamp) || new Date().toISOString(),
      safe(data.name),
      safe(data.organization),
      safe(data.email),
      safe(data.phone),
      safe(data.interest),
      safe(data.requirements),
      safe(data.timeline),
      safe(data.budget)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Step 3: Deploy as Web App
1. In the top right corner of Apps Script, click **Deploy** > **New deployment**.
2. Select type: **Web app** (gear icon).
3. Set:
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` *(required so the website server can submit inquiries)*
4. Click **Deploy** and authorize permissions when prompted.
5. Copy the generated **Web App URL** (it starts with `https://script.google.com/macros/s/.../exec`).

---

### Step 4: Configure Environment Variable
In your project's `.env.local` (for local development) or Render Environment settings (for deployment):

```env
GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

Once set, whenever a user clicks **"Build Your Solution With Us"** on the hero page and submits an inquiry, the details will be stored in your Google Sheet immediately.

Keep this address private: anyone who has it can add rows to the sheet.

### How saving works
- Your visitor sees "Inquiry sent" only after the message is saved in the database or confirmed by Google.
- If nothing could save it (for example Google is down and the host has no lasting storage), the form offers WhatsApp and email with the message already filled in.
- If you already created the script, paste the new version above and choose **Deploy > Manage deployments > Edit > New version**.
