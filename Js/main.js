function siteInit() {
  // Add  Icon

  const logo = document.createElement("link");
  logo.rel = "icon";
  logo.href = "../images/index/icon.jpg";
  document.head.appendChild(logo);

  // Add Robot fonts
  const robotFontCDN = `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
  rel="stylesheet"
/>`;
  document.head.innerHTML = document.head.innerHTML + robotFontCDN;

  // Add font Awsome
  const fontAwsomeScript = `<script
  src="https://kit.fontawesome.com/6c92deccb1.js"
  crossorigin="anonymous"
></script>;
`;
  document.head.innerHTML = document.head.innerHTML + fontAwsomeScript;
}
siteInit();

// -----------------------------
