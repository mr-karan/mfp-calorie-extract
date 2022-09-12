<img src="./icons/icons8-cute-pumpkin-48.png" align="right" />

# MFP Calorie Extractor

Browser extension which copies macronutrients information from [MFP website](https://www.myfitnesspal.com/food/search) and pastes the contents as comma separated values in clipboard. It can be used to paste the details in Excel/Google Sheets for easy calorie tracking.

## See it in action

[![Watch the video](https://img.youtube.com/vi/E3mava5Lw1M/maxresdefault.jpg)](https://youtu.be/E3mava5Lw1M)

## Using it

You can load browser extensions via this [zip file](./web-ext-artifacts/mfp_calorie_extracter-1.0.zip) in these browser:

- Firefox: 
  - Enter "about:debugging" in the URL bar
  - Click "This Firefox"
  - Click "Load Temporary Add-on"
  - Select the packaged extension (.zip file) that you downloaded above.

- Chrome:
  - Unzip the `.zip` file that you downloaded above
  - Enter "chrome://extensions/" in the URL bar
  - Select "Load Unpacked" and select the unzipped folder from the `.zip` file.

## How it works

- Visit https://www.myfitnesspal.com/food/search and search for any food item
- Open the food item's page (for eg: https://www.myfitnesspal.com/food/calories/plain-dosa-488983894) and _Right Click -> Copy Macros to Clipboard_
- It'll copy the calories and other macros details in your clipboard as _comma separated values_
- You can then input these plain text values in Excel/Google Sheets/CSV files etc.
