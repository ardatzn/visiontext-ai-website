// Shared interactions for the static VisionText AI website.
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const fakeUploadButton = document.querySelector("#fakeUploadButton");
  const fakeResultButton = document.querySelector("#fakeResultButton");
  const clearDemoButton = document.querySelector("#clearDemoButton");
  const uploadList = document.querySelector("#uploadList");
  const resultBox = document.querySelector("#resultBox");
  const contactForm = document.querySelector("#contactForm");
  const formMessage = document.querySelector("#formMessage");

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (fakeUploadButton && uploadList) {
    fakeUploadButton.addEventListener("click", () => {
      uploadList.innerHTML = `
        <div class="upload-item"><span>marketplace-shot-01.png</span><strong>Uploaded</strong></div>
        <div class="upload-item"><span>label-set-bulk.jpg</span><strong>Uploaded</strong></div>
        <div class="upload-item"><span>invoice-may-scan.pdf</span><strong>Uploaded</strong></div>
        <div class="upload-item"><span>warehouse-tag.webp</span><strong>Uploaded</strong></div>
      `;
    });
  }

  if (fakeResultButton && resultBox) {
    fakeResultButton.addEventListener("click", () => {
      resultBox.value = `Product Label:
Organic Face Cream
Hydrating Moisturizer
Net Weight: 50ml

Price Tag:
$59.99
SKU: 123456789

Invoice:
Invoice No: INV-2025-0314
Supplier: GreenLeaf Supplies
Total: $209.69`;
    });
  }

  if (clearDemoButton && uploadList && resultBox) {
    clearDemoButton.addEventListener("click", () => {
      uploadList.innerHTML = "";
      resultBox.value = "";
    });
  }

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      formMessage.textContent = "Demo submitted. In a real product, this form would send data to a server.";
    });
  }
});
