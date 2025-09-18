<div align="center">

# 🛒 Mahal — UI Admin Dashbaord Template

Vite + React + Redux + Shadcn + Tailwind v4, full responsive UI Admin Dashbaord template, **Free & Open Source**

[![support](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/elmarjanihamza/gift)
[![Vite](https://img.shields.io/badge/Vite-violet?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![React](https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Redux](https://img.shields.io/badge/Redux-purple?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org)
[![ShadCN](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=for-the-badge)](https://ui.shadcn.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)](https://ui.shadcn.com/)

## 🖥️ [Live Demo](https://mahal-dashboard.vercel.app/)

</div>

## Why Mahal?

⏳ Time is the biggest challenge. Many developers want to build an MVP, launch a study project, or release a real UI Admin Dashboard solution—but these web apps take a lot of time to develop and test. That’s why I created Mahal: to help the community manage theur projects with a ready-to-use solution.

## Features

- **Beautiful & Friendly UI/UX:** built with [Shadcn/ui](https://ui.shadcn.com/) style.
- **State Managemnt:** powered with [React Redux](https://react-redux.js.org/).
- **TailwindCSS v4:** built on top of [TailwindCSS v4](https://tailwindcss.com/), full editable.
- **Desktop/Tablet/Mobile:** responsive design, works on all devices.
- **Dark/Light:** change the dashboard theme to Light | Dark | System, easily theme toggle.
- **Statistics:** dynamic statistics data render, just retrieve and display the statistics.
- **Charts** dynamic performance data render, just retrieve and display the products performance with beutiful charts design.
- **Products:** dynamic products on all niches, just retrieve the products, display, manage and update them easily.
- **Siderbar:** collapsible sider, hide on mobile, listen to window re-size.

## Usage

1. Clone the project to your machine with git:

```
git clone https://github.com/hamzaelmarjani/mahal-dashboard.git
```

2. Install packages and run app:

```
cd mahal-dashboard
npm install
npm run dev
```

1. Open the app on browser from: [http://localhost:5173/](http://localhost:5173)

## Update data:

- Update colors: open the file `src/index.css`, update the values of the variables inside the `:root { ...  }`, you can use following colors methods: `HEX, RGBA, HSLA, HWB, LAB, LCH` but TailwindCSS prefers `OKLCH`. The primary color variable of the app is `--primary: oklch(0.7765 0.1751 212.82)`.
- Update the data inside Redux folder:

  - **Products:** open the file `src/redux/slices/products.ts` and edit the array `products`.
  - **Statistics:** open the file `src/redux/slices/statistics.ts` and edit the `initialState` data.
  - **Performance:** open the file `src/redux/slices/performance.ts` and edit the `initialState` data.

- Update the siderbar sections: open the file: `src/components/sidebar/app-sidebar.tsx` and edit the array `items`.
- Edit product details:

  - Open products tab from sidebar.
  - Click on the product to show its details modal.
  - Edit the changeable fields, and click on save.
  - (Optional) to update the product on your database either, you need to handle this from the file `src/api/crud.ts` inside the method: `updateProduct` of the class `APICrud`.

- Update medias:

  - Products images: all images can be found inside the folder `public/products`. make sure to use `square aspect ratio (1:1)` images for better UI display.
  - Favicon: you can update it by updating the file `public/favicon.svg`. Use svg file, if you want to use other format (like .ico), change the `index.html -> <link rel="icon" type="image/svg+xml" ...` set the type and href.

## License

Licensed under either of:

- [MIT License](LICENSE-MIT)
- [Apache License, Version 2.0](LICENSE-APACHE)

at your option.

## Contributing

Contributions are welcome! Please feel free to:

- Open issues for bugs or feature requests
- Submit pull requests with improvements
- Improve documentation or examples

Before contributing, please ensure your code follows React/Redux/Shadcn/TailwidCSS conventions.

## 📬 Contact & Hire Me

🚀 Want to add more advanced features to this template? I’ve got you covered! You can hire me.

**Company or Startup?** I can work **full-time** or **part-time**, 👉 **Remote** or **On-site**.

💌 Reach me at: **hamzaelmarjani@gmail.com**

✨ Thank you!

## Support

If you like this project, consider supporting me on Patreon 💖

[![patreon](https://img.shields.io/badge/Support-Open_Source-black?style=for-the-badge&logo=Patreon&logoColor=white)](https://www.patreon.com/elmarjanihamza/gift)

❤️ Thanks for reading, Happy Coding 💻
