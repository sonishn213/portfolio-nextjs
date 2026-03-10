// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

import "@/assets/css/animate.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/font-awesome-pro.min.css";
import "@/assets/css/flaticon_gerold.css";
import "@/assets/css/nice-select.css";
import "@/assets/css/backToTop.css";
import "@/assets/css/owl.carousel.min.css";
import "@/assets/css/swiper.min.css";
import "@/assets/css/odometer-theme-default.css";
import "@/assets/css/magnific-popup.css";
import "@/assets/css/main.css";
import "@/assets/css/main-2.css";
import "@/assets/css/main-3.css";
import "@/assets/css/gerold-core.css";
import "@/assets/css/light-mode.css";
import "@/assets/css/meanmenu.css";
import "@/assets/css/responsive.css";
import "@/assets/css/responsive-2.css";
import "@/assets/css/mymain.css";
import Script from "next/script";
import Footer from "@/components/layout/footer";
import StaticHeaderWrapper from "@/components/layout/staticHeaderWrapper";
import StickyHeaderWrapper from "@/components/layout/stickHeaderWrapper";
import HeaderContent from "@/components/layout/headerContent";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <StaticHeaderWrapper>
          <HeaderContent />
        </StaticHeaderWrapper>
        <StickyHeaderWrapper >
          <HeaderContent />
        </StickyHeaderWrapper>

        {children}
        <Footer />
        <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap-scroll-to-plugin.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap-scroll-trigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap-split-text.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/lenis.min.js" strategy="afterInteractive" />

        <Script src="/assets/js/nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/backToTop.js" strategy="afterInteractive" />
        <Script src="/assets/js/appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/lightcase.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded-pkgd.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/magnific-popup.js" strategy="afterInteractive" />
        <Script src="/assets/js/validate.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/meanmenu.js" strategy="afterInteractive" />

        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
