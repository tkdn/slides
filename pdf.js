const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: true
    });
    const page = await browser.newPage();
    await page.emulateMedia("print");
    await page.setViewport({ width: 1024, height: 768 });

    const title = await page.title();

    await page.goto("http://localhost:8000/print", { waitUntil: "networkidle2" });
    await page.waitFor(300);
    await page.pdf({
        path: `${title}.pdf`,
        format: "A4",
        printBackground: true,
        landscape: true,
        margin: { top: "0", right: "0", bottom: "0", left: "0" }
    });


    await browser.close();
})();
