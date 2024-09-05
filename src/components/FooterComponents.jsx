import logo_white from "../assets/img/logo-79-white.svg";

const FooterComponents = () => {
  return (
    <footer className="footer bg-red-950 py-5 pt-20">
      <div className="container mx-auto px-4 md:px-10">
        <div className="footer-content grid w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-20">
          <div className="footer-content-left flex flex-col items-start gap-5">
            <img src={logo_white} className="w-[200px]" alt="" />
            <p className="text-base font-medium text-slate-200">
              Terinspirasi oleh pemikiran-pemikiran mendalam RA Kartini, website
              ini hadir untuk mengenang perjuangannya dan menyebarkan semangat
              emansipasi kepada generasi muda.
            </p>
          </div>
          <div className="footer-content-center flex flex-col items-start gap-5">
            <h2 className="text-2xl font-medium text-white">Menu</h2>
            <ul>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-base text-slate-200 hover:text-white"
                >
                  Beranda
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#about"
                  className="text-base text-slate-200 hover:text-white"
                >
                  Biografi Kartini
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#surat"
                  className="text-base text-slate-200 hover:text-white"
                >
                  Surat-surat Kartini
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#timeline"
                  className="text-base text-slate-200 hover:text-white"
                >
                  Timeline Perjuangan Kartini
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-content-right flex flex-col items-start gap-5">
            <h2 className="text-2xl font-medium text-white">Kontak Saya</h2>
            <ul>
              <li className="mb-3 text-base text-slate-200">
                +62-821-4309-2412
              </li>
              <li className="mb-3 text-base text-slate-200">
                mochammadfahmiks@gmail.com
              </li>
            </ul>
            <h2 className="text-2xl font-medium text-white">Social Media</h2>
            <div className="social-media flex items-center gap-4 md:gap-5">
              <a
                href=""
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white text-xl text-white transition-all hover:border-none hover:bg-white hover:text-slate-700"
              >
                <i className="ri-facebook-line"></i>
              </a>
              <a
                href=""
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white text-xl text-white transition-all hover:border-none hover:bg-white hover:text-slate-700"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href=""
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white text-xl text-white transition-all hover:border-none hover:bg-white hover:text-slate-700"
              >
                <i className="ri-linkedin-line"></i>
              </a>
              <a
                href=""
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white text-xl text-white transition-all hover:border-none hover:bg-white hover:text-slate-700"
              >
                <i className="ri-github-line"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-5 h-[2px] border-none bg-white opacity-75" />
        <p className="text-center text-xs text-slate-200 md:text-sm">
          Copyright 2024 &copy;<a href="">Mochammad Fahmi</a> - All Right
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponents;
