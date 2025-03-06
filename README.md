# Pappers Search Extension

A simple Firefox extension that allows you to quickly search for companies on Pappers directly from any website. It extracts the company name from the current URL or uses selected text on the page to perform a search.

## Features

- Extracts the company name from the website URL.
- Uses highlighted text if the user selects something on the page.
- Opens the relevant Pappers search page in a new tab.
- Lightweight and easy to use.

## Installation

1. Download or clone this repository.
2. Open Firefox and navigate to `about:debugging`.
3. Click on **This Firefox** (or **This Nightly**).
4. Click **Load Temporary Add-on…** and select the `manifest.json` file.
5. Click the extension icon to see the popup.

## Usage

1. Click on the extension icon in the toolbar.
2. The popup will display a text field with either the extracted company name or the highlighted text from the page.
3. Click **Search on Pappers** to open the search results in a new tab.

## Files Structure

- `manifest.json` – Defines the extension settings.
- `popup.html` – The UI for the popup.
- `popup.js` – The script handling search logic.
- `icon.png` – The extension icon.

## Future Improvements

- Better domain parsing for improved accuracy.
- Additional search filters.
- Refresh of the overall design
- Who knows put a preview of the search in the pop-up like the scholar add-on ?

## License

This project is open-source and available under the MIT License.
