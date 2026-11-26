/* ============================================================================
   MVP WEBSITE STARTER — ★ EDIT THIS ONE OBJECT TO CUSTOMISE THE WHOLE SITE ★
   ----------------------------------------------------------------------------
   Everything business-specific lives in SITE_CONFIG below. Change the values
   here and the whole page updates — no need to edit index.html.

   How to customise:
   1. businessName / tagline / heroText / aboutText — your words.
   2. services — one line per service: { name: "...", price: "£..." }.
      Add or delete lines to add or remove services.
   3. hours — one line per row: { days: "...", time: "..." }.
      Use "Closed" for days the business is shut.
   4. address / phone / email / bookingUrl — your real details.
      - phoneDisplay is what visitors see, e.g. "01271 123 456".
      - phoneHref must start with "tel:" and have no spaces, e.g. "tel:+441271123456".
      - emailHref must start with "mailto:", e.g. "mailto:hello@yourshop.co.uk".
      - bookingUrl: a link to your booking page (Booksy, Fresha, Calendly…).
        If you have no booking page yet, put your phone link there instead,
        e.g. "tel:+441271123456", or "#" to disable the button.
   5. Colours: edit the --accent colour in styles.css (:root at the top).
   ========================================================================== */

const SITE_CONFIG = {
  businessName: "Forresters Barbers",
  location: "Barnstaple, Devon",
  tagline: "Sharp cuts. Honest prices. No fuss.",
  heroText: "A friendly neighbourhood barber shop. Classic cuts, beard trims and hot-towel shaves — walk in, sit down, leave looking sharp.",
  aboutText: "Forresters Barbers has been cutting hair on the high street for over ten years. No gimmicks — just experienced barbers, sharp tools, and a chair that is always ready. Come in for a cut, stay for a chat.",

  services: [
    { name: "Classic cut",          price: "£18" },
    { name: "Skin fade",            price: "£20" },
    { name: "Beard trim & shape",   price: "£10" },
    { name: "Cut & beard combo",    price: "£25" },
    { name: "Hot-towel shave",      price: "£15" },
    { name: "Kids' cut (under 12)", price: "£12" },
  ],
  servicesNote: "Cash and card accepted. Under-16s must be accompanied by an adult.",

  hours: [
    { days: "Monday – Friday", time: "9:00 – 17:30" },
    { days: "Saturday",        time: "8:30 – 16:00" },
    { days: "Sunday",          time: "Closed" },
  ],
  hoursNote: "Last walk-in 30 minutes before closing.",

  address: "12 High Street, Barnstaple, Devon EX31 1AA",
  phoneDisplay: "01271 000 000",
  phoneHref: "tel:+441271000000",
  email: "hello@example.com",
  emailHref: "mailto:hello@example.com",
  bookingUrl: "#contact",
};

/* --- Everything below this line is plumbing. You do not need to edit it. --- */

(function applyConfig(config) {
  "use strict";

  // Page title and meta description follow the business name + location.
  document.title = config.businessName + " — " + config.tagline;
  var meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", config.businessName + " — " + config.tagline + " " + config.location + ".");
  }

  // Plain text fields: any element with data-config="key" gets config[key].
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    if (config[key] !== undefined) el.textContent = config[key];
  });

  // Links: any element with data-config-href="key" gets config[key] as its href.
  document.querySelectorAll("[data-config-href]").forEach(function (el) {
    var key = el.getAttribute("data-config-href");
    if (config[key] !== undefined) el.setAttribute("href", config[key]);
  });

  // Services list, rebuilt from config.services.
  var servicesList = document.getElementById("servicesList");
  if (servicesList && Array.isArray(config.services)) {
    servicesList.innerHTML = "";
    config.services.forEach(function (service) {
      var li = document.createElement("li");
      var name = document.createElement("span");
      name.className = "service-name";
      name.textContent = service.name;
      var dots = document.createElement("span");
      dots.className = "service-dots";
      dots.setAttribute("aria-hidden", "true");
      var price = document.createElement("span");
      price.className = "service-price";
      price.textContent = service.price;
      li.append(name, dots, price);
      servicesList.appendChild(li);
    });
  }

  // Opening-hours table, rebuilt from config.hours.
  var hoursTable = document.getElementById("hoursTable");
  if (hoursTable && Array.isArray(config.hours)) {
    hoursTable.innerHTML = "";
    config.hours.forEach(function (row) {
      var tr = document.createElement("tr");
      var th = document.createElement("th");
      th.setAttribute("scope", "row");
      th.textContent = row.days;
      var td = document.createElement("td");
      td.textContent = row.time;
      tr.append(th, td);
      hoursTable.appendChild(tr);
    });
  }

  // Footer year always shows the current year.
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})(SITE_CONFIG);
