// Shared interactions for the static VisionText AI website.
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const fakeUploadButton = document.querySelector("#fakeUploadButton");
  const fakeResultButton = document.querySelector("#fakeResultButton");
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
        <div class="upload-item"><span>invoice-may-scan.pdf image</span><strong>Uploaded</strong></div>
        <div class="upload-item"><span>warehouse-tag.jpeg</span><strong>Uploaded</strong></div>
      `;
    });
  }

  if (fakeResultButton && resultBox) {
    fakeResultButton.addEventListener("click", () => {
      resultBox.value = `Project: Summer Listing Update
Source Files: marketplace-shot-01.png, label-set-bulk.jpg

Product Name: Ceramic Cup Set
Pack Size: 4 pieces
Main Colors: Sand, Olive, White
Material: Stoneware
Barcode: 81020411592
Care Instructions: Dishwasher safe

Suggested Use:
- Product listing draft
- Inventory note
- Supplier comparison sheet`;
    });
  }

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      formMessage.textContent = "Demo submitted. In a real product, this form would send data to a server.";
    });
  }
});
