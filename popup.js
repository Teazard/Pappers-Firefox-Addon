document.addEventListener("DOMContentLoaded", () => {
  browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = new URL(tabs[0].url);
    const hostname = url.hostname.replace("www.", "").split(".")[0];
    
    browser.tabs.executeScript(
      {
        code: "window.getSelection().toString();"
      },
      (selection) => {
        const selectedText = selection && selection[0].trim();
        document.getElementById("urlField").value = selectedText || hostname;
      }
    );
  });

  document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("urlField").value.trim();
    const encodedQuery = encodeURIComponent(query);
    const pappersURL = `https://www.pappers.fr/recherche?q=${encodedQuery}`;
    browser.tabs.create({ url: pappersURL });
  });
});