export function triggerCVDownload() {
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "/Walter_Jiron_CV.pdf";
    link.download = "Walter_Jiron_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 600);
}
