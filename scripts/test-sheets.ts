/**
 * Test Google Sheets connection (Google_sheets_setup.md Part 5).
 *
 * Run with credentials in .env.local:
 *   npx tsx --env-file=.env.local scripts/test-sheets.ts
 *
 * Do not deploy this script as a production entrypoint.
 */
import {
  appendRow,
  getSpreadsheetInfo,
  isGoogleSheetsConfigured,
  readRows,
} from "../lib/google-sheets";
import { LEAD_BRAND_NAME, LEAD_SHEET_COLUMNS } from "../lib/submit-lead";

async function test() {
  console.log("--- Testing Google Sheets Connection ---\n");
  console.log("Expected headers:", LEAD_SHEET_COLUMNS.join(" | "));

  if (!isGoogleSheetsConfigured()) {
    console.error(
      "❌ Missing GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, and/or GOOGLE_SHEET_ID"
    );
    console.error("   Copy .env.example → .env.local and fill in the Google Sheets values.");
    process.exit(1);
  }

  const tab = process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

  try {
    const info = await getSpreadsheetInfo();
    console.log("✅ Spreadsheet found:", info.title);
    console.log("   Tabs:", info.sheets?.map((s) => s.name).join(", "));
    if (!info.sheets?.some((s) => s.name === tab)) {
      console.error(`❌ Tab "${tab}" not found — set GOOGLE_SHEET_TAB_NAME to an existing tab.`);
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Failed to read spreadsheet info:", error);
    process.exit(1);
  }

  try {
    const result = await appendRow([
      new Date().toISOString(),
      "Test Entry",
      "Test Firm",
      "test@example.com",
      "",
      "",
      "",
      "",
      "",
      "This is a test row from the development environment.",
      LEAD_BRAND_NAME,
    ]);
    console.log("✅ Row written:", result.updatedRange);
  } catch (error) {
    console.error("❌ Failed to write row:", error);
    process.exit(1);
  }

  try {
    const result = await readRows();
    console.log(`✅ Read ${result.rows.length} rows (including header)`);
    console.log("   Last row:", result.rows[result.rows.length - 1]);
  } catch (error) {
    console.error("❌ Failed to read rows:", error);
    process.exit(1);
  }

  console.log("\n--- All tests passed ---");
}

test();
